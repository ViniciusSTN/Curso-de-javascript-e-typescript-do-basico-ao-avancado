const name = ['Luiz', 'Otávio', 'Henrique'];
// resumo: 
// for classico -> para iteráveis (string e array)
// for in -> retorna indice ou chave (string, array e objetos) // Unico p/ objetos
// for of -> retorna valor -> para iteráveis (string e array)


// ---------------------------------------------------------
// não funciona para objetos, pois não é iterável
for (let i = 0; i < name.length; i++) {
    // console.log(i);
}
console.log('');

// ---------------------------------------------------------
// for in -> lê os indices de array ou chaves de objeto
for (let i in name) {
    console.log(i);
}
console.log('');


const obj = {
    name: 'Luiz',
    lastName: 'Silva',
};
for (let i in obj) {
    console.log(obj[i]);
}
console.log('');

// ---------------------------------------------------------
// for of -> lê os valores do array
// não funciona para objetos, pois não é iterável
for (let i of name) {
    console.log(i);
}
console.log('');

// ---------------------------------------------------------
// forEach -> valor, indice, array ou objeto
name.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});