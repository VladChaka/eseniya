const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ArticleSchema = new Schema({
        section : {
            type: String,
            required: true,
            unique: true
        },
        content: {
            type: String
        },
        image: [{
            src: {
                type: String
            }
        }]
      }),
      ArticleSchemaModel = mongoose.model('article', ArticleSchema);

module.exports = { schema: ArticleSchema, model: ArticleSchemaModel }