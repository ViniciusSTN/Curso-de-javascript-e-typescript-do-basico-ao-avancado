const personPrototype = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype); // cria objeto vazio com prototype de personPrototype
anotherPerson.firstName = 'Joana'; // shadowing -> substitui o firstname que herdou no prototype
console.log(anotherPerson);
console.log(anotherPerson.firstName); // não delega, pois agora a chave firstName existe em anotherPerson
console.log(anotherPerson.fullName()); // delega para o prototype
