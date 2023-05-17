function soma(a, b) {
    return a + b;
}

// -----------------------------------------------------------------------

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    // retorna a funcao falaResto mas não executa
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo);

// -----------------------------------------------------------------------

function criaMultiplicador(mult) {
    return function(n) {
        return n * mult;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
console.log(duplica(5));
