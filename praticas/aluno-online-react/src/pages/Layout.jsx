import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Layout(props) {
  return (
    <section className="flex flex-1">
      <Sidebar />
      <main className="flex flex-col flex-1">
      <Topbar titulo={props.titulo} />
      <h2 className="m-5 text-3xl font-bold">{props.subtitulo}</h2>
      <section> 
        {props.children}
      </section>
      </main>
    </section>
  );
}

export default Layout;
