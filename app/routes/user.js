module.exports = (app) => {

    const userController = app.app.controllers.user;

    app.get('/', userController.listar);

    app.get('/dados', userController.dados);


}