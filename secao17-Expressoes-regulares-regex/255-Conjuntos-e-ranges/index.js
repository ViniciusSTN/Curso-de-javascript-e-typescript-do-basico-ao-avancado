// lista de caracteres unicode

// https://en.wikipedia.org/wiki/List_of_Unicode_characters#:~:text=As%20of%20Unicode%20version%2015.0,and%20some%20additional%20related%20characters.

// ----------------------------------------------------------------------

// [] -> conjunto
// ^ -> negação
// [0-9] -> range 0 a 9 -> \d (shortcut) : \D (negação de \d)
// [a-z] -> range a até z
// \w -> atalho para [a-zA-Z0-9]
// \W -> negação de \w
// \s -> espaços em branco ou similar
// \S -> negação de \s

const characters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz atenção &# 01234 56789'


const found1 = characters.match(/[abc]/gi); // [ 'A', 'B', 'C', 'a', 'b', 'c' ]

const found2 = characters.match(/[abc]+/gi); // [ 'ABC', 'abc' ]

const found3 = characters.match(/[abc123]+/gi); // [ 'ABC', 'abc', '123' ]

// -----------------------------------------------------------

// negação

const found4 = characters.match(/[^abc123]/gi);
// [
//   'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
//   'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T',
//   'U', 'V', 'W', 'X', 'Y', 'Z', ' ', 'd',
//   'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
//   'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
//   'u', 'v', 'w', 'x', 'y', 'z', ' ', '&',
//   '#', ' ', '0', '4', '5', '6', '7', '8',
//   '9'
// ]
const found5 = characters.match(/[^abc123]+/gi); 
// [ 'DEFGHIJKLMOPQRSTUVWXYZ ', 'defghijklmnopqrstuvwxyz &# 0', '456789' ]

// console.log(found4); 

// -----------------------------------------------------------

// range

const found6 = characters.match(/[0-9]/gi); 
// [
//   '0', '1', '2', '3',
//   '4', '5', '6', '7',
//   '8', '9'
// ]

const found7 = characters.match(/[0-9]+/gi); // [ '01234', '56789' ]

// console.log(found7);

// -----------------------------------------------------------

const found8 = characters.match(/[a-zA-Z0-9]/g);

const found9 = characters.match(/[^a-zA-Z0-9]/g);

// console.log(found9);


// -----------------------------------------------------------

// caracteres especiais basicos latin

// 00A1 - 002F

const found10 = characters.match(/[\u0021-\u002F]/g)

// console.log(found10);


// -----------------------------------------------------------

const found11 = characters.match(/[a-zA-Z0-9çã]+/g); 
// vai consegue buscar a palavra atenção
// também é possível atribuir no conjunto o range de unicodes de letras acentuadas

// console.log(found11);

// -----------------------------------------------------------

// alguns shortcuts (atalhos)

// ler na documentação

const found12 = characters.match(/\w+/g); 
const found13 = characters.match(/\W+/g); 

// console.log(found13);

// -----------------------------------------------------------

const found14 = characters.match(/\S+/g); // quebra onde houver espaços

console.log(found14);
