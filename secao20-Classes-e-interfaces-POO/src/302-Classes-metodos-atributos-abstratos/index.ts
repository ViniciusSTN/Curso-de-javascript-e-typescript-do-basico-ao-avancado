// como a classe personagem nunca vai ser instanciada, pois ela só foi criada para ser extendida, o ideal é atribuir abstract

// abstract -> em geral é apenas um 'contrato' para as subclasses

// abstract class -> não pode mais ser instanciado, somente suas subclasses
export abstract class Personagem {
  // atributos abstratos são um contrato para forçar as subclasses a terem esse atributo
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida`);
  }

  // métodos abstratos não podem ter corpo {} pois são apenas um contrato
  // ou seja, as subclasses DEVEM ter o método bordao()
  abstract bordao(): void;
}

// classe concreta -> será instanciado
export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + 'VOU TE MATAAAAR');
  }
}

// classe concreta -> será instanciado
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + 'NUNCAAA');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);

monstro.atacar(guerreira);

guerreira.atacar(monstro);

monstro.atacar(guerreira);
