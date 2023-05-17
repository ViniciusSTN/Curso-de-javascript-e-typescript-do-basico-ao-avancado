const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Vinicius');
// console.log(p1);

// -------------------------------------------------------

// Módulos padrão do node ou módulos instalados por npm não precisa informar o caminho para importar
// exemplo:
const axios = require('axios');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));