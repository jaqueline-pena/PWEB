let idades = [];
let opinioes = [];
let mulheres = 0;
let homens = 0;

function calcularEstatisticas() {
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const opiniao = parseInt(document.getElementById("opiniao").value);

    idades.push(idade);
    opinioes.push(opiniao);

    if (sexo === "feminino") {
        mulheres++;
    } else {
        homens++;
    }

    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "masculino";
    document.getElementById("opiniao").value = "4";

    calcularMediaIdade();
    calcularMaisVelha();
    calcularMaisNova();
    calcularQuantidadePessimo();
    calcularPorcentagemOtimoBom();
    atualizarNumerosSexo();
}

function calcularMediaIdade() {
    const somaIdades = idades.reduce((a, b) => a + b, 0);
    const media = somaIdades / idades.length || 0;
    document.getElementById("mediaIdade").textContent = media.toFixed(2);
}

function calcularMaisVelha() {
    const maisVelha = Math.max(...idades, 0);
    document.getElementById("maisVelha").textContent = maisVelha;
}

function calcularMaisNova() {
    if (idades.length > 0) {
        const maisNova = Math.min(...idades);
        document.getElementById("maisNova").textContent = maisNova;
    } else {
        document.getElementById("maisNova").textContent = "Nenhuma idade fornecida.";
    }
}

function calcularQuantidadePessimo() {
    const quantidadePessimo = opinioes.filter(opiniao => opiniao === 1).length;
    document.getElementById("quantidadePessimo").textContent = quantidadePessimo;
}

function calcularPorcentagemOtimoBom() {
    const otimoBomCount = opinioes.filter(opiniao => opiniao === 4 || opiniao === 3).length;
    const totalOpinioes = opinioes.length || 1; 
    const porcentagem = (otimoBomCount / totalOpinioes) * 100;
    document.getElementById("porcentagemOtimoBom").textContent = porcentagem.toFixed(2);
}

function atualizarNumerosSexo() {
    document.getElementById("numeroMulheres").textContent = mulheres;
    document.getElementById("numeroHomens").textContent = homens;
}