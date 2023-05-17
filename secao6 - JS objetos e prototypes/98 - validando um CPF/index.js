function ValidaCPF(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            // tudo o que não for número será trocado por ''
            return cpf.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if (!this.cpfLimpo) return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.sequencia()) return false; // para evitar que sequencias avaliem como verdadeiro

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCPF = cpfParcial + digito1 + digito2;
    return novoCPF === this.cpfLimpo;   // true or false
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((acc, value) => {
        acc += (regressivo * Number(value));
        regressivo--;
        return acc;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.sequencia = function() {
    // vai repetir o primeiro digito 11 veze
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

// 705.484.450-52
// 437.818.138-00
// 111.111.111-11
const cpf = new ValidaCPF('705.484.450-52');

const msg = cpf.valida() ? 'CPF válido' : 'CPF inválido';
console.log(msg);
