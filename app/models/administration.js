const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      UserSchema = new Schema({
          username: {
              type: String,
              required: true,
              unique: true
          },
          password: {
              type: String,
              required: true
          },
          email: {
              type: String,
              required: true
          },
          name: {
              type: String,
              required: true
          },
          surname: {
              type: String,
              required: true
          },
          patronymic: {
              type: String,
              required: true
          }
      }),
      UserSchemaModel = mongoose.model('user', UserSchema);

module.exports = { schema: UserSchema, model: UserSchemaModel }