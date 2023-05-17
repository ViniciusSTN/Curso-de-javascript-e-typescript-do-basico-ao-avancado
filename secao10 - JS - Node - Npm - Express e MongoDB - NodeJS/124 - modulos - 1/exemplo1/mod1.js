const nome = 'Vinicius';
const sobrenome = 'Santana';

const falaNome = () => nome + ' ' + sobrenome;

// console.log(module); 
// objeto do node
// possui a chave exports: {} com um objeto com tudo que é exportado

// -----------------------------------------------------
// para exportar:

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// -----------------------------------------------------
// ou então usando o atalho:

exports.nome = nome;
exports.falaNome = falaNome;
exports.sobrenome = sobrenome;

// console.log(module.exports);
