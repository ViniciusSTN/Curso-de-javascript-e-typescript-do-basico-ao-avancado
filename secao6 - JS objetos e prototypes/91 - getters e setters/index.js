// getters e setters

//-----------------------------------------------------------------

// para constructors
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    let privateStock = stock;   // para não gerar loop usando this no set

    Object.defineProperty(this, 'stock', {
        enumerable: true,            
        configurable: false,
        get: function () {
            return privateStock;
        },
        set: function (value) {
            if (typeof value !== 'number') {
                throw new TypeError('NaN');
            }
            privateStock = value;
        }
    });
}

const p1 = new Product('Camiseta', 20, 3);
// p1.stock = 'teste';
console.log(p1.stock);

// --------------------------------------------------------------

// para objetos literais
function createProduct(name) {
    return {
        get name() {
            return name;
        },
        set name(value) {
            name = value;
        }
    }
}

const p2 = createProduct('camisa');
p2.name = 'short';
console.log(p2.name);
