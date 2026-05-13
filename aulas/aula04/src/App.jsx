import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Erro404 from "./pages/Erro404";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import { useContext, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  let { logado } = useContext(AuthContext);

  return (
  <Routes>
    { logado ?(
      <Route path="/" element={<Layout/>} > 
        <Route index element={<Home />} /> 
        <Route path="about" element={<About />} /> 
        <Route path="settings" element={<Settings />} /> 
        <Route path="/perfil/:id" element={<Perfil />}  />
      </Route>
      ) : (
      <Route path="/" element={<Login />}  />
      )}
      <Route path="*" element={<Erro404 />}  />
  </Routes>
  );
}

export default App;
