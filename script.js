const sessaoAtiva = localStorage.getItem("sessao");

if (sessaoAtiva !== null) {
  mostrarAreaLogado(sessaoAtiva);
}

function cadastrar() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value;

  if (usuario === "" || senha === "") {
    exibirMensagem("preencha o usuário e senha.", "erro");
    return;
  }

  if (senha.length < 4) {
    exibirMensagem("a senha deve ter pelo menos 4 caracteres");
  }

  const usuarioExistente = localStorage.getItem("usuario_" + usuario);

  if (usuarioExistente !== null) {
    exibirMensagem("este usuário já está cadastrado.", "ERRO");
    return;
  }

  localStorage.setItem("usuario_" + usuario, senha);
  exibirMensagem("conta criada com sucesso! Faça o login.", "ok");
}

function entrar() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value;

  if (usuario === "" || senha === "") {
    exibirMensagem("preencha usuário e senha.", "erro");
    return;
  }

  const senhaSalva = localStorage.getItem("usuario_" + usuario);

  if (senhaSalva === null) {
    exibirMensagem("usuario não encontrado", "erro");
    return;
  }

  if (senhaSalva !== senha) {
    exibirMensagem("senha incorreta", "erro");
    return;
  }

  localStorage.setItem("sessao", usuario);

  mostrarAreaLogado(usuario);
}

function sair() {
  localStorage.removeItem("sessao");
  mostrarAreaLogin();
}

function exibirMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  mensagem.className = "mensagem" + tipo;
  mensagem.style.display = "block";
}

function mostrarAreaLogado(usuario) {
  document.getElementById("area-login").style.display = "none";
  document.getElementById("area-logado").style.display = "block";
  document.getElementById("texto-bem-vindo").textContent =
    "olá, " + usuario + ".";
}

function mostrarAreaLogin() {
  document.getElementById("area-login").style.display = "block";
  document.getElementById("area-logado").style.display = "none";
}