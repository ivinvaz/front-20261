import avatar from "../assets/avatar.svg";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-4">
        <h1 className="text-xl font-bold">Olá, aluno</h1>
        <img src={avatar} alt="Avatar do usuário" className="w-12 h-12" />
      </header>
    </>
  );
}
