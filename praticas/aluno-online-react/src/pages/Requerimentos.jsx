import PageTitle from "../components/PageTitle";
import Tabela from "../components/Tabela";
import { NavLink } from "react-router";
import { listar } from "../services/requerimentoService";
import { useEffect, useState} from "react";

export default function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([]);

  useEffect(()=>{
    const disparar = async ()=>{
      const itens  = await listar() 
      let itensLimpos = [];
      itens.forEach((item)=>{
        itensLimpos.push([item.tipoRequerimento,item.dtrequerimento,item.situacaoRequerimento])
      })
      setRequerimentos(itensLimpos)
    }
    disparar()    
  },[])
  
  return (
    <>
      <PageTitle title="Faça solicitações online para a secretaria" />
      <section  className="my-5">
        <NavLink to="/requerimentos/novo-requerimento" className="my-5 p-2  bg-gray-300 hover:bg-gray-500">Novo requerimento</NavLink>
      </section>
      <Tabela 
        table={{
          header: ["Tipo de requerimento", "Data da solicitação", "Situação"],
          rows: requerimentos,
        }}
      />
    </>
  );
}
