// antigamente era assim
export class Pessoa {
  // encapsulamento:
  // enapsular tudo por segurança
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private cpf: string,
  ) {}

  setCpf(valor: string): void {
    this.cpf = valor;
  }

  getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }
}

// atualmente
export class Pessoa2 {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string, // por convenção passa a receber _ para não duplicar
  ) {
    // this.cpf = _cpf;     // nese caso o setter vai ser chamado no constructor também, nap tem necessidade, mas existem pessoas que usam assim
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

// antigamente
const pessoa = new Pessoa('Vinicius', 'Santana', 20, '437.818.138-00');
pessoa.setCpf('437.818.138-99');
console.log(pessoa.getCpf());

// atualmente
const pessoa2 = new Pessoa2('Vinicius', 'Santana', 20, '437.818.138-00');
pessoa2.cpf = '437.818.138-99';
console.log(pessoa2.cpf);
