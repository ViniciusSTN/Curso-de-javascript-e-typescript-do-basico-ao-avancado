// ----------------------------------------------------------
// MODULO 1

// para alterar o nome da variavel, usar 'as', caso der erro de variaveis com mesmo nome, OBS: Também é possivel fazer isso ao exportar
import {name as name2, lastName, age, sum, Pessoa} from './module1';
const name = 'João';
console.log(name, lastName, age, sum(10, 5));

const p1 = new Pessoa(1, 'Vinicius');
console.log(p1);


// ----------------------------------------------------------
console.log('');

// MODULO 2

// gera um objeto com tudo que foi exportado do modulo 2
import * as Coisas1 from './module2';
console.log(Coisas1);

// ----------------------------------------------------------
console.log('');

// MODULO 3

// Importando apenas o que está default
// a vantagem do default é que pode atribuir qualquer nome para ele sem precisar informar que o nome foi alterado
import padrao from './module3';
console.log(padrao);

// ----------------------------------------------------------
console.log('');

// MODULO 4

// para importar o default juntamente com o restante:
// o default não fica dentro de chaves
import padrao2, {x, y} from './module4';
console.log(padrao2(x, y));


