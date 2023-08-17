// type guard são checagem de tipos

export function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && b === 'number') return a + b;
  return `${a}${b}`;
}

// console.log(add(1, 5));
// console.log(add('a', 'b'));

type Pessoa = { nome: string };
type Animal = { cor: string };
type PessoaOuAnimal = Pessoa | Animal;

type Pessoa2 = { tipo: 'pessoa'; nome: string };
type Animal2 = { tipo: 'animal'; cor: string };
type PessoaOuAnimal2 = Pessoa2 | Animal2;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

export class Aluno2 implements Animal2 {
  tipo: 'animal' = 'animal';  // eslint-disable-line
  constructor(public cor: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // in checa se existe um atributo no objeto
  // if ('nome' in obj) console.log(obj.nome);
  // instanceof analisa se é instancia do Aluno
  if (obj instanceof Aluno) console.log(obj.nome);
}

function mostraNome2(obj: PessoaOuAnimal2): void {
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}

mostraNome(new Aluno('João'));
mostraNome2(new Aluno2('João'));
