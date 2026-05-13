import "./Menu.css"
import { NavLink, Link} from "react-router";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Menu(){
    const usuarioId = 0;
    const { logout, usuario } = useContext(AuthContext);
    
    const handleSair = () =>{ 
        logout()       
    }

    return <nav>
        <ul>
            <h4>{usuario.nome}</h4>
            <h3>{usuario.email}</h3>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to={`/perfil/${usuarioId}`}>Perfil</NavLink></li>
            <li><NavLink to="/about">Sobre</NavLink></li>
            <li><NavLink to="/settings">Configurações</NavLink></li>
            <li><Link to="/" onClick={handleSair}>Sair</Link></li>
        </ul>
    </nav>
}