module.exports = (app) => {

    const db = app.config.nedb,
        UserDAO = new app.app.daos.User(db);
    let controller = {};

    controller.list = (req, res) => {
        UserDAO.list((err, result) => err == true ? console.log(err) : res.render('user/list', { listUser: result, user: [{ _id: '', name: '', password: '' }] }));
    }

    controller.add = (req, res) => {
        if (req.body._id.length == 0) {
            delete req.body._id;
            UserDAO.add(req.body, (err, result) => err == true ? console.log(err) : res.redirect('/'));
        } else
            UserDAO.update(req.body, (err, result) => err == true ? console.log(err) : res.redirect('/'));
    }

    controller.remove = (req, res) => {
        UserDAO.remove(req.params.id, (err, result) => err == true ? console.log(err) : res.redirect('/'));
    }

    controller.consult = (req, res) => {
        UserDAO.consult(req.params.id, (err, result) => err == true ? console.log(err) : res.render('user/list', { listUser: [], user: result }));
    }

    return controller;

}