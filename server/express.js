const express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./app/public'));

app.use(expressSession({
    secret: 'demo',
    resave: false,
    saveUninitialized: false
}));

consign()
    .include('config')
    .then('app/daos')
    .then('app/controllers')
    .then('app/routes')
    .into(app)

module.exports = app;
