import './App.css';
//import logo from './assets/hero.png'
import learnCap from './assets/learn.svg'

function Cabecalho(){
  return(
        <div>
          <header>Titulo</header>
        </div>
  );
}

function App() {
  return (
    <main>
      {
      // <div>
      //   <Cabecalho/>
      //   <div>{6+61}</div>
      //   <img src={logo} alt="" />
      // </div>
      }
      <img src={learnCap} alt="Icone de um chapéu de ensino" />
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">Matrícula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhaErro"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}


export default App;