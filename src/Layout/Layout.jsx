import React from 'react'
import { Link, Outlet } from 'react-router'
import Logo from "@/images/image.png"

const Layout = () => {
    return (
        <div className='bg-[#F7F6FF]'>
            <nav className='flex justify-between py-3 px-10 fixed z-100 backdrop-blur-2xl w-[88%]   items-center border-b-2 border-dashed' >

                <div className='flex gap-10 items-center'>
                    <Link className='text-[15px]' to={"/"}>
                        <div>
                            <img src={Logo} alt="" className='w-35' />
                        </div>
                    </Link>
                    <Link className='text-[15px]' to={"/exchange"}>Биржа</Link>
                    <Link className='text-[15px]' to={"/workies"}>Ворки</Link>
                    <Link className='text-[15px]' to={"/products"}>Конкурсы</Link>
                    <Link className='text-[15px]' to={"/products"}>Создать ворк</Link>
                    <Link className='text-[15px]' to={"/products"}>Создать заказ</Link>
                </div>

                <div className='flex items-center gap-5'>
                    <button className='text-[16px]  px-3  rounded-2xl bg-[#F2F0FE] text-[#1DBF73] cursor-pointer'>Регистрация</button>
                    <button className='text-[16px] px-3 rounded-2xl bg-[#1DBF73] text-white cursor-pointer'>Войти</button>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout