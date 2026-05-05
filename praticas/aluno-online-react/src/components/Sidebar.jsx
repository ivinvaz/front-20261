import logo from '../assets/learn.svg'
import Menu from './Menu';

function Sidebar() {
    return <aside className='hidden bg-gray-200 md:flex flex-1 p-5 max-w-70 justify-center text-left'>
        <header className='flex-col'>
            <section className='flex p-2 gap-2 mb-6'>
                <img src={logo} alt="logotipo"/>
                <h1 className='text-2xl font-bold'>Aluno Online</h1>
            </section>
            <Menu/>
        </header>
    </aside>
    
}

export default Sidebar;