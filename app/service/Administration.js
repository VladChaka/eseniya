const Administration = require('../repository/administration'),
      administration = new Administration();

module.exports = function User() {
    let self = this;
    
    self.registration = data => { return administration.registration(data) }
    self.authentication = data => { return administration.authentication(data); }
    self.getAll = () => { return administration.getAll(); }
    self.delete = id => { return administration.delete(id); }
}