try {
    console.log(naoExisto);
}
catch(error) {
    // não é interesante exibir erro para usuário
    // ideal é tratar o erro aqui
    // console.log(error)
}

// ----------------------------------------------

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // new Error()
        // new TypeError()
        throw new Error('x e y presisam ser números');
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
}
catch(error) {
    console.log(error);      // NÃO EXIBIR QUAL O ERRO AO USUARIO
    console.log('Algo deu errado')
}

