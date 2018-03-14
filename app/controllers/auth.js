module.exports = (app) => {

    let controller = {};
    const db = app.config.nedb,
        UserDAO = new app.app.daos.User(db);

    controller.login = (req, res) => {
        res.render('auth/login', { msg: '' });
    }

    controller.auth = (req, res) => {
        UserDAO.auth(req.body, (err, result) => err == true ? res.render('auth/login', { msg: err }) : result.length > 0 ? (req.session.auth = true) == true ? res.redirect('/user') : res.redirect('/') : res.render('auth/login', { msg: 'user is not defound!' }));
    }

    controller.check = (req, res, next) => req.session.auth == true ? next() : res.render('auth/login', { msg: 'session is not loaded, you need authentication' });

    return controller;
} 