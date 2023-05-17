// Object.defineProperty(this, 'chave', {});

// Object.defineProperties(this, {
//     chave1: {},
//     chave2: {}
// });

function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'stock', {
        enumerable: true,   // mostra a chave
        value: stock,       // valor
        // para que seja um método e não um atributo:
        // value: function() {
        //     return stock;
        // }
        writable: false,    // valor não poderá ser alterável
        configurable: false  // se for true poderá ser reconfigurável, ou seja, poderá novamente definir as propriedades da chave estoque criando um novo Object.defineProperty(this, 'stock', {}) e também não permite apagar o atributo
    });

    Object.defineProperties(this, {
        name: {
            enumerable: true,   
            value: name,       
            writable: true,    
            configurable: true  
        },

        price: {
            enumerable: true,   
            value: price,
            writable: true,    
            configurable: true  
        }
    });
}

const p1 = new Product('Camiseta', 20, 3);
console.log(p1);

console.log(Object.keys(p1));   // retorna um array com todas as chaves do objeto (as que possuirem a propriedade enumeralble:true)

