// retorne a pessoa mais velha

const people = [
    {name: 'Ana', age: 23},
    {name: 'Gabriel', age: 34},
    {name: 'Vinicius', age: 28},
    {name: 'Lucas', age: 7},
    {name: 'Luiz', age: 62}
];

// como não foi declarado um valor inicial ao acumulador, o valor inicial dele será o primeiro índice
const olderPerson = people.reduce((accumulator, obj) => {
    if (accumulator.age > obj.age) return accumulator;
    return obj;
});

console.log(olderPerson);