// filter
// OBS: a função de callback do filter deve retornar true ou false

// Retorne os números maiores que 10
const numbers = [5, 50, 80, 1, 2, 4, 60, 25, 83];

// ------------------------------------------------------------------

// recebe os parâmetros automaticamente
function callbackFilter(value, index, array) {
    return value > 10;  // true or false
}

const filterNum = numbers.filter(callbackFilter);
console.log(filterNum);

// ------------------------------------------------------------------

// ou com função anônima (mais comum)

// const filterNum2 = numbers.filter(value => {
//     return value > 10;
// });

// forma reduzida, omitindo chaves e return
const filterNum2 = numbers.filter(value => value > 10);
console.log(filterNum2);