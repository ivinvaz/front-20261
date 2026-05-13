import { useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

export default function Login(){
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const handleLogin  = () => {
        login({id:0,usuario:"ivin@iesb.edu.br",senha:"1234567"});
        navigate("/")
    }

    return(
        <>
            <h1>Login</h1>
            <button onClick={handleLogin}>Entrar</button>
        </>
    )
}