import React from 'react'
import { Link, Outlet } from 'react-router'
import Logo from "@/images/image.png"
const Sidebar = () => {
    return (
        <div className='flex h-140 border rounded-2xl m-2 border-violet-300'>
            <nav className='flex flex-col py-4 px-10 justify-between items-center w-64 gap-5 rounded-2xl border-r border-violet-300 bg-white' >
                <div className='flex flex-col gap-10 text-xl font-[500] w-full'>
                <div>
                    <img src={Logo} alt="" className='w-40' />
                </div>
                    <Link className='border hovr:border-blue-100 rounded-lg w-full text-blue-400 hover:bg-blue-50 text-center' to={"/todos"}>Users</Link>
                </div>
                <div className='flex flex-col gap-10 text-xl font-[500] w-full'>
                    <button className='cursor-pointer border hover:border-red-100 rounded-lg w-full text-red-400 hover:bg-red-50 text-center'>
                        Logout
                    </button>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Sidebar  