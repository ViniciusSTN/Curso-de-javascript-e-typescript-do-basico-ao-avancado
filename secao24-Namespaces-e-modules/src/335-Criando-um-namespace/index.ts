/* eslint-disable @typescript-eslint/no-namespace */

// não é muito usado em TS
// módulos são namespaces

// para evitar conflitos no escopo global -> mas é melhor usar módulos
namespace MeuNamespace {
  const nome = 'Vinicius';

  export class Pessoa {
    constructor(public nome: string) {}
  }

  const pessoa = new Pessoa(nome);
  console.log(pessoa);
}

const pessoa2 = new MeuNamespace.Pessoa('Luiz');
console.log(pessoa2);
