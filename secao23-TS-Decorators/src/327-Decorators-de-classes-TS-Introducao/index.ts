/* eslint-disable @typescript-eslint/no-explicit-any */

// muito usado em libs e frameworks
// "objeto impostor" -> decorar objeto

// decorators podem ser úteis quando é preciso adicionar ou mudar algo dentro do objeto sem precisar mecher na classe diretamente, para evitar erros em projetos já em produção por exemplo

@decorator // atribui decorator para a classe abaixo -> toda vez que essa classe for instanciada, a função decorator() é chamada e instancia o objeto que passar por ela automaticamente, dando a entender que o objeto é instância da classe Animal
export class Animal {
  constructor(public cor: string) {}
}

// isso já seria suficiente, mas não seria possível alterar/decorar métodos e atributos da classe
// function decorator<T>(target: T) {
//   return target;
// }

function decorator<T extends new (...args: any[]) => any>(target: T) {
  // para isso é preciso extender a classe, mas dará um erro, pois é preciso tipar o construtor
  return class extends target {
    // agora é possível decorar a nova classe
    sla: string;
    novaCor: string;
    // como está extendendo, é preciso chamar o super
    constructor(...args: any[]) {
      super(...args);
      this.novaCor = args[0].split('').reverse().join(''); // cor[0] refere-se ao valor da chave cor
      this.sla = 'Qualquer coisa';
    }
  };
}

// ao invés de instanciar assim, basta usar @decorator e instanciar normalmente o objeto
// const AnimalDecorator = decorator(Animal);
// const animal = new AnimalDecorator('roxo');
// console.log(animal);

const animal2 = new Animal('roxo');
console.log(animal2);
