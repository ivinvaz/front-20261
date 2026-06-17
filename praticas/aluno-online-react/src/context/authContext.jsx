import { createContext, useContext, useState } from "react";
import { entrar } from "../services/authService";

// cria o contexto
const AuthContext = createContext();

// cria o provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(localStorage.getItem("app.token"));
  const [usuario, setUsuario] = useState(localStorage.getItem("app.user"));

  const login = async (dados) => {
    const { token, mensagem } = await entrar(dados);
    if (token) {
      setUsuario({email: dados.email, token});
      localStorage.setItem("app.token", token);
      setLogado(token);
      return;
    }

    throw new Error(mensagem);
  };

  const logout = () => {
    setUsuario({});
    localStorage.removeItem("app.token");
    localStorage.removeItem("app.user");
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  return useContext(AuthContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { useAuthContext, AuthProvider };