function calcularMedia() {

    // Solicitar ao usuário o nome do aluno e as notas

    var nomeAluno = prompt("Digite o nome do aluno: ");
    var nota1 = parseFloat(prompt("Digite a primeira nota: "));
    var nota2 = parseFloat(prompt("Digite a segunda nota: "));
    var nota3 = parseFloat(prompt("Digite a terceira nota: "));

    // Calcular a média aritmética
    var media = (nota1 + nota2 + nota3) / 3;
    
    // Exibir a média em um alerta
    alert("Média de " + nomeAluno + ": " + media.toFixed(2));
}