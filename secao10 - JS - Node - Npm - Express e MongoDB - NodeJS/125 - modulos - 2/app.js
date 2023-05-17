const Cachorro = require('./mod');

const c1 = new Cachorro('Rex');
c1.latir();

// -----------------------------------------------------------
// percorrer entre caminhos 

// console.log(__filename);    // caminho do arquivo
// console.log(__dirname);     // caminho da pasta

const path = require('path');

console.log(path.resolve(__dirname, '..', '..', 'arquivo', 'imagens'));

console.log('');

console.log(path.resolve(__dirname, '.', '.', 'arquivo', 'imagens'));
