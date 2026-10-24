import React from 'react'
import { Link, Outlet } from 'react-router'
import Logo from '@/images/image.png'

const Layout = () => {
    return (
        <div>
            <nav className='flex justify-between py-1 px-10 fixed z-100 backdrop-blur-2xl w-[100%] border-gray-400   items-center border-b' >
                <div className='flex gap-10 items-center px-10 py-4'>
                    <Link to={"/"}>
                        <div>
                            <img src={Logo} alt="" className='w-30' />
                        </div>
                    </Link>
                    <Link to={"/about"}>About Us</Link>
                    <Link to={"/"}>Courses</Link>
                    <Link to={"/"}>Events</Link>
                    <Link to={"/"}>Blog</Link>
                    <Link to={"/"}>Contacts</Link>
                </div>
                <div className='flex items-center gap-8'>
                    <button className='bg-[#FF3F3A] text-white px-4 py-2 '>Get consultation</button>
                    <button className='flex items-center gap-2'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0002 2.70768C8.38936 2.70768 7.08353 4.01352 7.08353 5.62435C7.08353 7.23518 8.38936 8.54102 10.0002 8.54102C11.611 8.54102 12.9169 7.23518 12.9169 5.62435C12.9169 4.01352 11.611 2.70768 10.0002 2.70768ZM5.41686 5.62435C5.41686 3.09304 7.46889 1.04102 10.0002 1.04102C12.5315 1.04102 14.5835 3.09304 14.5835 5.62435C14.5835 8.15565 12.5315 10.2077 10.0002 10.2077C7.46889 10.2077 5.41686 8.15565 5.41686 5.62435Z" fill-rule="evenodd" clip-rule="evenodd" fill="#424551" />
                        <path d="M5.08691 12.7077C4.50914 12.7077 4.05755 12.989 3.87424 13.3932C3.62053 13.9526 3.39078 14.6187 3.33656 15.2503C3.31233 15.5327 3.43006 15.7408 3.5923 15.8416C4.44993 16.3743 6.43719 17.291 10.0002 17.291C13.5632 17.291 15.5505 16.3743 16.4081 15.8416C16.5703 15.7408 16.6881 15.5327 16.6638 15.2503C16.6096 14.6187 16.3799 13.9526 16.1261 13.3932C15.9428 12.989 15.4912 12.7077 14.9135 12.7077H5.08691ZM2.35639 12.7048C2.86301 11.5877 3.99428 11.041 5.08691 11.041H14.9135C16.0061 11.041 17.1374 11.5877 17.644 12.7048C17.935 13.3464 18.2472 14.2089 18.3244 15.1078C18.3946 15.9263 18.0544 16.7809 17.2876 17.2573C16.1596 17.958 13.8665 18.9577 10.0002 18.9577C6.13386 18.9577 3.84078 17.958 2.71283 17.2573C1.94595 16.7809 1.60575 15.9263 1.676 15.1078C1.75315 14.2089 2.0654 13.3464 2.35639 12.7048Z" fill-rule="evenodd" clip-rule="evenodd" fill="#424551" />
                    </svg>
                        Log in / Register</button>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout