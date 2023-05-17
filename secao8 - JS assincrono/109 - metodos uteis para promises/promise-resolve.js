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

// Promise.resolve -> cai no then()

// essa função espera sempre retornar a promisse
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        // caso já tiver a pagina baixada
        return Promise.resolve('Pagina em cache');
    }
    else {
        // caso ainda não tiver baixado
        return esperaAi('Baixei a página', rand(1, 3));
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));
