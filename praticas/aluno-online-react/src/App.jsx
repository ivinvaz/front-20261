import { Route, Routes } from "react-router";
import "./App.css";
import Boletos from "./pages/Boletos";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Login from "./pages/Login";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";
import Layout from "./components/Layout/Layout"
import NovoRequerimentos from "./pages/NovoRequerimento";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/faltas" element={<Faltas/>}/>
          <Route path="/notas" element={<Notas/>}/>
          <Route path="/boletos" element={<Boletos/>}/>
          <Route path="/requerimentos" element={<Requerimentos/>}/>
          <Route path="/requerimentos/novo-requerimento" element={<NovoRequerimentos/>}/>
        </Route>
        <Route path="/login"element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
