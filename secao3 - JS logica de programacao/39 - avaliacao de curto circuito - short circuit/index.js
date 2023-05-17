/*
  FALSY:
    false
    0
    '' "" ``
    null / undefined
    NaN

  QUALQUER COISA DIFERENTE DISSO RETORNARÁ TRUE
*/

/*
  && ----> false && true -> ('retorna o valor do false')
  || ----> true || false -> ('retorna o valor do true')
*/

// como todos são true, retornará o último teste 
let test = 'Vinicius' && 'Henrique' && 'Santana';
console.log(test);

// como um teste é false, retornará o valor do false, nesse caso NaN
let test2 = 'Vinicius' && NaN && 'Santana';
console.log(test2);

// -----------------------------------------------------------------

// no caso do && (and), caso todos forem true, retorna o valor do ultimo teste, caso tiver algum false, retorna o valor do primeiro false.
console.log('0' && null && false && 'Vinicius' && true);

// no caso do || (or), retorna o primeiro valor true da expressão, caso todos forem false, retorna o ultimo valor informado.
console.log(0 || null || false || 'Vinicius' || true);

// ------------------------------------------------------------------

// EXEMPLOS PRÁTICOS

function falaOi() {
  return 'Oi';
}
let vaiExecutar = true;

// como a variável vaiExecutar tem valor true, o retorno do teste será o último valor testado, nesse caso a função falaOi() será executada, caso vaiExecutar tivesse valor false, o retorno seria o valor da variável e não executaria a função.
console.log(vaiExecutar && falaOi());
// ------------------------------------------------------------------

// EXEMPLOS PRÁTICOS

// exemplo de plano de fundo de perfil de usuário
// caso o usuario nao informar a cor, corUsuario será null, se ele selecionar, corUsuario será a cor selecionada por ele, logo a expressão será verdadeira e retornará a cor selecionada para a variável corFundo
const corUsuario = null
const corFundo = corUsuario || 'preto'
console.log(corFundo)