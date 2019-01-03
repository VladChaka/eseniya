const CityRepository = require('../repository/city'),
      cityRepository = new CityRepository();

module.exports = function article() {
    let self = this;
    
    self.add = data => { return cityRepository.add(data) }
    self.update = data => { return cityRepository.update(data) }
    self.getAll = () => { return cityRepository.getAll() }
    self.delete = () => { return cityRepository.delete() }
}