import React from 'react'
import { Link, Outlet } from 'react-router'
import Logo from "@/images/image.png"

const Layout = () => {
    return (
        <div>
            <nav className='flex justify-between py-1 px-10 fixed z-100  w-[100%] bg-white   items-center' >
                <div>
                    <img src={Logo} alt="" className='w-40'/>
                </div>
                <div className='flex gap-10'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                </div>
                <div className='flex gap-10'>
                    <Link to={"login"}>Login</Link>
                    <button>Register</button>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout