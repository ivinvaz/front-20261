import avatar from "../assets/avatar.svg";

function Topbar(props) {
  return (
    <header className="flex flex-1 flex-row max-h-15 justify-between m-5">
      <h1 className="text-4xl font-bold self-center">{props.titulo}</h1>
      <img src={avatar} alt="Imagem do avatar" />
    </header>
  );
}

export default Topbar;
