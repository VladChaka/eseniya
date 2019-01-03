const landmark = require('../models/landmark');

module.exports = function landmarkRepository() {
    const self = this;

    self.add = landmark_data => {
        const new_landmark = landmark.model(landmark_data);

        return new_landmark.save()
            .then(data => {
                if (!data) throw { message: 'Unknown error.', status: 500 };

                return self.update({ list_landmarks: { id: data._id, name: data.name } });
            });
    }


    self.update = landmark_data => {
        const new_data = checkEmptyField(landmark_data);

        return landmark.model.updateOne({ _id: new_data._id }, new_data)
            .then(data => {
                if (!data) { throw { message: 'Incorrect ID.', status: 400 }; }

                return { message: 'Ok' }
            });
    }

    self.getAll = () => {
        return landmark.model.find({}).then(data => { return data; });
    }

    self.getByCity = id => {
        return landmark.model.find(id).then(data => { return { city: data[0].city_name, data: data}; });
    }

    self.delete = id => {
        return landmark.model.findOneAndRemove(id)
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
