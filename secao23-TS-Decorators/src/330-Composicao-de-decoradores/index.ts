/* eslint-disable @typescript-eslint/no-explicit-any */

// https://www.typescriptlang.org/docs/handbook/decorators.html

interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  // é possível deixar o TS inferir o tipo, sem precisar passar o generic type
  return function (target: Constructor) {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}
function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador' + param1);
    return target;
  };
}

// function outroDecorador(target: Constructor) {
//   console.log('Sou o outro decorador');
//   return target;
// }

@outroDecorador('parâmetro do outro decorador')
@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Luiz', 'roxo');
console.log(animal);
