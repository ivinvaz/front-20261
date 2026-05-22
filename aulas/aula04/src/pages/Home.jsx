import { useEffect, useState } from "react";

function Home() {
    const [carregando,setCarregando] = useState(false);
    const [tarefas,setTarefas] = useState([])
    
    const carregarDados = async () => {
        await new Promise((resolve) => setTimeout(resolve,3000))
        setTarefas([
        {id:1,nome:"Fazer o trabalho", status:"aberta"},
        {id:2,nome:"Estudar API REST", status:"aberta"},
        {id:3,nome:"Entregar as práticas", status:"aberta"},
        {id:4,nome:"Revisar conteúdo", status:"pendente"},
        {id:5,nome:"Assistir vídeo-aulas", status:"concluida"},
        ])
    }

    carregarDados();

    useEffect(()=>{
        setCarregando(true)
        const disparar = async () => {
            await carregarDados()
            setCarregando(false)
        };
        disparar();
    },[])

    return (
    <>
        <h1 >Página Inicial</h1>
        <h2>Minhas Tarefas do Dia</h2>
        {carregando ? (
        <>
            <table className="border border-gray-300 rounded animate-pulse">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="py-2 px-10"></th>
                        <th className="py-2 px-10"></th>
                        <th className="py-2 px-10"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                    </tr>
                    <tr>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                    </tr>
                    <tr>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                    </tr>
                    <tr>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                    </tr>
                    <tr>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                        <th><div className="my-1 mx-1 py-2 rounded bg-gray-300"></div></th>
                    </tr>
                </tbody>
            </table>
        </>
        ): (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tarefa</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {tarefas.map((item, chave) => (
                <tr key={chave}>
                    <th >{item.id}</th>
                    <th >{item.nome}</th>
                    <th >{item.status}</th>
                </tr>
            ))}
            </tbody>
        </table>
        )}
    </>
    )
}

export default Home;