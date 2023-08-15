export class Pessoa {
  // atributos estáticos só tem acesso quando chamados pelo próprio objeto sem instanciar
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  // obs: metodos e atributos estáticos não podem ser acessados pelo this
  verPadrao(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  // métodos estáticos só tem acesso quando chamados pelo próprio objeto sem instanciar
  // factory functions nesse caso pode ser util para criar o mesmo objeto não passando todos os valores na hora de instanciar
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = Pessoa.criaPessoa('João', 'Miranda'); // factory function
console.log(pessoa);

const pessoa2 = new Pessoa('Vinicius', 'Santana', 20, '437.818.138-00');
pessoa2.verPadrao();
// ou então
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
