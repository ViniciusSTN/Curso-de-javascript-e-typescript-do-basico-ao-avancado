const person =  {
    name: "Vinicius",
    lastName: "Santana"
}

// duas formas de acessar valores de chaves de objetos literais
console.log(person['name']);
console.log(person.name);

// ideal quando não sabemos a chave que o usuario quer acessar, funcionará de forma dinâmica
const key = 'name';
console.log(person[key]); 

// -----------------------------------------------------------------

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

// a palavra new cria um objeto vazio {} e atrela a palavra this para esse objeto e retorna o this
const p1 = new Person("Vinicius", "Santana");
console.log(p1);

// -----------------------------------------------------------------

// para travar objetos para que ele não seja alterado (não será possível alterar valores de chaves/atributos)
// também funciona para array
Object.freeze(p1);
p1.sla = 4;
console.log(p1);
