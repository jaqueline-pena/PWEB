function Conta() {

    this.getNome = function () {
        return this.nome;
    }

    this.setNome = function (nome) {
        this.nome = nome;
    }

    this.getBanco = function () {
        return this.banco;
    }

    this.setBanco = function (banco) {
        this.banco = banco;
    }

    this.getNumConta = function () {
        return this.numConta;
    }

    this.setNumConta = function (numConta) {
        this.numConta = numConta;
    }

    this.getSaldo = function () {
        return this.saldo;
    }

    this.setSaldo = function (saldo) {
        this.saldo = saldo;
    }

}

function Corrente() {

    this.getSaldoEspecial = function () {
        return this.saldoEspecial;
    };

    this.setSaldoEspecial = function (saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    };
}

function Poupanca() {

    this.getJuros = function () {
        return this.juros;
    };

    this.setJuros = function (juros) {
        this.juros = juros;
    };

    this.getDataVencimento = function () {
        return this.dataVencimento;
    };

    this.setDataVencimento = function (dataVencimento) {
        this.dataVencimento = dataVencimento;
    };
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

objCorrente = new Corrente();
objPoupanca = new Poupanca();

objCorrente.setNome("George Washington");
objCorrente.setBanco("Bradesco");
objCorrente.setNumConta("24");
objCorrente.setSaldo(565);
objCorrente.setSaldoEspecial(3000);

objPoupanca.setNome("Areta Franklin");
objPoupanca.setBanco("Banco do Brasil");
objPoupanca.setNumConta("25");
objPoupanca.setSaldo(900000);
objPoupanca.setJuros(20);
objPoupanca.setDataVencimento("30/12/2023");

alert("Dados da conta corrente:\nNome: " + objCorrente.getNome() +
    "\nBanco: " + objCorrente.getBanco() +
    "\nNúmero da Conta: " + objCorrente.getNumConta() +
    "\nSaldo: " + objCorrente.getSaldo() +
    "\nSaldo Especial: " + objCorrente.getSaldoEspecial());

alert("Dados da conta poupança:\nNome: " + objPoupanca.getNome() +
    "\nBanco: " + objPoupanca.getBanco() +
    "\nNúmero da Conta: " + objPoupanca.getNumConta() +
    "\nSaldo: " + objPoupanca.getSaldo() +
    "\nJuros: " + objPoupanca.getJuros() +
    "\nData de vencimento: " + objPoupanca.getDataVencimento());