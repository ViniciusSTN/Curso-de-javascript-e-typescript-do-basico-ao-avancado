const person = {
    name: 'Luiz',
    lastName: 'Miranda',
    age: 30,
    address: {
        street: 'Av Brasil',
        number: '430',
    }
};
// é possível atribuir um valor default ou atribuir nome diferente à variável
const { name = 'nao existe', age: agePerson } = person;
console.log(name, agePerson);

const { address, address: { street, number }, ...rest } = person;
console.log(address);
console.log(street, number);
console.log(rest);
