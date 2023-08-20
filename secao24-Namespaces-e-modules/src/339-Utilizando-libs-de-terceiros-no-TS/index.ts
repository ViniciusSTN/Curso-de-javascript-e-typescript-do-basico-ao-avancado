// em alguns casos é preciso instalar a biblioteca e a tipagem dela
// em outros casos a tipagem já vem junto

// pode até funcionar sem tipagem, mas não tem auto-complete

// exemplo:
// npm i validator
// npm i @types/validator -D

import validator from 'validator';

console.log(validator.isEmail('vinicius@gmail.com'));
