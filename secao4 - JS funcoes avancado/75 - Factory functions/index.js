function createPeople(name, lastname, weight, height) {
    return {
        name, 
        lastname,
        weight,
        height,
        fala(subject) {
            // this se refere ao prórpio objeto
            return `${this.name} está falando ${subject}.`;
        },
        falaPeso() {
            return `${this.name} tem ${this.weight}kg.`;
        },

        // getter
        get imc() {
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2);
        },

        // getter
        get nomeCompleto() {
            return `${this.name} ${this.lastname}`
        },

        //setter
        set nomeCompleto(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.lastname = value.join(' ');
        }
    };
}

const p1 = createPeople('Luiz', 'Otavio', 80, 1.75);
console.log(p1.fala('sobre JS'));
console.log(p1.falaPeso());

// para executar o imc como se fosse um atributo e não um método do objeto literal, basta colocar a palavra get antes do método.
console.log(p1.imc);

// atribuindo ao setter
p1.nomeCompleto = 'Maria Oliveira Silva';

// executando o getter
console.log(p1.nomeCompleto);