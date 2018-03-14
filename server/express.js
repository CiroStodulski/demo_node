const express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    multparty = require('connect-multiparty'),
    app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multparty());

app.use(express.static('./app/public'));

consign()
    .include('config')
    .then('app/controllers')
    .then('app/daos')
    .then('app/routes')
    .into(app)
    

module.exports = app;