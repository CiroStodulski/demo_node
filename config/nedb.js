const nedb = require('nedb');

const db = new nedb({
    filename: 'db',
    autoload: true
});

module.exports = db;