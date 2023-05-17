/* 
  Primitivos (imutáveis) 
    string, number, boolean, undefined, null, (bigint, symbol)
    VALORES COPIADOS

  Referência (mutável)
    array, object, function
    PASSADOS POR REFERÊNCIA
*/

// ----------------------------------------------------
// Primitivos (imutáveis) 
let nome = 'Luiz';
nome[0] = 'R';
// Por conta da string ser imutável, a letra R não substituirá a L
console.log(nome[0], nome);


let a = 'A';
let b = a; 
// Por se tratar de um tipo primitivo, fará apenas uma cópia
// a não depende de b e b não depende de a
console.log(a, b);
a = 'Outra coisa';
console.log(a, b); 

// ----------------------------------------------------
// Referência (mutável)
let arr1 = [1, 2, 3];
let arr2 = arr1;
// arr1 interfere diretamente em arr2 e vice versa, pois apontam para mesmo valor na memória
console.log(arr1, arr2);
arr1.push(4);
console.log(arr1, arr2);

let arr3 = [...arr1]; // é possível apenas copiar usando operador SPREAD
arr3.push('teste');
console.log(arr1, arr2, arr3);



// O mesmo serve para objetos
const obj1 = {
  name: 'Luiz',
  lastName: 'Otávio'
} 
const obj2 = {...obj1} // é possível apenas copiar usando operador SPREAD
obj2.name = 'João'
console.log(obj1, obj2)