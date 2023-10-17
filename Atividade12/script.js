function Retângulo(x, y) {
    this.base = x;
    this.altura = y;
}

Retângulo.prototype.calcularÁrea = function () {
    return this.base * this.altura;
};

const retângulo = new Retângulo(10, 20);
const área = retângulo.calcularÁrea();

document.querySelector("p").textContent = "Área do retângulo: " + área;
function Retangulo(x, y) {
    this.x = x;
    this.y = y;

    this.calcArea = function () {
        return x * y;
    }
}

var x = prompt("Informe o valor da base do retângulo: ");
var y = prompt("Informe o valor da altura do retângulo: ");

var objRet = new Retangulo(x, y);

alert("A área do Retângulo é de: " + objRet.calcArea());


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

objCorrente.setNome("Jeniffer");
objCorrente.setBanco("Itau");
objCorrente.setNumConta("10");
objCorrente.setSaldo(100);
objCorrente.setSaldoEspecial(1400);

objPoupanca.setNome("Pedro");
objPoupanca.setBanco("Nubank");
objPoupanca.setNumConta("11");
objPoupanca.setSaldo(2000);
objPoupanca.setJuros(20);
objPoupanca.setDataVencimento("15/07/2023");

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