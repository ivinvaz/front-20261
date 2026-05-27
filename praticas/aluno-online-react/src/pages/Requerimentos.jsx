import PageTitle from "../components/PageTitle";
import Tabela from "../components/Tabela";
import { NavLink } from "react-router";

export default function Requerimentos() {
  return (
    <>
      <PageTitle title="Faça solicitações online para a secretaria" />
      <section  className="my-5">
        <NavLink to="/requerimentos/novo-requerimento" className="my-5 p-2  bg-gray-300 hover:bg-gray-500">Novo requerimento</NavLink>
      </section>
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
