const ContaktRepository = require('../repository/contakt'),
      contaktRepository = new ContaktRepository();

module.exports = function article() {
    let self = this;
    
    self.add = data => { return contaktRepository.add(data) }
    self.getById = id => { return contaktRepository.getByCity(id) }
    self.getAll = () => { return contaktRepository.getAll() }
    self.delete = () => { return contaktRepository.delete() }
}