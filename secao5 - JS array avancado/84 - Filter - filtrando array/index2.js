const people = [
    {name: 'Luiz', age: 62},
    {name: 'Ana', age: 23},
    {name: 'Gabriel', age: 34},
    {name: 'Vinicius', age: 28},
    {name: 'Lucas', age: 7}
];

// nome maior que 3 letras e idade maior que 25
const filterPeople = people.filter(obj => obj.name.length > 3).filter(obj => obj.age > 25);
console.log(filterPeople);


// nomes que terminam com s
const filterPeople2 = people.filter(obj => obj.name.toLowerCase().endsWith('s'));
console.log(filterPeople2);


// nomes que começam com g
const filterPeople3 = people.filter(obj => obj.name.toLowerCase().startsWith('g'));
console.log(filterPeople3);