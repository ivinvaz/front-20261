import PageTitle from "../components/PageTitle";
import Tabela from "../components/Tabela";

export default function Boletos() {
  return (
    <>
      <PageTitle title="Histórico de pagamentos" />
      <Tabela
        table={{
          header: ["Vencimento", "Valor $", "Situação"],
          rows: [
            ["07/01/2025", "500,00", "Pago"],
            ["07/02/2025", "500,00", "Pendente"],
            ["07/03/2025", "500,00", "Pendente"],
            ["07/04/2025", "500,00", "Pago"],
          ],
        }}
      />
    </>
  );
}
