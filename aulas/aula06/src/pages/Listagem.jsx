import { Link } from "react-router";
import { useEffect, useState } from "react";
import { listar } from "../services/produtoService";

export default function Listagem(){
    const [dados,setDados] = useState([]);

    useEffect(()=>{
        const disparar = async () =>{
            const resposta = await listar();
            setDados(resposta)
        }   
        disparar();
    },[])

    return(
    <>
        <h1>Listagem de Produtos</h1>
        <Link to="/produtos/novo">+ Adicionar</Link>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Unidade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((produto,chave) => (
                    <tr key={chave}>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.unidade}</td>
                        <td>
                            <Link to={`/produtos/editar/${produto.id}`}>Editar</Link>
                            {" | "}
                            <Link to="/produtos/">Remover</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}