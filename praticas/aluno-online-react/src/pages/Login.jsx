import logo from "../assets/learn.svg";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-center">
        <img src={logo} alt="Imagem do Logo" className="w-20! h-20!" />
        <h1 className="font-bold text-2xl mb-6">Aluno Online</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
