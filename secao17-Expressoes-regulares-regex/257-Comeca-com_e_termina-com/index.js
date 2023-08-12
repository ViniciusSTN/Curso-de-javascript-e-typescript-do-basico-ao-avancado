// ^ -> começa com      -     [^] -> negação
// $ -> termina com

// usar somente se tiver certeza que na string só tem o cpf

// m -> multiline 



const cpf1 = '437.818.138-00';
const cpf2 = '437.818.138-00   ';
const cpf3 = `
437.818.138-00
437.818.138-00
437.818.138-00
`;

console.log(cpf1.match(/^(\d{3}\.){2}\d{3}\-\d{2}$/g)); // [ '437.818.138-00' ]
console.log(cpf2.match(/^(\d{3}\.){2}\d{3}\-\d{2}$/g)); // null
console.log(cpf3.match(/^(\d{3}\.){2}\d{3}\-\d{2}$/gm)); // -> multiline
