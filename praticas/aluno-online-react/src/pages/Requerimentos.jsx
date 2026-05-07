import PageTitle from "../components/PageTitle";
import Tabela from "../components/Tabela";

export default function Requerimentos() {
  return (
    <>
      <PageTitle title="Faça solicitações online para a secretaria" />
      <Tabela
        table={{
          header: ["Tipo de requerimento", "Data da solicitação", "Situação"],
          rows: [
            ["Requerimento de diploma", "01/01/2025", "Indeferido"],
            ["Requerimento de histórico", "01/02/2025", "Aprovado"],
            ["Requerimento de histórico", "11/08/2025", "Aprovado"],
            ["Requerimento de histórico", "21/09/2025", "Aprovado"],
          ],
        }}
      />
    </>
  );
}
