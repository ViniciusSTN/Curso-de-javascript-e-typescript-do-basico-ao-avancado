function retornaFuncao(nome) {
    return function() {
        // escopo lexico do fechamanto de escopo = closure
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
// scopes: 0-closure; 1-script; 2-global
console.dir(funcao);