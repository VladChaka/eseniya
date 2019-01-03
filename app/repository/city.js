const city = require('../models/city');

module.exports = function cityRepository() {
    const self = this;

    self.add = city_data => {
        const new_city = city.model(city_data);
        
        return new_city.save()
            .then(data => {
                if (!data) throw { message: 'Unknown error.', status: 500 };
                return data;
            });
    }

    self.update = city_data => {
        const new_data = checkEmptyField(city_data),
            sizeLandmarks = Object.keys(new_data.list_landmarks),
            list_landmarks = sizeLandmarks.length !== 0 ? new_data.list_landmarks : null;
        delete new_data.inage;

        return city.model.updateOne({ _id: new_data._id }, new_data)
            .then(data => {
                if (!data) { throw { message: 'Incorrect ID.', status: 400 }; }

                if (list_landmarks !== null) {
                    return city.model.updateOne({ _id: new_data._id }, { $push: { list_landmarks: list_landmarks } }, { new: true })
                        .then(data => {
                            if (!data) { throw { message: 'Unknown error.', status: 500 }; }

                            return { message: 'Ok' }
                        });
                }

                return { message: 'Ok' }
            });
    }

    self.getAll = () => {
        return city.model.find({}).then(data => { return data; });
    }

    self.delete = id => {
        return city.model.findOneAndRemove(id)
            .then(data => {
                if (!data) { throw { message: 'Unknown error.', status: 500 }; }
                return data;
            });
    }

    function checkEmptyField(data) {
        let result = {};

        for (const key in data) {
            if (typeof data[key] === 'object') {
                result[key] = checkEmptyField(data[key]);
            } else {
                let field = data[key] + '';
                field = field.replace(/\s*/g, '');

                if (field !== "" && field !== 'undefined') {
                    result[key] = data[key];
                }
            }
        }

        return result;
    }
}
