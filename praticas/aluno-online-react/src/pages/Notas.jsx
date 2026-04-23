import Layout from "./Layout";
import Tabela from "../components/Tabela";

function Notas() {
  const titulo1 = "2026.1"
  
  const titulo2 = "2025.2"
  
  const colunas = [
    "Disciplinas",
    "A1",
    "A2",
    "A3",
    "Mensão"
  ]

  const dadosPrimeiraTB = [
    {disciplina: "BI e Data Warehousing", a1:"", a2:"",a3:"", mensao:"SR"},
    {disciplina: "Construção de Frontend", a1:"", a2:"",a3:"", mensao:"SR"},
    {disciplina: "Manuntenção de Software e Devops", a1:"", a2:"",a3:"", mensao:"SR"},
  ]

  const dadosSegundaTB = [
    {disciplina: "BI e Data Warehousing", a1:"5.4", a2:"6.2",a3:"", mensao:"SR"},
    {disciplina: "Construção de Frontend", a1:"6.3", a2:"6.1",a3:"", mensao:"SR"},
    {disciplina: "Manuntenção de Software e Devops", a1:"7.4", a2:"7.1",a3:"", mensao:"SR"},
  ]

  return (
    <>
    <Layout
      titulo="Minhas Notas"
      subtitulo="Histórico de Notas por Semestre"
    >
        <Tabela titulos={colunas} dados={dadosPrimeiraTB} temTitulo={true} titulo={titulo1}/>
        <Tabela titulos={colunas} dados={dadosSegundaTB} temTitulo={true} titulo={titulo2}/>
    </Layout>
    </>
  );
}

export default Notas;
