const url = "http://localhost:3000/usuarios";

async function entrar(credenciais) {
  const resposta = await fetch(`${url}?email=${credenciais.email}`);
  const usuario = await resposta.json();
  if (
    usuario[0]?.email === credenciais.email &&
    usuario[0]?.senha == credenciais.senha
  ) {
    const token = btoa(Math.random().toString(36) + Date.now());
    localStorage.setItem("app.token", token);
    localStorage.setItem("app.user", JSON.stringify(usuario[0]));
    return {
      token:token,
      mensagem: "login com sucesso"  
    };
  }

  return { token: null, mensagem: "credenciais invalidas" };
}

export { entrar };