class Device {
    constructor(name) {
        this.name = name;
        this.connected = false;
    }

    turnOn() {
        if(this.connected) {
            console.log('Já está ligado');
            return;
        }
        this.connected = true;
    }

    turnOff() {
        if(!this.connected) {
            console.log('Já está desligado');
            return;
        }
        this.connected = false;  
    }
}

const d1 = new Device("Smartphone");
d1.turnOn();
console.log(d1);

// -----------------------------------------------------------

// Para herdar
class Smartphone extends Device {
    constructor(name, color, model) {
        // para o atributo name herdar do constructor da classe pai, usar super()
        super(name);

        this.color = color;
        this.model = model;
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
s1.turnOn();
console.log(s1);
