// para importar tudo que foi exportado: 

const mod1 = require('./mod1');
// console.log(mod1);
// console.log(mod1.falaNome());

// ----------------------------------------------------
// para importar apenas algo expecifico:

const falaNome = require('./mod1').falaNome;
// console.log(falaNome());

// ----------------------------------------------------
// para importar via destructuring

const {nome, sobrenome, falaNome} = require('./mod1');
// console.log(nome, sobrenome);
// console.log(falaNome());
