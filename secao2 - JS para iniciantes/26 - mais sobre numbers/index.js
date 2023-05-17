let num1 = 100
let num1Binary = num1.toString(2)
// console.log(num1Binary)

let test = Number.isInteger(num1)
// Number.isNaN(num1)
// console.log(test)


// JavaScript possui imprecisão para fazer cálculos com números flutuantes
// Padrão IEEE 754-2008
let num2 = 0.64
let num3 = 0.001
let result = num2 + num3
console.log(result)

// Para resolver isso: (melhor forma)
result = parseFloat(result.toFixed(10))
console.log(result)
console.log(Number.isInteger(result))

// Outra forma de resolver (o número a ser multiplicado depende da quantidade de casas decimais)
let result2 = ((num2 * 1000) + (num3 * 1000)) / 1000
console.log(result2)
console.log(Number.isInteger(result))

// Caso não quiser arredondar
let numero = 39.8 - 28.2;
let partes = (numero + '').split('.'); // ['11', '599999999999998']
let parteCorrigida = partes[1].slice(0, 2); // '59'
let numeroFinal = [partes[0], parteCorrigida].join('.')
console.log(numeroFinal); //11.59
