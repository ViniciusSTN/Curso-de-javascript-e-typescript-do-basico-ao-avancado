function funcao() {
    console.log('oi');
}
// enviando um argumento, mesmo a função não tendo parâmetros
funcao('valor', 1, false);      // resultado: oi

// ------------------------------------------------------------------------------

// Quando a função é declarada usando a palavra function, o js disponibiliza um 'objeto' chamado arguments, entretanto ele é iterável
function funcao2() {
    console.log(arguments[1]);  // resultado:  1 
}
funcao2('valor', 1, false);    


// Exemplo de uso
function sum() {
    let total = 0;
    for (let argument of arguments) {
        total += argument;
    }
    console.log(total);
}
sum(1, 2, 3, 4, 5, 6 , 7, 8, 9, 10); // resultado: 55

// ------------------------------------------------------------------------------
// também é possível receber menos argumentos sem gerar erros
// é possível atribuir valores default
function sum2(a, b = 0) {
    // b = b || 0;
    console.log(a + b);
}
sum2(1);    // resultado:   1

// ----------------------------------------------------------------------------
// para pular um argumento é preciso enviar undefined
// não é muito usual
function sum3(a, b = 2, c = 10) {
    console.log(a + b + c);
}
sum3(1, undefined, 3); // resultado:  6

// ----------------------------------------------------------------------------
// é possivel receber parâmetros por destructuring
// para objetos
function funcao3({nome, sobrenome, idade}) {
    console.log({nome, sobrenome, idade});
}
const obj = {nome: 'Vinicius', sobrenome: 'Santana', idade: 20};
funcao3(obj); // resultado:  { nome: 'Vinicius', sobrenome: 'Santana', idade: 20 }

// para array
function funcao4([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao4([5, 2, 7]); // resultado:  5 2 7

// -----------------------------------------------------------------------------
// usando operador rest
function funcao5(a, b, ...resto) {
    console.log(a, b, resto);
}
funcao5(0, 1, 3, 5, 6, 10); // resultado:  0 1 [ 3, 5, 6, 10 ]



function contas(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero; 
        if (operador === '-') acumulador -= numero; 
        if (operador === '/') acumulador /= numero; 
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
contas('*', 1, 10, 20, 30, 40, 50);