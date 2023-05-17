let string = 'O rato roeu a roupa do rei de Roma.'
//            0123456789
console.log(string.slice(2, 6)) //retorna caracteres do 2 ao 5
console.log(string.slice(-5, -1))

console.log(string.split(' '))  // retorna um array com cada palavra
console.log(string.split(' ', 2))  // é possível limitar o número de indices do array