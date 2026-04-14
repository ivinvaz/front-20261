export default function CartTableTitle(){
    return(
        <>
            <section>
                <h1>2026.1</h1>
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 p-2 text-left">Disciplina</th>
                            <th className="border border-gray-300 p-2 text-center">Total de Faltas</th>
                            <th className="border border-gray-300 p-2 text-center">% de Presença</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-2">Cálculo I</td>
                            <td className="border border-gray-300 p-2 text-center">0</td>
                            <td className="border border-gray-300 p-2 text-center">100%</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}