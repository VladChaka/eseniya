const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      NewsSchema = new Schema({
        email : {
            type: String,
            required: true,
            unique: true
        }
      }),
      NewsSchemaModel = mongoose.model('news', NewsSchema);

module.exports = { schema: NewsSchema, model: NewsSchemaModel }