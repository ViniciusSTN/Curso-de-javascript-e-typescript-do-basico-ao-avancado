// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto

const people = [
    {name: 'Luiz', age: 62},
    {name: 'Ana', age: 23},
    {name: 'Gabriel', age: 34},
    {name: 'Vinicius', age: 28},
    {name: 'Lucas', age: 7}
];

// ------------------------------------------------------------------
// retornando nomes

const string = people.map(obj => obj.name);
console.log(string);

// ------------------------------------------------------------------
// excluindo a chave name

// OBS: ao dar delete, irá excluir a chave name dos objetos originais

// const age = people.map(obj => {
//     delete obj.name;
//     return obj.age;
// });
// console.log(age);

// ------------------------------------------------------------------
// ou apenas retornando age

// const age2 = people.map(obj => {age: obj.age});    // erro por conta das chaves {}, pois o JS irá achar que as chaves fazem parte da arrow function e não um objeto

// para resolver o erro das chaves basta retornar uma expressão envolvida em parenteses ()
const age2 = people.map(obj => ({age: obj.age}));
console.log(age2);

// ------------------------------------------------------------------

// adicionando id
// nesse caso NÃO irá alterar o vetor de objetos original, pois a modificação foi feita direto no return
const peopleWithId = people.map((obj, index) => ({id: index + 1, ...obj}));
console.log(peopleWithId);

// nesse caso IRÁ alterar o vetor de objetos original
const peopleWithId2 = people.map((obj, index) => {
    obj.id = index + 1
    return obj;
});
console.log(peopleWithId2);


// console.log(people);