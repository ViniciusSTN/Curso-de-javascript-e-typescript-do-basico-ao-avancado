const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

const novasPessoas = {};
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}

console.log(novasPessoas);
// {
//     '1': { id: 1, nome: 'Helena' },
//     '2': { id: 2, nome: 'Maria' },
//     '3': { id: 3, nome: 'Luiz' }
// }
// o resultado será sempre com as chaves em ordem crescente
// dependendo do algoritmo poderá afetar

console.log();
// -----------------------------------------------------------------

// para resolver esse problema

const novasPessoas2 = new Map();    
for (const pessoa of pessoas) {
    const {id} = pessoa;
    // setar novo valor
    novasPessoas2.set(id, {...pessoa});
}

console.log(novasPessoas2);
console.log(novasPessoas2.get(2));  // para recuperar um valor espessifico usar get

// -----------------------------------------------------------------
console.log();

// é possivel iterar sobre o map, retornará um array
for (const pessoa of novasPessoas2) {
    console.log(pessoa);
}

console.log();

// -----------------------------------------------------------------

// EXTRAS

// usando destructuring:
for (const [identifier, {id, nome}] of novasPessoas2) {
    console.log(identifier, id, nome);
}

console.log();

// é possível iterar sobre as chaves ou por valores usando .values()
for (const chave of novasPessoas2.keys()) {
    console.log(chave);
}

console.log();

for (const valor of novasPessoas2.values()) {
    console.log(valor);
}

