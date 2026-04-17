import Card from "../components/Card";
import Layout from "./Layout";

function Dashboard() {
  const avisos = ["Eleição para representante", "Participe do IESB-SE"];
  const datas = [
    "23/04 - Avaliação P1",
    "04/05 - Trancamento de matrícula",
    "07/06 - Renovação de matrículas",
  ];
  const disciplinas = [
    "Construção de Front-End",
    "DevOps",
    "BI e Data Warehouse",
  ];

  return (
    <Layout titulo="Olá, aluno" subtitulo="Bem-vindo ao portal do aluno">
      <Card titulo="Mural de avisos" items={avisos} />
      <Card titulo="Calendário Acadêmico" items={datas} />
      <Card titulo="Minhas Disciplinas" items={disciplinas} />
    </Layout>
  );
}

export default Dashboard;
