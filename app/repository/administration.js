let administration = require('../models/administration'),
    bcrypt = require('bcrypt-nodejs'),
    jwt    = require('jsonwebtoken');

module.exports = function userRepository() {
    let self = this;

    self.registration = data => {
        let datauser = administration.model(data)
        
        return createHashPassword(datauser)
            .then(new_user => {
                return new_user.save()
                    .then(user => {
                        if (!user) throw { message: 'Unknown error.', status: 500 };
                        return user
                    });
            });
    }

    self.authentication = data => {
        
        const error = { message: 'Authentication failed. Login or password wrong.', status: 400 };
        return administration.model.findOne({ username: data.username })
            .then(user => {                    
                if (!user) { throw error; }

                return verifyPassword(data.password, user.password)
                    .then(success => {
                        if (!success) { throw error; }

                        const token = jwt.sign({ username: data.username }, 'esya1998');

                        return { id: user._id, token: token, role: user.post };
                    });
            });
    }

    self.getAll = () => {
        return administration.model.find({}).then(data => { return data });
    }

    self.delete = id => {
        return administration.model.findOneAndDelete(id).then(data => { return data });
    }

    function verifyPassword(password, _thisPassword) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, _thisPassword, (err, isMatch) => {			
                if (err) { reject({ message: err.message, status: 500 }); }
                resolve(isMatch);
            });
        });
    }
    

    function createHashPassword(data) {
        return new Promise((resolve, reject) => {
            let user = data;
            
            if (data.password !== undefined && data.password.length !== 0) {
                bcrypt.genSalt(5, (err, salt) => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    bcrypt.hash(user.password, salt, null, (err, hash) => {
                        if (err) {
                            reject(err);
                            return;
                        }

                        user.password = hash;
                        resolve(user);
                    });
                });
            } else {
                resolve(user);
            }
        });
    };
}