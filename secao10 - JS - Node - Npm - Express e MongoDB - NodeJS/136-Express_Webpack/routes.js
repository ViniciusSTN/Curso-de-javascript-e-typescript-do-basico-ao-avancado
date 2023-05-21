// esse arqivo tem a função de fazer o roteamento, analisar qual rota é e chamar o controlador mvc controler

const express = require('express');
const router = express.Router();

const homeController = require('./src/controllers/homeController');
const contactsController = require('./src/controllers/contactsController');

// Rotas da home
router.get('/', homeController.homePage);
router.post('/', homeController.handlePost);

// Rotas do contato
router.get('/contato', contactsController.homePage);

module.exports = router;
