const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      config = require('./config.json'),
      middleware = require('./app/core/index').middleware,
      app = express();

mongoose.connect(config.mongoose.url, { useNewUrlParser: true }, err => {
    if (err) return console.log(err.message);
});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(middleware.cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static('test'));

app.use('/', require(__dirname + '/app/controller/index'));

app.use(middleware.notFoundUrl);
app.use(middleware.internalError);


app.listen(config.port, () => console.log(`Server started on ${config.port} port`));
