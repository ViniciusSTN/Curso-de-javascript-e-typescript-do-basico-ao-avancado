// somente para iterar em arrays
// NÃO RETORNA NADA, parecido com for in e for of

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

numbers.forEach((value, index, array) => {
    console.log(value, index);
});