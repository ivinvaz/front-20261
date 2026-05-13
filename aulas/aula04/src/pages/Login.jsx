import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Login(){
    const { login } = useContext(AuthContext);

    const handleLogin  = () => {
        login({id:0,usuario:"ivin@iesb.edu.br",senha:"1234567"});
    }
    return(
        <>
            <h1>Login</h1>
            <button onClick={handleLogin}>Entrar</button>
        </>
    )
}