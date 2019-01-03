const news = require('../models/news');

module.exports = function newsRepository() {
    const self = this;

    self.add = email => {
        const new_email = news.model(email);

        return new_email.save()
            .then(data => {
                if (!data) throw { message: 'Unknown error.', status: 500 };

                return { message: "Ok" }
            });
    }

    self.getAll = () => {
        return news.model.find({}).then(data => { return data; });
    }

    self.getByID = id => {
        return news.model.find(id).then(data => { return data; });
    }

    self.delete = id => {
        return news.model.findOneAndRemove(id)
            .then(data => {
                if (!data) { throw { message: 'Unknown error.', status: 500 }; }
                return data;
            });
    }
}
