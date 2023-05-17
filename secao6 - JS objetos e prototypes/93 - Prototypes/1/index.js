// Construtora -> molde para estanciar novas pessoas
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Luiz', 'Otavio');
const pessoa2 = new Pessoa('Maria', 'A.');

// ocasiona em um problema de performance, pois está criando um metodo para cada pessoa. É possivel resolver isso usando prototype
// console.dir(pessoa1);
// console.dir(pessoa2);

// ------------------------------------------------------------------------------

const date = new Date();
const p1 = new Pessoa('Vinicius', 'santana');

console.dir(p1);
console.dir(date);
// os atributos e metodos do objeto date estão todos no prototype, em um único local da memória, para melhor desempenho