import learn from '/learn.svg';

export default function Aside(){
    return (
        <>
            <section className='hidden md:flex flex-col flex-none md:flex-1 max-w-50 bg-gray-200'>
                <article className='flex flex-1 flex-row p-3 max-h-20 align-center'>
                    <img src={learn} alt="" className='w-12 h-12 items-center'/>
                    <h1 className='text-xl font-bold align-center'>Aluno Online</h1>
                </article>
                <article >
                    <ul className='list-disc list-inside p-4'>
                        <li>DashBoard</li>
                        <li>Notas</li>
                        <li>Faltas</li>
                        <li>Boletos</li>
                        <li>Requerimento</li>
                        <li>Sair</li>
                    </ul>
                </article>
            </section>
        </>
    )
}