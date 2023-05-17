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

// Ainda  é muito verboso

// esperaAi('fase 1', rand(1, 3))
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('fase 2', rand(1, 2));
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('fase 3', rand(1, 3))
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .catch(e => console.log(e));


// para deixar menos verboso:
// entretanto é preciso ter um try catch
async function executa() {

    // quando achar um erro cairá no catch
    try {
        const fase1 = esperaAi('fase 1', rand(1, 3));
        console.log(fase1); // pending, pois não foi usado await, portanto retornará um valor sem esperar o dado ser processado
        
        // é possível testar se uma promise pendind já foi resolvida
        setTimeout(() => {
            console.log('Essa promise estava pendente', fase1);
        }, 3000);
    
        const fase2 = await esperaAi('fase 2', rand(1, 2));
        console.log(fase2);
    
        const fase3 = await esperaAi(1000, rand(1, 2)); // cairá no catch
        console.log(fase3);

        const fase4 = await esperaAi('fase 3', rand(1, 3));
        console.log(fase4);
        
    }
    catch (err) {
        console.log(err);
    }
    
}
executa();

// estados das promises:
// 1: pending (pendente)
// 2: fulfilled (resolvida)
// 3: rejected (rejeitada)
