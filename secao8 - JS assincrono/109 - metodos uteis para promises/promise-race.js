function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('ERRO: não é uma string');
                return;
            }
            resolve(msg + ' - Passei na promise');
        }, tempo);
    });
}

// -----------------------------------------------------------------

// Promise.race

const promises = [
    esperaAi('Promisse 1', rand(1, 2)),
    esperaAi('Promisse 2', rand(1, 3)),
    esperaAi('Promisse 3', rand(2, 3)),
    esperaAi(1000, rand(1, 2)),
    // 'Outro valor'   // retornará primeiro mesmo não sendo uma promise
];

// retorna somente a primeira que resolver
Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    });

