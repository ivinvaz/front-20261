import Menu from './menu/Menu';

export default function Sidebar() {
    return <aside className='hidden bg-gray-200 md:flex h-screen p-5 max-w-70 justify-center text-left'>
        <header className='flex-col'>
            <Menu/>
        </header>
    </aside>
    
}