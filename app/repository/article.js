const article = require('../models/article');

module.exports = function articleRepository() {
    const self = this;

    self.add = data => {
        const new_articles = article.model(data);
        
        return new_articles.save()
            .then(article => {
                if (!article) throw { message: 'Unknown error.', status: 500 };
                return article
            });
    }

    self.update = data => {
        const new_data = checkEmptyField(data),
            sizeObject = Object.keys(new_data.image),
            images = sizeObject.length !== 0 ? new_data.image : null;
        delete new_data.inage;

        return article.model.updateOne({ _id: new_data._id }, new_data)
            .then(data => {
                if (!data) { throw { message: 'Incorrect ID.', status: 400 }; }

                if (images !== null) {
                    return article.model.updateOne({ _id: new_data._id }, { $push: { image: images } }, { new: true })
                        .then(data => {
                            if (!data) { throw { message: 'Incorrect data.', status: 400 }; }

                            return { message: 'Ok' }
                        });
                }

                return { message: 'Ok' }
            });
    }

    self.getOne = () => {
        return article.model.find({}).then(articls => { return articls; });
    }

    self.delete = id => {
        return article.model.findOneAndRemove(id)
            .then(articl => {
                if (!articl) { throw { message: 'Unknown error.', status: 500 }; }
                return articl;
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
