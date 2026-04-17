import FormLogin from "../forms/FormLogin";
import avatar from "../assets/avatar.svg"

function Login() {
  return (
    <>
      <img src={avatar} alt="Imagem do logo" />
      <h1>Aluno Online</h1>
      <FormLogin/>
    </>
  );
}

export default Login;
