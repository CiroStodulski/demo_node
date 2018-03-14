module.exports = (app) => {

    const userController = app.app.controllers.user;

    app.route('/user')
        .get(userController.list)
        .post(userController.add);

    app.route('/user/:id')
        .get(userController.remove)
        .post(userController.consult);

        
}