const jwt = require('jsonwebtoken');

module.exports = function Middleware () {
    const self = this;

    self.mysql = (req, res, next) => {
        const mysql      = require('mysql'),
          config     = require('../../config.json')
          connection = mysql.createConnection({
              host     : config.mysql.host,
              user     : config.mysql.user,
              password : config.mysql.password,
              database : config.mysql.database
          });
    
        connection.connect(err => {
            if (err) throw err.message;
            req.mysql = connection;
            next();
        });
    }

    self.cors = (req, res, next) => {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }

    self.response = (res, data, error) => {
        if (!error) { return res.status(200).json(data) }
        res.status(data.status || 500).json({ error: data.message });
    }

    self.notFoundUrl = (req, res, next) => {
        res.status(404);
        console.log(`Not found URL: ${req.url}`);
        res.send({ error: 'Not found' });
        next();
    }
    self.internalError = (err, req, res, next) => {
        res.status(err.status || 500);
        console.log(`Internal error(${res.statusCode}): ${err.message}`);
        res.send({ error: err.message });
        return;
    }

    self.token = (req, res, next) => {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];	
        if (token) {
            jwt.verify(token, "esya1998", function(err, decoded) {
                if (err) {
                    return res.status(403).json({ error: 'Failed to authenticate token.' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            res.status(401).json({ error: 'No token provided.' });
        }
    }
}