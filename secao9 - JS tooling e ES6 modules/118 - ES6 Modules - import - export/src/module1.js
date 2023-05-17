const name = 'Luiz';
const lastName = 'Miranda';
const age = 30;

function sum(x, y) {
    return x + y;
}

// exportando de forma individual
export {name, lastName, age, sum}; // ou name as name2

// é possivel exportar ao criar
export class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
