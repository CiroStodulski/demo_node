module.exports = (app) => {

    const controller = app.app.controllers.auth;

    app.all('/', controller.login);

    app.route('/login')
        .post(controller.auth)
        .get(controller.logout);

    app.all('/*', controller.check);

} 