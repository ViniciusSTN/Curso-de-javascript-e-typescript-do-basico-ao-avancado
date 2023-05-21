const express = require('express');
const router = express.Router();

const homeController = require('./src/controllers/homeController');
const contactsController = require('./src/controllers/contactsController');

//----------------------------------------------------------------------
// é possivel executar varias funções antes e depois de entregar o conteudo para o cliente, ou então usando para os outros verbos. EX: POST

function meuMiddleware2(req, res, next) {
    req.session = {name: 'Luiz', lastName: 'Miranda'};
    console.log('Passei no seu Middleware');
    next();
}

router.get('/', meuMiddleware2, homeController.homePage, function(req, res) {
    console.log('Já respondi o cliente');
    console.log(`req.session.name: ${req.session.name}`);
});
// ---------------------------------------------------------------------
router.post('/', homeController.handlePost);

// Rotas do contato
router.get('/contato', contactsController.homePage);

module.exports = router;
