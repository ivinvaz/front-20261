import { Outlet, useLocation } from "react-router"
import Sidebar  from "../Sidebar"
import Topbar from "../Topbar"
import "./Layout.css"

export default function Layout(){

    const location = useLocation();

    const pageTitles = {
        "/": "Dashboard",
        "/faltas": "Minhas Faltas",
        "/notas": "Boletim de Notas",
        "/boletos": "Meus Boletos",
        "/requerimentos": "Central de Requerimentos"
    };

    const currentTitle = pageTitles[location.pathname] || "Dashboard";

    return(
    <section className="flex flex-1">
      <Sidebar />
      <main className="flex flex-col flex-1 m-2 md:m-5">
        <Topbar titulo={currentTitle} />
        <section className="max-w-fit"> 
            <Outlet/>
        </section>
      </main>
    </section>
    )
}