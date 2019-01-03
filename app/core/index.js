let Administration = require('../service/Administration'),
    administrationDataService = new Administration(),
    City = require('../service/City'),
    cityDataService = new City(),
    Article = require('../service/Article'),
    articleDataService = new Article(),
    Landmark = require('../service/Landmark'),
    landmarkDataService = new Landmark(),
    News = require('../service/News'),
    newsDataService = new News(),
    Contakt = require('../service/Contakt'),
    contaktDataService = new Contakt(),
    Middleware = require('../service/Middleware'),
    middleware = new Middleware();

module.exports = {
    administrationDataService: administrationDataService,
    cityDataService: cityDataService,
    articleDataService: articleDataService,
    landmarkDataService: landmarkDataService,
    newsDataService: newsDataService,
    contaktDataService: contaktDataService,
    middleware: middleware
};