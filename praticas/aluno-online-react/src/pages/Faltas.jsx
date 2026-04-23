import Tabela from "../components/Tabela";
import Layout from "./Layout";

function Faltas() {

  const titulo1 = "2026.1"
  
  const titulo2 = "2025.2"
  
  const colunas = [
    "Disciplinas",
    "Total de Faltas",
    "% de Presença"
  ]

  const dadosPrimeiraTB = [
    {disciplina: "BI e Data Warehousing", faltas:"0", presenca:"100%"},
    {disciplina: "Construção de Frontend", faltas:"0", presenca:"100%"},
    {disciplina: "Manuntenção de Software e Devops", faltas:"0", presenca:"100%"},
  ]

  const dadosSegundaTB = [
    {disciplina: "BI e Data Warehousing", faltas:"27", presenca:"87.5%"},
    {disciplina: "Construção de Frontend", faltas:"3", presenca:"95%"},
    {disciplina: "Manuntenção de Software e Devops", faltas:"10", presenca:"90%"},
  ]

  return (
    <>
    <Layout
    titulo="Minhas Faltas"
    subtitulo="Histórico de Faltas por Semestre">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Tabela titulos={colunas} dados={dadosPrimeiraTB} temTitulo={true} titulo={titulo1}/>
        <Tabela titulos={colunas} dados={dadosSegundaTB} temTitulo={true} titulo={titulo2}/>
      </section>
    </Layout>
    </>
  );
}

export default Faltas;
