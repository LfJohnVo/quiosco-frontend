import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'

export default function Layout() {
    return (
        <div className='md:flex'>
            <Sidebar />

            <main className='flex-1 h-screen overflow-y-scroll bg-gray-100'>
                <Outlet />
            </main>

            <main className='flex-1'>
                <Resumen />
            </main>

        </div>
    )
}