// yield é parecido com return

function* geradora1() {
    // codigo qualquer...
    yield 'Valor 1';
    // codigo qualquer...
    yield 'Valor 2';
    // codigo qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1);    // Object [Generator] {}

// na primeira vez que executa a função geradora, o valor retornado será valor 1. Done: false quer dizer que ainda há valores a serem retornados
console.log(g1.next());    // { value: 'Valor 1', done: false }

// É possível usar os atributos .value e .done
// g1.next().value  
// g1.next().done

console.log(g1.next()); // { value: 'Valor 2', done: false }
console.log(g1.next()); // { value: 'Valor 3', done: false }

// Não há mais valores para serem retornados
console.log(g1.next()); // { value: undefined, done: true }

// ----------------------------------------------------------------------

// é possível usar for of 
function* geradora2() {
    yield 'n1';
    yield 'n2';
    yield 'n3';
}

const g2 = geradora2();

for (let valor of g2) {
    console.log(valor);
}

// ----------------------------------------------------------------------

// é possível fazer um gerador infinito
function* geradora3() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

const g3 = geradora3();
console.log(g3.next().value); // 0
console.log(g3.next().value); // 1
console.log(g3.next().value); // 2
console.log(g3.next().value); // 3

// ----------------------------------------------------------------------

// é possível delegar parte da tarefa de um gerador para outro
function* geradora4() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora5() {
    yield* geradora4();
    yield 3;
    yield 4;
    yield 5;
}

const g5 = geradora5();

for (let valor of g5) {
    console.log(valor); // 0, 1, 2, 3, 4, 5
}

// ----------------------------------------------------------------------

// retornando funções

function* geradora6() {
    yield function() {
        console.log('Vim do y1');
    };

    yield function() {
        console.log('Vim do y2');
    };
}

const g6 = geradora6();
const funcao1 = g6.next().value;
const funcao2 = g6.next().value;
funcao1(); // Vim do y1
funcao2(); // Vim do y2