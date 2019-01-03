const LandmarkRepository = require('../repository/landmark'),
      landmarkRepository = new LandmarkRepository();

module.exports = function article() {
    let self = this;
    
    self.add = data => { return landmarkRepository.add(data) }
    self.update = data => { return landmarkRepository.update(data) }
    self.getByCity = id => { return landmarkRepository.getByCity(id) }
    self.getAll = () => { return landmarkRepository.getAll() }
    self.delete = () => { return landmarkRepository.delete() }
}