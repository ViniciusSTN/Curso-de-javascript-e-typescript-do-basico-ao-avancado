// se somente uma coisa for exportada:
// semelhante ao default do export/import

module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    } 

    latir() {
        console.log(`${this.nome} está latindo`);
    }
}

