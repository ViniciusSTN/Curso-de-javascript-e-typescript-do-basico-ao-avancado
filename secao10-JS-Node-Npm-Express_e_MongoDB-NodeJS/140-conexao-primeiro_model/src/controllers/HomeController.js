// -----------------------------------------------------------
const HomeModel = require('../models/HomeModel');

// OBS: normalmente não é o controller que vai criar e buscar esses dados e sim o model

// criar nova coleção no BD
// retorna uma promise
// normalmente não é usado dessa maneira
HomeModel.create({
    titulo: 'Um título de teste',
    descricao: 'Uma descrição de teste'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

// buscar os dados
HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

// -----------------------------------------------------------

exports.homePage = (req, res, next) => {
    console.log('Respondendo o cliente');
    res.render('index');
    console.log(`req.session: ${req.session.name}`);
    next();
};

exports.handlePost = (req, res) => {
    res.send(req.body);
    return;     // não é obrigatorio retornar, apenas para ter certeza que nada será executado depois dessa função
};
