import { createContext, useContext, useState } from "react"

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [logado,setLogado] = useState(true);
    const [usuario,setUsuario] = useState({});

    const login  = (dados) => {
        setUsuario({nome:"Ivin",email:"ivin@iesb.edu.br"});
        setLogado(true);
    }

    const logout = ()=>{
        setUsuario({});
        setLogado(false)
    }
    return(
        <AuthContext.Provider value={{logado,setLogado, login, logout, usuario}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuthContext(){
    return useContext(AuthContext);
}

export {AuthProvider, useAuthContext};