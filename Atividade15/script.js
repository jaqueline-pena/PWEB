function validarCampos() {

  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var comentario = document.getElementById("comentario").value;

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome == "" || nome < 10) {
    alert("Preencha campo nome corretamente! Insira pelo menos 10 caracteres");
    document.forms.atividade.elements.nome.focus();
    return false;
  };

  if (email == "" || !re.test(email)) {
    alert("Preencha campo e-mail corretamente!");
    document.forms.atividade.elements.email.focus();
    return false;
  }

  if (comentario == "" || comentario.length < 20) {
    alert("O campo comentário precisa ter pelo menos 20 caracteres");
    document.forms.atividade.elements.comentario.focus();
    return false;
  }

  if (pesquisa === "") {
    document.getElementById("mensagem").innerHTML = "Que bom que você voltou a visitar esta página!";
  } else {
    document.getElementById("mensagem").innerHTML = "Volte sempre a esta página!";
  }

  return true;
}