// produto
// camisa, caneca, lapis

// ------------------------------------------------------------------------
// objeto produto
function Product(name, price){
    this.name = name; 
    this.price = price;
}

Product.prototype.priceIncrease = function(value){
    this.price += value;
};
Product.prototype.discount = function(value){
    this.price -= value;
};

// ------------------------------------------------------------------------
// objeto camisa
function Shirt(name, price, color) {
    // para usar metodos e atributos de outro objeto -> call
    // é possivel usar um metodo especifico do outro objeto -> Produto.nomeDoMetodo.call(objetoAtual, valor1, valor2)
    // entretanto não será possivel acessar os metodos do prototype de Product
    Product.call(this, name, price);
    this.color = color;
}
// para resolver o problema do prototype, basta atribuir o prototype de Shirt por Product.prototype
// entretando o constructor não será mais do objeto Shirt
Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;    // resolverá o problema do Constructor


// criando uma instância do objeto shirt
const shirt = new Shirt('Regata', 20, 'Preta');
shirt.priceIncrease(10);
console.log(shirt);

