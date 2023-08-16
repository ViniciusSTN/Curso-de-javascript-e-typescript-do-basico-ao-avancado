// um objeto tem outro como parte dele
// relação mais forte

// exemplo: carro
// as rodas estão agregadas um carro -> relaçao de agregação
// carro e motor -> relação de composição (cabe interpretações)

// relação ente o ser humano e coração -> composição

// é preciso ter um atributo que seja instancia da classe que está sendo composta
export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('motor está ligado...');
  }

  acelerar(): void {
    console.log('motor está acelerarando...');
  }

  parar(): void {
    console.log('motor está parado...');
  }

  desligar(): void {
    console.log('motor está desligado...');
  }
}

const carro = new Carro();
carro.ligar();
