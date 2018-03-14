module.exports = (app) => {

    const controller = app.app.controllers.auth;



    app.all('/', controller.login);

    app.post('/login', controller.auth)

    app.all('/*', controller.check)

   

} 