const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ContaktSchema = new Schema({
          name: {
              type: String,
              required: true
          },
          phone: {
              type: String,
              required: true
          },
          email: {
              type: String,
              required: true
          },
          message: {
              type: String,
              required: true
          }
      }),
      ContaktSchemaModel = mongoose.model('contakt', ContaktSchema);

module.exports = { schema: ContaktSchema, model: ContaktSchemaModel }