const NewsRepository = require('../repository/news'),
      newsRepository = new NewsRepository();

module.exports = function article() {
    let self = this;
    
    self.add = email => { return newsRepository.add(email) }
    self.getById = id => { return newsRepository.getByCity(id) }
    self.getAll = () => { return newsRepository.getAll() }
    self.delete = () => { return newsRepository.delete() }
}