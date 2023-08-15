// associação -> uma classe ligada a uma outra classe em que uma não depende da outra
// no exemplo da imagem, o Escritor não depende Ferramenta e vice-versa

// ligação mais fraca entre classes, pois uma classe usa a outra sem depender uma da outra

// está associada com Ferramenta
export class Escritor {
  private _ferramenta: Ferramenta | null = null; // nçao depende pois pode ser null

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  // teste se existe associação
  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
    this.ferramenta.escrever();
  }
}

// está associada com Escritor
export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Vinicius');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Maquina');

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);

// escritor.ferramenta = caneta;
escritor.escrever();
