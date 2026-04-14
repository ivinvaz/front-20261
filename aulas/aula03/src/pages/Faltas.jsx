import Tabela from "../components/Tabela";
import Layout from "./Layout";

function Faltas() {
  return (
    <>
    <Layout
    titulo="Minahs Faltas"
    subtitulo="Histórico de Faltas por Semestre">
      <Tabela/>
      <Tabela/>
      <Tabela/>
    </Layout>
    </>
  );
}

export default Faltas;
