/* eslint-disable @typescript-eslint/no-explicit-any */

// por equanto a recomendação é usar any

// decoradores de métodos servem para assistir ou decorar métodos
// também daria para fazer uma factory function
// a função é chamada na criação do método e não na chamada dele
function decorador(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  // return {
  //   writable: false,
  // };
  return {
    value: function (...args: string[]) {
      // return 1; // se retornar um número não terá problema, mesmo que na criação do método foi informado que retornará uma string
      return args[0].toUpperCase();
    },
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorador
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
// pessoa.metodo = () => 'EEEIIIIII'; // TS não reclama, mas da erro no runtime caso a propriedade tiver writable: false -> por conta do decorator ser experimental (ainda está em fase de testes)
const metodo = pessoa.metodo('Olá mundo!');
console.log(metodo);
