const ArticleRepository = require('../repository/article'),
      articleRepository = new ArticleRepository();

module.exports = function article() {
    let self = this;
    
    self.add = data => { return articleRepository.add(data) }
    self.update = data => { return articleRepository.update(data) }
    self.getOne = () => { return articleRepository.getOne() }
    self.delete = () => { return articleRepository.delete() }
}