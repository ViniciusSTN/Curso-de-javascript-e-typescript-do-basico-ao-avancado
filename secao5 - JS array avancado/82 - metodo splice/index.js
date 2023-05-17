const names = ['Maria', 'Ana', 'Joao', 'Eduardo'];
console.log(names);

// primeiro se argumento refere a partir de qual indice será alterado
// segundo argumento refere-se a quantidade de elementos a ser alterados
// a partir do terceiro argumento se refere a que será adicionado

// --------------------- PARA REMOVER ------------------------------
names.splice(2, 1);     // a partir do indice 2, remover 1
console.log(names);

names.splice(-1, 1);    // a partir do ultimo indice, remover 1
console.log(names);

// --------------------- PARA ADICIONAR ------------------------------
const n1 = 'José';
const n2 = 'Vinicius'
names.splice(1, 0, n1, n2);     // no indice 1, removerá 0 e adicionará n1 e n2
console.log(names);

// -------------------------------------------------------------------
const n3 = 'Gabriel';
names.splice(names.length, 0, n3);     // simular o .push()
console.log(names);

// ------------------------------------------------------------------
// assim como os outros métodos de array, é possível receber em uma variavel os elementos que foram removidos, nesse caso retornará um array, pois é possível remover mais do que um indice
const removidos = names.splice(0, 1);
console.log(`Array final: ${names}\nRemovidos: ${removidos}`);

// -------------------------------------------------------------------
// maior valor permitido no JS, util em alguns casos
console.log(Number.MAX_VALUE);
// -------------------------------------------------------------------