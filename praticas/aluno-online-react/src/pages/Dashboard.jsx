import Card from "../components/Card";
import PageTitle from "../components/PageTitle";

export default function Dashboard() {
  return (
    <>
      <PageTitle />
      <section>
        <Card
          title="Mural de avisos"
          contentList={[
            "Eleição para representante",
            "23/04 - Inscrição para projeto de extensão",
            "Resultados do vestibular",
          ]}
        />
        <Card
          title="Calendário acadêmico"
          contentList={[
            "19/02- Início das aula",
            "23/04 - Aplicação P1",
            "15/06 - Entrega do projeto final",
          ]}
        />
        <Card
          title="Minhas disciplinas"
          contentList={["Contrução Front-end", "Governança de TI", "Devops"]}
        />
      </section>
    </>
  );
}
