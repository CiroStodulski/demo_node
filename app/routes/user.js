module.exports = (app) => {

    const userController = app.app.controllers.user;

    app.route('/')
        .get(userController.list)
        .post(userController.add);

    app.route('/:id')
        .get(userController.remove)
        .post(userController.consult);

        
}