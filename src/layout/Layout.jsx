import React from 'react'
import { Link, Outlet } from 'react-router'
import Logo from "@/images/Logo (1).png"

const Layout = () => {
  return (
    <div>
      <nav className='flex justify-between py-1 px-10 fixed z-100 backdrop-blur-2xl w-[87%]  text-white items-center' >
        <img src={Logo} alt="" />
        <div className='flex gap-3'>
          <Link to={"/"}>Home</Link>
          <Link to={"/curses"}>Services</Link>
          <Link to={"/careers"}>Careers</Link>
          <Link to={"/careerDetails"}>Career Details</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div>
          <button className='bg-[#0A84FF] px-5 py-1 rounded-lg cursor-pointer'>
            Contact Us
          </button>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout