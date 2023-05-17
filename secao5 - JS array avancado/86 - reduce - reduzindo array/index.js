// reduce
// reduzir um array a um único elemento

// EXEMPLOS
// somar todos os números (reduce)
// retornar um array com pares (filter)
// retornar um array com o dobro dos valores (map)

const numbers = [5, 50, 80, 1, 2, 4, 60, 25, 83];
const total = numbers.reduce((accumulator, value, index, array) => {
    accumulator += value;
    return accumulator;
}, 0); // 0 representa o valor inicial do acumulador, caso for omitido, o valor inicial será o valor do primeiro índice

console.log(total);