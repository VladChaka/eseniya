const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      LandmarkSchema = new Schema({
        name : {
            type: String,
            required: true,
            unique: true
        },
        number_places: {
            type: String,
        },
        year_foundation: {
            type: String,
        },
        opening_time: {
            type: String
        },
        city_id: {
            type: String
        },
        city_name: {
            type: String
        },
        link: {
            type: String
        },
        img: {
            type: String
        },
        id_article: {
            type: String
        }
      }),
      LandmarkSchemaModel = mongoose.model('landmark', LandmarkSchema);

module.exports = { schema: LandmarkSchema, model: LandmarkSchemaModel }