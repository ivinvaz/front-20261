import PageTitle from "../components/PageTitle";
import Tabela from "../components/Tabela";

export default function Notas() {
  return (
    <>
      <PageTitle title="Histórico de notas por semestre" />
      <Tabela
        title="2025.01"
        table={{
          header: ["Disciplina", "A1", "A2", "A3", "Menção"],
          rows: [
            ["Matemática", "8.5", "7.0", "9.0", "B"],
            ["Português", "7.5", "8.0", "8.5", "B"],
            ["Inglês", "8.0", "7.5", "8.0", "B"],
          ],
        }}
      />
      <Tabela
        title="2025.02"
        table={{
          header: ["Disciplina", "A1", "A2", "A3", "Menção"],
          rows: [
            ["Power BI", "8.5", "7.0", "9.0", "B"],
            ["Contrução Backend", "8.5", "8.0", "6.5", "B"],
            ["Segurança", "8.0", "7.5", "5.0", "B"],
          ],
        }}
      />
    </>
  );
}
