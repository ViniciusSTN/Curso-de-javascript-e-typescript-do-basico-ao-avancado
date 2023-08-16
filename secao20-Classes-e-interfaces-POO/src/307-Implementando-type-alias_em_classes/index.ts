// a diferença de tipos e de classes abstratas é que no tipo não é declarado modificadores de acesso, e ele não é um objeto, apenas um contrato do que deve ter no objeto que o implementa

type TipoPessoa = {
  nome: string;
  nomeCompleto(): string;
};

type Sobrenome = {
  sobrenome: string;
};

// é possível implementar vários tipos
// usar implements
export class Pessoa implements TipoPessoa, Sobrenome {
  // com type não é possível usar protected ou private -> gera erro
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Vinicius', 'Santana');
console.log(pessoa.nomeCompleto());
