class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        this.battery = 'Antiga';
    }

    turnUpVol() {
        this.volume += 2;
    }

    decreaseVol() {
        this.volume -= 2;
    }

    static changeBattery() {
        console.log('A bateria de todos os controles serão trocadas');
        // nesse método não terá acesso aos atributos da classe, pois o método não é chamado por uma instância e sim pela classe
        // OBS: O this aponta para a classe e não para a instância
    }
}

const control1 = new RemoteControl("LG");
const control2 = new RemoteControl("Samsung");

control1.turnUpVol();   // método de instância
RemoteControl.changeBattery();   // método estático

console.log(control1);
console.log(control2);

// métodos de instância são aqueles que são executados por instancias de objetos. Ex: control1.turnUpVol(); ALTERARÁ O ESTADO SOMENTE DESSA INSTANCIA, SEM AFETAR AS DEMAIS

// Métodos estáticos alteram o estádo de TODAS AS INSTANCIAS, ex: 
