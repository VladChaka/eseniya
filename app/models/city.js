const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      CitySchema = new Schema({
        name : {
            type: String,
            required: true,
            unique: true
        },
        population: {
            type: String,
            required: true
        },
        count_landmarks: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        },
        link: {
            type: String
        },
        img: {
            type: String
        },
        location: [{
            lat: {
                type: String,
                required: true
            },
            lng: {
                type: String,
                required: true
            },
            info: {
                type: String,
                required: true
            }
        }]
      }),
      CitySchemaModel = mongoose.model('city', CitySchema);

module.exports = { schema: CitySchema, model: CitySchemaModel }