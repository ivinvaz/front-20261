import Layout from "./Layout";
import Tabela from "../components/Tabela";

function Requerimentos() {
  const titulo = "";

  const colunas = [
    "Tipo de Requerimento",
    "Data da Solicitação",
    "Situação"
  ]

  const requerimento = [
    {requerimento: "Revisão de Menção", data:"15/12/2025",situacao:"Indeferido"},
    {requerimento: "Dispensa de Disciplina", data:"12/06/2025",situacao:"Indeferido"},
    {requerimento: "Trancamento de Matrícula", data:"05/01/2024",situacao:"Deferido"},
  ]

  return (
    <>
    <Layout
    titulo="Meus Requerimentos"
    subtitulo="Faça solicitações online para a secretaria ">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Tabela titulos={colunas} dados={requerimento} temTitulo={false} titulo={titulo}/>
      </section>
    </Layout>
    </>
  );
}

export default Requerimentos;
