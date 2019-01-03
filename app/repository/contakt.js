const contakt = require('../models/contakt');

module.exports = function contaktRepository() {
    const self = this;

    self.add = data => {
        const new_email = contakt.model(data);

        return new_email.save()
            .then(data => {
                if (!data) throw { message: 'Unknown error.', status: 500 };

                return { message: "Ok" }
            });
    }

    self.getAll = () => {
        return contakt.model.find({}).then(data => { return data; });
    }

    self.getByID = id => {
        return contakt.model.find(id).then(data => { return data; });
    }

    self.delete = id => {
        return contakt.model.findOneAndRemove(id)
            .then(data => {
                if (!data) { throw { message: 'Unknown error.', status: 500 }; }
                return data;
            });
    }
}
