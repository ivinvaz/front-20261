export default function Tabela({titulos,dados,temTitulo, titulo}){
    return(
        <section className="border border-solid rounded-t-lg border-gray-200 m-5 flex flex-col md:min-w-fit">
            {temTitulo && (
                <h1 className="bg-gray-200 p-1 pt-2 pb-2 rounded-t-lg font-bold">{titulo}</h1>
            )}
            <table className="border rounded-xl">

                <thead>
                    <tr>
                        {titulos.map((item,index) => (
                            <td  className="bg-gray-200 p-1" key={index}>{item}</td>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    {dados.map((item,index) => (
                        <tr key={index} className="border border-solid border-gray-200 rounded-xl">
                            {Object.values(item).map((valor,index) => (
                                <td className="border border-solid rounded-t-lg border-gray-200 rounded-xl p-2" key={index}>{valor}</td>

                            )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}