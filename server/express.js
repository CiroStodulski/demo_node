const express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    multparty = require('connect-multiparty'),
    app = express();

consign()
    .include('config')
    .then('app')
    .into(app)

module.exports = app;