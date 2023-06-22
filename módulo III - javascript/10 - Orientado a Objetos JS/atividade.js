class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(val) {
        this._saldo = val;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Você não possuí saldo suficiente para sacar';
        }

        return this._saldo -= valor;

    }

    depositar(valor) {

        return this._saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'Corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(num) {
        this._cartaoCredito = num;
    }
}

class contaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Poupança';
    }
}

class contaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, tipo) {
        super(agencia, numero, tipo);
        this.tipo = 'Universitária';
    }

    sacar(valor) {
        if (valor > 500) {
            return "Conta Universitária não pode sacar mais de 500 reais";
        }
        super.sacar(valor);
    }
}


let b = new contaUniversitaria('0001', 30, true);
b.depositar(600);
console.log(b.sacar(500));
console.log(b);