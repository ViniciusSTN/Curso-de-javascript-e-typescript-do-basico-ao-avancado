function criaPessoa(nome, sobrenome) {

    const pessoaPrototype = {
        falar() {
            console.log(this.nome + 'está falando');
        },
        comer() {
            console.log(this.nome + 'está comendo');
        }
    };

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A') 

console.log(p1);
console.log(p2);

// ----------------------------------------------------------------

// também é possível fazer usando composição

// objetos que comtem métodos
const falar = {
    falar() {
        console.log(this.nome + 'está falando');
    }
}

const comer = {
    comer() {
        console.log(this.nome + 'está comendo');
    }
}

// compor o prototype com outros objetos
const pessoaPrototype = Object.assign({}, falar, comer);

function criaPessoa2(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}
