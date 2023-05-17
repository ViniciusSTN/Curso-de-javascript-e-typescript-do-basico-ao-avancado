function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * percentual / 100);
};

const p1 = new Produto("Camiseta", "50");
p1.desconto(10);

const p2 = {
    nome: 'Caneca',
    preco: '10',
};

// setando o prototype de Produto em p2
// portanto os metodos pertencente ao prototype de Produto podem ser usados no objeto p2
// o constructor de p2 agora será o mesmo de Produto
Object.setPrototypeOf(p2, Produto.prototype);

p2.desconto(10);
console.log(p2);

// ---------------------------------------------------------------------

// é possível criar um objeto já atribuindo o seu protorype
const p3 = Object.create(Produto.prototype);
p3.nome = 'Short';
p3.preco = 50;
p3.desconto(10);
console.log(p3);

// ou então criar as chaves já com a configuração
const p4 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 44
    },
});
p4.desconto(10);
console.log(p4);
