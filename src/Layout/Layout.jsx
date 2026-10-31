import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
    return (
        <div>
            <nav className='flex justify-between py-1 px-10 fixed z-100 backdrop-blur-2xl w-[87%]   items-center' >
                <div className='flex gap-3'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/products"}>Products</Link>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout