// (por padrão é public)

// public -> acessivel na classe, fora e subclasses
// private -> acessivel dentro da classe
// protected -> acessível dentro de subclasses

export class Empresa {
  public readonly nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const empresa1 = new Empresa('Udemy');

console.log(empresa1);
