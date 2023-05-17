// funções factory -> letra minuscula -> apenas retorna o objeto

// Funções construtoras -> new -> Letra maiuscula

function People(name, lastName) {
    // atributos e métodos privados (não podem ser acessados fora da função)
    const id = 12;
    const internalMethod = () => {
        console.log('Validação de CPF');
    };

    // atributos e métodos públicos
    this.name = name;
    this.lastName = lastName;

    this.metodo = () => {
        console.log('Sou um método');
    };
}

// palara new cria um objeto vazio, faz a palavra this apontar para esse objeto e retorna o objeto para a variável
const p1 = new People('Luiz', 'Otávio');

p1.metodo();