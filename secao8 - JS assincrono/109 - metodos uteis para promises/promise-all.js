// Promisse.all 
// Promisse.race
// Promisse.resolve
// Promisse.reject

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('não é uma string');
            return;
        } 
        setTimeout(() => {
            resolve(msg + ' Passei na promise');
        }, tempo);
    });
}

// ------------------------------------------------------------------

// Promise.all

const promises = [
    'Primeiro valor',
    esperaAi('Promisse 1', rand(1, 2)),
    esperaAi('Promisse 2', rand(1, 3)),
    esperaAi('Promisse 3', rand(2, 3)),
    'Outro valor',
    // esperaAi(1000, 1000)
];

// retorna todos os valores em um array
// se achar um erro, retorna apenas o erro, exemplo 1000
Promise.all(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    });

