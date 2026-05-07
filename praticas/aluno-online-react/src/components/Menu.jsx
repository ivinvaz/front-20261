import logo from "../assets/learn.svg";

export default function Menu() {
  return (
    <aside className="bg-gray-300 h-screen hidden md:block w-64 p-4">
      <header className="flex gap-2 justify-center items-center">
        <img src={logo} alt="Logo da aplicação" className="w-12 h-12" />
        <h1 className="text-lg font-bold">Aluno online</h1>
      </header>
      <nav className="mt-12">
        <ul className="font-semibold">
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </nav>
    </aside>
  );
}
