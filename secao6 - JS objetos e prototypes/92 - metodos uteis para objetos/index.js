const product = { name: 'caneca', preco: 1.8 };

// ----------------------------------------------------------------
// duas formas de copiar

// spread
const product2 = {...product, material: 'porcelana'};

// assign
// o primeiro parâmetro é o objeto destino, depois os objetos que serão copiados
const product3 = Object.assign({}, product, {material: 'porcelana'});

console.log(product2);
console.log(product3);

// ----------------------------------------------------------------

// mostra as propriedades de uma chave específica
console.log(Object.getOwnPropertyDescriptor(product, 'name'));

// é possível alterar a propriedade fora do escopo do objeto
Object.defineProperty(product, 'name', {
    writable: false,
    configurable: false,
});

// mostra as propriedades de todas as chaves
console.log(Object.getOwnPropertyDescriptors(product));

// retorna um array com os valores das chaves do objeto
console.log(Object.values(product));

// ----------------------------------------------------------------

// retorna um array com varios arrays de chaves e valores do objeto
console.log(Object.entries(product));

// é possivel fazer destructuring e receber as chaves e valores separadamente usando for of
for (let [key, value] of Object.entries(product)) {
    console.log(key, value);
}

// ----------------------------------------------------------------

// já vimos
/*
... (spread)
Object.assign      // mesma coisa que spread
Object.keys
Object.values
Object.entries
Object.freeze
Object.defineProperties
Object.defineProperty
Object.getOwnPropertyDescriptor
Object.getOwnPropertyDescriptors
*/