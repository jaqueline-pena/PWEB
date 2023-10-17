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