function cadastrar() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value;

  if (usuario === "" || senha === "") {
    exibirMensagem("Preencha o usuáro e senha.", "erro");
    return;
  }

  if (senha.lenght < 4) {
    exibirMensagem("A senha deve ter ao menos 4 caracteres.");
  }

  const usuarioExistente = localStorage.getItem("usuario_" + usuario);

  if (usuarioExistente !== null) {
    exibirMensagem("Este usuario ja esta cadstrado.", "erro");
    return;
  }

  localStorage.setItem("usuario_" + usuario, senha);
  exibirMensagem("Conta criada com sucesso! faça o login.", "ok");
}

function exibirMensagem(texto, tipo) {
     const mensagem = document.getElementById("mensagem");

     mensagem.textContent = texto;
     mensagem.className = "mensagem" + tipo;
     mensagem.style.display = "block";
}