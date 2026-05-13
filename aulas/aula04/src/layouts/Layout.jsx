import { Outlet, Navigate } from "react-router"
import Menu from "../components/Menu"
import { useAuthContext } from "../contexts/AuthContext"

export default function Layout(){
    const { logado } = useAuthContext();

    return(
        <>
            { logado ? (
            <>

                <aside>
                    <Menu/>
                </aside>
                <main>
                    <Outlet/>          
                </main>
            </>
            ) : (
                <Navigate to="/login"/>
            )}
        </>
    )
}