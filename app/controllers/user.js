module.exports = (app) => {

    const db = app.config.nedb;

    let controller = {};


    controller.listar = (req, res) => {

        res.send('listar users')

    }

    controller.dados = (req, res) => {
        
        const UserDAO = new app.app.daos.User(db);

        let dados = [
            {
                nome : 'ciro',
                password : '123'
            },
            {
                nome: 'leonardo',
                password: '123'
            },
            {
                nome: 'joao',
                password: '123'
            }
        ]

        UserDAO.dados(dados, (err, result) => {
            err == true
                ? res.send(err)
                : res.send(result);
        })

    }

    return controller;

}