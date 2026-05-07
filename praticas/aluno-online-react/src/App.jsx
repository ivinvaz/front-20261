import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Boletos from "./pages/Boletos";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Login from "./pages/Login";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";

function App() {
  const pagina = 0;
  return (
    <>
      {pagina === 0 && <Login />}
      {pagina > 0 && (
        <div className="flex">
          <Menu />
          <main className="px-6 flex-1">
            <Header />
            {pagina === 1 && <Dashboard />}
            {pagina === 2 && <Faltas />}
            {pagina === 3 && <Notas />}
            {pagina === 4 && <Boletos />}
            {pagina === 5 && <Requerimentos />}
          </main>
        </div>
      )}
    </>
  );
}

export default App;
