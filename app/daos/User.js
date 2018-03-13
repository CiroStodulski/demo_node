function User(db) {
    this._db = db;
}

User.prototype.dados = function (dados, callback) {
    this._db.insert(dados, (err, resul) => {
        callback(err, resul);
    })
}

module.exports = () => User;