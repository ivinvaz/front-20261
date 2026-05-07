import PageTitle from "../components/PageTitle";
import Tabela from "../components/Tabela";

export default function Faltas() {
  return (
    <>
      <PageTitle title="Hisórico de faltas por semestre" />
      <Tabela
        title="2025.01"
        table={{
          header: ["Disciplina", "Faltas", "Presença"],
          rows: [
            ["Matemática", "2", "90%"],
            ["Segurança", "1", "85%"],
            ["Engenharia de Software", "3", "80%"],
          ],
        }}
      />
      <Tabela
        title="2025.02"
        table={{
          header: ["Disciplina", "Faltas", "Presença"],
          rows: [
            ["Geografia", "3", "90%"],
            ["Governança de TI", "1", "85%"],
            ["Programação Mobile", "3", "80%"],
          ],
        }}
      />
    </>
  );
}
