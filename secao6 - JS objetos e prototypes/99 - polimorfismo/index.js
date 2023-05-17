// polimorfismo é métodos se comportarem de jeito diferente vindo de uma mesma classe pai
// portanto eles herdam o mesmo prototype, mas há sobrescrita de métodos


// Superclass em POO
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente | Saldo: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

const conta1 = new Conta(11, 22, 10);
// conta1.depositar(200);
// conta1.sacar(30);
// conta1.sacar(181);

// --------------------------------------------------------------

// atribuir limite de saque para conta corrente

// CC = Conta Corrente
function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

// Polimorfismo
// irá 'sobrescrever' o método de Conta.prototype.depositar
CC.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente | Saldo: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

const cc = new CC(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);    // limite da conta é -100

// --------------------------------------------------------------
console.log();

// conta poupança
// CP = conta poupança
function CP(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp = new CP(12, 33, 0);

cp.depositar(10);
cp.sacar(10);
cp.sacar(1);    

// o método sacar da conta poupança se comporta diferente da conta corrente
