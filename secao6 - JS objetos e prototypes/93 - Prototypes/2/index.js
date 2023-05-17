// Construtora -> molde para estanciar novas pessoas
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // caso o método tiver o mesmo nome que o do prototype, irá 'sobrescrever' o método do prototype, o motor do JS busca primeiro dentro do objeto, depois no prototype, por questão de hierarquia
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// atribuindo ao prototype Pessoa
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('Vinicius', 'Santana');
console.dir(p1);
console.log(p1.nomeCompleto());

// hierarquia:
// começando pela instância do objeto Pessoa
// p1 -> Pessoa.prototype -> Object.prototype