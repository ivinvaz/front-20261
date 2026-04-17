import avatar from "../assets/learn.svg";
import { useState } from "react";
import InputSenha from "../components/InputSenha";
import InputMatricula from "../components/InputMatricula"
import BotaoSubmit from "../components/BotaoSubmit";

function FormLogin(){
    const [matricula, setMatricula] = useState();
    const [matriculaErro, setMatriculaErro] = useState();
    const [senha, setSenha] = useState();
    const [senhaErro, setSenhaErro] = useState();

    const trataSubmit = (e) => {
        e.preventDefault();

        if(!matricula){
        setMatriculaErro("Matrícula é obrigatório")
        return
        }

        if(!senha){
        setSenhaErro("Senha é obrigatório")
        return
        }

        setMatricula("")
        setSenha("")
    }

    const mudaMatricula = (e) => {
        setMatricula(e.target.value)
        setMatriculaErro("")
    }
    const mudaSenha = (e) => {
        setSenha(e.target.value)
        setSenhaErro("")
    }

    return(
      <form onSubmit={trataSubmit}>
        <InputMatricula
          valor={matricula}
          erro={matriculaErro}
          mudaValor={mudaMatricula}
        />
        <InputSenha
          valor={senha}
          erro={senhaErro}
          mudaValor={mudaSenha}
        />
        <BotaoSubmit>Entrar</BotaoSubmit>
      </form>
    );
}

export default FormLogin;