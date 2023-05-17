function retornaHora(data){
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}



try {
    const dataTest = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
}
catch(err) {
    // tratar erro
    console.log(err);   // nao mostrar para usuario o erro 
}
finally {
    console.log('Finally');
}

