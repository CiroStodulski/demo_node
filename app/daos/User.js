function User(db) {
    this._db = db;
}

User.prototype.list = function (callback) {
    this._db.find({}, (err, result) => callback(err, result));
}

User.prototype.add = function (dados, callback) {
    this._db.insert(dados, (err, result) => callback(err, result));
}

User.prototype.remove = function (id, callback) {
    this._db.remove({ _id: id }, (err, result) => callback(err, result));
}

User.prototype.consult = function (id, callback) {
    this._db.find({ _id: id }, (err, result) => callback(err, result));
}

User.prototype.auth = function (dados, callback) {
    this._db.find({ name: dados.name, password: dados.password }, (err, result) => callback(err, result));
}
User.prototype.update = function (dados, callback) {
    this._db.update({ _id: dados._id }, dados, {}, (err, result) => callback(err, result));
}

module.exports = () => User;