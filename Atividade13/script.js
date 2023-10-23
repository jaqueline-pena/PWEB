const imagem = document.getElementById("img");
const titulo = document.getElementById("titulo");

onload = () => {
    imagem.src = "imagens/fechada.png";
    titulo.innerHTML = "Janela Fechada";
}

imagem.addEventListener("mouseenter", () => {
    imagem.src = "imagens/aberta.png";
    titulo.innerHTML = "Janela Aberta";
});

imagem.addEventListener("mouseleave", () => {
    imagem.src = "imagens/fechada.png";
    titulo.innerHTML = "Janela Fechada";
});

imagem.addEventListener("click", () => {
    imagem.src = "imagens/quebrada.png";
    titulo.innerHTML = "Janela Quebrada";
});
