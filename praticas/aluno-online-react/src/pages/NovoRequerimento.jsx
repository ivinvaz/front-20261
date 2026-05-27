import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";

export default function NovoRequerimentos() {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const navigate = useNavigate()

    const salvar = (data) => {
        console.log(data)
        reset();
        navigate("/requerimentos");
    };

    const regras = {
        tipo: { 
            required: "Tipo é obrigatório", 
        },
        descricao: { 
            required: "Descrição é obrigatório",
            minLength: { value: 10, message: "A descrição deve conter no mínimo 10 caracteres." } ,
        },
        dtrequerimento: {
            validate: {
                dataMinima: (value) => Date.parse(`${value} 00:00:00 UTC`) >= new Date().getTime() || "Data não pode ser anterior ao dia de hoje"
            }
        },
    }
    return(
        <>
            <PageTitle title="Novo Requerimento" />
            <form onSubmit={handleSubmit(salvar)}>
                <div className="flex flex-col my-2">
                    <label htmlFor="tipoRequerimento" className="font-bold">Tipo de Requerimento</label>
                    <select defaultValue="" id="tipoRequerimento" {...register("tipoRequerimento", regras.tipo)}>
                        <option value="" disabled>Selecione uma opção...</option>
                        <option value="ReqHist">Requerimento de Histórico</option>
                        <option value="ReqDip">Requerimento de Diploma</option>
                        <option value="ReqMat">Requerimento de Matrícula</option>
                    </select >
                    {errors?.tipoRequerimento && <p>{errors.tipoRequerimento.message}</p>}
                </div>
                <div className="flex flex-col my-2">
                    <label htmlFor="descricao" className="font-bold">Descrição</label>
                    <textarea  id="descricao" {...register("descricao", regras.descricao)}/>
                    {errors?.descricao && <p>{errors.descricao.message}</p>}
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <div className="flex flex-row">
                        <label htmlFor="dtrequerimento" className="font-bold">Data do Requerimento</label>
                        <input type="date" id="dtrequerimento" {...register("dtrequerimento", regras.dtrequerimento)}/>
                    </div>
                    {errors?.dtrequerimento && <p>{errors.dtrequerimento.message}</p>}
                </div>
                <section className="flex my-5 gap-2">
                    <button className="my-5 p-2 b-none bg-gray-300 hover:bg-gray-500">Enviar</button>
                    <NavLink to="/requerimentos" className="my-5 p-2  bg-gray-300 hover:bg-gray-500">Cancelar</NavLink>
                </section>
            </form>
        </>
    )
}
