import Layout from "./Layout";
import Tabela from "../components/Tabela";

function Boletos() {
  const colunas = [
    "Vencimento",
    "Valor",
    "Situação"
  ]

  const boletos = [
    {vencimento: "01/03/2026", valor:"500",situacao:"Pago"},
    {vencimento: "01/05/2026", valor:"500",situacao:"A vencer"},
    {vencimento: "01/06/2026", valor:"500",situacao:"A vencer"},
    {vencimento: "01/07/2026", valor:"500",situacao:"A vencer"},
    {vencimento: "01/08/2026", valor:"500",situacao:"A vencer"},
  ]

  return (
    <>
    <Layout
    titulo="Meus Boletos"
    subtitulo="Histórico de Pagamentos">
    </Layout>
      <Tabela titulos={colunas} dados={boletos}/>
    </>
  );
}

export default Boletos;
