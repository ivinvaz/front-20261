import "./style.css";

const button = document.querySelector("button");

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  const matricula = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const senha = document.querySelector("#senha");
  const senhaError = document.querySelector("#senhaError");

  emailError.textContent = "";
  senhaError.textContent = "";

  if (matricula.value === "") {
    emailError.textContent = "Email é obrigatório";
    return;
  }

  if (!isValidEmail(matricula.value)) {
    emailError.textContent = "Email deve ser um endereço de email válido";
    return;
  }

  if (senha.value === "") {
    senhaError.textContent = "Senha é obrigatória";
    return;
  }

  if (senha.value.length < 8) {
    senhaError.textContent = "Senha deve ter pelo menos 8 caracteres";
    return;
  }

  window.location.href = "index.html";
});
