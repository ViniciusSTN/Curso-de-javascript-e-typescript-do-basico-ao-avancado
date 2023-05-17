let a = 'A';
let b = 'B';
let c = 'C';

const letters = [b, c, a];
[a, b, c] = letters;

console.log(a, b, c);

// -----------------------------------------------------
const numbers = [0,1,2,3,4,5,6,7,8,9];
// é possível atribuir valores default
const [n1 = 'test', n2, , n3, ...rest] = numbers;
console.log(n1, n2, n3, rest);