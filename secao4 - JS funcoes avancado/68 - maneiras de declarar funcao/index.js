// declaração de função (function hoisting)
// é possível chamar a função antes de declarar por conta do hoisting
falaOi();
function falaOi() {
    console.log('OI');
}
// -----------------------------------------------------------------------

// funções são first-class objects (objetos de primeira classse)
// portanto pode ser tratado como um dado
// function expression
const souUmDado = function() {
    console.log("Sou um dado");
};

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);
// -----------------------------------------------------------------------

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

// -----------------------------------------------------------------------

// Dentro de um objeto
const obj = {
    falaOi() {
        console.log('oi');
    }
};
