import logo from "../../assets/learn.svg";
import { NavLink } from "react-router";
import "./Menu.css"

export default function Menu() {
  return (
    <aside className="bg-gray-200 hidden md:block w-64 p-4">
      <header className="flex gap-2 justify-center items-center">
        <img src={logo} alt="Logo da aplicação" className="w-12 h-12" />
        <h1 className="text-lg font-bold">Aluno online</h1>
      </header>
      <nav className="mt-12">
        <ul className="font-semibold">
          <li><NavLink to="/">Dashboard</NavLink></li>
          <li><NavLink to="/notas">Notas</NavLink></li>
          <li><NavLink to="/faltas">Faltas</NavLink></li>
          <li><NavLink to="/boletos">Boletos</NavLink></li>
          <li><NavLink to="/requerimentos">Requerimentos</NavLink></li>
          <li><NavLink to="/login">Sair</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}
