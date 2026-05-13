import { Outlet } from "react-router"
import Menu from "../components/Menu"

export default function Layout(){
    return(
        <>
            <aside>
                <Menu/>
            </aside>
            <main>
                <Outlet/>          
            </main>
        </>
    )
}