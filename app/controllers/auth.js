module.exports = (app) => {

    let controller = {};

    const db = app.config.nedb,
        UserDAO = new app.app.daos.User(db);

    controller.login = (req, res) => res.render('auth/login', { msg: '', suc: '' });

    controller.auth = (req, res) => {
        UserDAO.auth(req.body, (err, result) => {
            err == true
                ? res.render('auth/login', { msg: err, suc: '' })
                : result.length > 0
                    ? (req.session.auth = true) == true
                        ? res.redirect('/user')
                        : res.redirect('/')
                    : res.render('auth/login', { msg: 'user is not defound!', suc: '' });
        })
    };

    controller.check = (req, res, next) => {
        req.session.auth
            ? next()
            : res.render('auth/login', { msg: 'session is not loaded, you need authentication', suc: '' });
    };

    controller.logout = (req, res) => {
        req.session.destroy((err) => {
            res.render('auth/login', { suc: 'see you later!', msg: '' });
        });

    }

    return controller;
} 