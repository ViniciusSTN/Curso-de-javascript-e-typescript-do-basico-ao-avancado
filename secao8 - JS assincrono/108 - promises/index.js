// antigamente era usado funções de callback

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    // por padrão:
    // resolve = resolver
    // reject = rejeitar
    return new Promise((resolve, reject) => {

        // reject(new Error('ERRO'))
        // reject(false)
        if (typeof msg !== 'string') {
            reject('não é uma string');
            return;
        } 

        setTimeout(() => {
            resolve(msg); // pode mandar um parâmetro no resolve, apenas um
        }, tempo);
    });

    
}

// sempre que chamar resolve(), o método .then() é executado
// sempre que chamar reject(), o método .catch() é executado e capturar o erro
esperaAi('Conexão com a BD', rand(1, 2))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados na Base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(222222, rand(2, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe os dados na tela');
    })
    .catch(e => {
        console.log('Erro:', e);
    });

