import avatar from '/avatar.svg';

export default function Header(){
    return(
        <>
            <header className="flex flex-col f-1 my-4 mx-8">
                <article className='flex flex-row f-1 place-content-between items-center'>
                    <h1 className='font-bold text-4xl'>Olá, Aluno!</h1>
                    <img src={avatar} className='w-12 h-12' />
                </article>
                <h3 className='font-bold text-xl'>Bem-vindo ao portal do aluno</h3>
            </header>
        </>
    );
}