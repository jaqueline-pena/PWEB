function realizarOperacoes() {

    // Solicitar ao usuário dois números

    var numero1 = parseFloat(prompt("Digite o primeiro número: "));
    var numero2 = parseFloat(prompt("Digite o segundo número: "));

    // Realizar as operações
    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var produto = numero1 * numero2;
    var divisao = numero1 / numero2;
    var resto = numero1 % numero2;

    // Exibir os resultados em um alerta
    alert("Soma: " + soma.toFixed(2) +
        "\nSubtração: " + subtracao.toFixed(2) +
        "\nProduto: " + produto.toFixed(2) +
        "\nDivisão: " + divisao.toFixed(2) +
        "\nResto: " + resto.toFixed(2));

}