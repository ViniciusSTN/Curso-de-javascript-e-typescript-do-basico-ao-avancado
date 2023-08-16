// geralmente usadas em objetos
// praticamente mesma coisa que interfaces

interface Nome {
  nome: string;
}

interface NomeCompleto {
  nomeCompleto(): string;
}

interface Sobrenome {
  sobrenome: string;
}

// type TipoPessoa = Nome & NomeCompleto & Sobrenome;
interface TipoPessoa extends Nome, NomeCompleto, Sobrenome {}

export class Pessoa implements TipoPessoa {
  // com interface não é possível usar protected ou private -> gera erro
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

// em objeto literal
const pessoaObj: TipoPessoa = {
  nome: 'Vinicius',
  sobrenome: 'Santana',
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  },
};

const pessoa = new Pessoa('Vinicius', 'Santana');
console.log(pessoa.nomeCompleto());

console.log(pessoaObj.nomeCompleto()); // objeto literal
