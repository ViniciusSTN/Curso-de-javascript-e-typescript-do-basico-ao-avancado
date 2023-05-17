const test = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função 

let name = 'joao';  // criando

var name2 = 'joao'  // criando
var name2 = 'Pedro' // redeclarado

if (test) {
    let name = 'Lucas'; // criando
    var name2 = 'Otavio' // redeclarado
    
    if (test) {
        let name = 'Vinicius'; //criando
        var name2 = 'Ana' // redeclarado
        console.log(name);
        // o moto do js primeiro irá buscar a variável no escopo atual, depois buscará nos escopos mais baixos
    }
}
// joao Ana
console.log(name, name2)

// -----------------------------------------------------------------------
//                      PARA VAR
// APENAS AS FUNÇÕES 'PROTEGEM' VARIÁVEIS CRIADAS COM VAR

// a função em específico protege as variáveis dentro dela, diferente de um bloco condicional por exemplo
var name3 = 'Ian'
function falaOi() {
    var cumprimentar = 'Olá'
    // é possível recuperar uma variável do escopo de fora da função
    console.log(name3)
}
falaOi()
// ocasionará em um erro ao recuperar a variável fora da função:
// console.log(cumprimentar)


if (true) {
    var cumprimentar2 = 'Oi'
}
console.log(cumprimentar2)

// -----------------------------------------------------------------------
//                      PARA LET
// NO GERAL, TODOS OS BLOCOS 'PROTEGEM' A VARIÁVEL DECLARADA COM LET

function dizerNome() {
    if (true) {
        let name4 = 'Vinicius'
    }
    // Ocasionará em um erro
    // console.log(name4)
}
dizerNome()