try {
    // executada quando não há erros

    console.log('Abri um arquivo');
    // console.log(a);
    // é possível que de erro ao manipular o arquivo, nesse caso ele irá pular a instrução de fechar o arquivo e irá para o bloco do catch
    console.log('Manipulei o arquivo');

    try {
        console.log(a);
    }
    catch {
        console.log('Deu erro');
    }
    finally {
        console.log('FINALLY')
    }
}
catch {
    // é executada quando há erros 

    console.log('Tratar erro');
}
finally {
    // Sempre executado (geralmente é omitido)
    
    console.log('Fechei o arquivo');
}