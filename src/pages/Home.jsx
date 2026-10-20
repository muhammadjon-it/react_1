import React from 'react'
import Robot from "@/images/83701034272 1.png"
import Companies from "@/images/Companies.png"
import image_2 from "@/images/72355892508 1.png"
import image_3 from "@/images/72355892508 1 (1).png"
import image_4 from "@/images/72355892508 1 (2).png"
import clubContainer from "@/images/Sub Container.png"
import { Link, Outlet } from 'react-router'
import Logo from "@/images/Logo (1).png"


const Home = () => {
  return (
    <div className='bg-[#030303]'>
      <div className='pt-20 bg-[#030303] flex items-center justify-between max-h-screen px-10 gap-20'>
        <div className='w-130'>
          <p className=' text-start leading-25 text-white font-black text-5xl'>Transforming Data into  <span className='bg-[#0A84FF] px-5 rounded-lg'> Decisions </span>  </p>
          <p className='text-start text-white'>Leverage the power of machine learning and AI to unlock insights and drive business growth</p>
          <br />
          <div className=' flex items-center justify-start'>
            <button className='text-white bg-[#0A84FF] px-5 py-1 rounded-lg cursor-pointer'>
              Book a Meeting
            </button>
          </div>
        </div>
        <div className=' p-5'>
          <img src={Robot} alt="" className='w-100 h-90 object-cover' />
        </div>
      </div>
      <div className='py-5 px-10'>
        <img src={Companies} alt="" />
      </div>
      <br /> <br />
      <div className='text-white'>
        <p>
          Our Ultimate Set of Services for Your <br /> Ideas Implementation
        </p>
      </div>
      <br />
      <div className='grid grid-cols-3 gap-5 m-auto text-white px-10'>
        <div className=' flex flex-col justify-center items-center'>
          <div>
            <img src={image_2} alt="" />
          </div>
          <br />
          <p>
            Predictive Analytics
          </p>
          <br />
          <p>Forecast trends and make data-driven <br /> decisions with our advanced ML <br /> models.</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <div>
            <img src={image_3} alt="" />
          </div>
          <br />
          <p>
            AI Consulting
          </p>
          <br />
          <p>Expert guidance on implementing AI <br /> solutions for your business needs.</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <div>
            <img src={image_4} alt="" />
          </div>
          <br />
          <p>
            Data Engineering
          </p>
          <br />
          <p>Build robust data pipelines and <br /> infrastructure for ML operations.</p>
        </div>
      </div>
      <br /> <br />

      <div className='flex flex-col items-center w-full gap-5'>

        <div className='  w-175 flex text-start justify-between p-5 gap-5  rounded-2xl bg-[#1E1E1E]'>
          <p className='text-[#0A84FF] text-2xl font-bold h-11 rounded-lg bg-[#2E2E2E] px-2 py-1'>01</p>
          <p className='text-[#0A84FF] font-[600] text-xl'>What services does Catalyst Analytics provide? <br /> <span className='text-base text-white'> Catalyst Analytics offers a range of services including design, engineering, <br /> and project management. We specialize in user experience design, web <br /> development, mobile app development, <br /> custom software development, branding and identity, and more.</span></p>
          <p className='text-[#0A84FF] text-2xl font-bold cursor-pointer'> ×</p>
        </div>
        <div className='  w-175 flex text-start justify-between items-center p-5 gap-5  rounded-2xl bg-[#1E1E1E]'>
          <p className='text-white text-2xl font-bold h-11 rounded-lg bg-[#2E2E2E] px-2 py-1'>02</p>
          <p className='text-white text-xl font-[600]'>Lorem Ipsum is simply dummy text of the printing  </p>
          <p className='text-white text-2xl font-bold cursor-pointer'> +</p>
        </div>
        <div className='  w-175 flex text-start justify-between items-center p-5 gap-5  rounded-2xl bg-[#1E1E1E]'>
          <p className='text-white text-2xl font-bold h-11 rounded-lg bg-[#2E2E2E] px-2 py-1'>03</p>
          <p className='text-white text-xl font-[600]'>Lorem Ipsum is simply dummy text of the printing </p>
          <p className='text-white text-2xl font-bold cursor-pointer'> +</p>
        </div>
        <div className='  w-175 flex text-start justify-between items-center p-5 gap-5  rounded-2xl bg-[#1E1E1E]'>
          <p className='text-white text-2xl font-bold h-11 rounded-lg bg-[#2E2E2E] px-2 py-1'>04</p>
          <p className='text-white text-xl font-[600]'>Lorem Ipsum is simply dummy text of the printing </p>
          <p className='text-white text-2xl font-bold cursor-pointer'> +</p>
        </div>
        <div className='  w-175 flex text-start justify-between items-center p-5 gap-5  rounded-2xl bg-[#1E1E1E]'>
          <p className='text-white text-2xl font-bold h-11 rounded-lg bg-[#2E2E2E] px-2 py-1'>05</p>
          <p className='text-white text-xl font-[600]'>Lorem Ipsum is simply dummy text of the printing </p>
          <p className='text-white text-2xl font-bold cursor-pointer'> +</p>
        </div>
      </div>
      <br /> <br />   <br />
      <hr className='bg-white' />
      <br />
      <div>
        <nav className='flex justify-between py-1 px-10    text-white items-center' >
          <img src={Logo} alt="" />
          <div className='flex gap-3'>
            <Link to={"/"}>Home</Link>
            <Link to={"/curses"}>Services</Link>
            <Link to={"/careers"}>Careers</Link>
            <Link to={"/careerDetails"}>Career Details</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div>
            <img src={clubContainer} alt="" />
          </div>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
      <br />
      <div className='flex items-center justify-between px-10'>
        <div className='flex gap-5  '>
          <p className='text-white text-[14px]  flex items-center justify-center gap-1'> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 8.6691V17.25C1.5 18.9069 2.84315 20.25 4.5 20.25H19.5C21.1569 20.25 22.5 18.9069 22.5 17.25V8.6691L13.5723 14.1631C12.6081 14.7564 11.3919 14.7564 10.4277 14.1631L1.5 8.6691Z" fill="#0A84FF" />
            <path d="M22.5 6.90783V6.75C22.5 5.09315 21.1569 3.75 19.5 3.75H4.5C2.84315 3.75 1.5 5.09315 1.5 6.75V6.90783L11.2139 12.8856C11.696 13.1823 12.304 13.1823 12.7861 12.8856L22.5 6.90783Z" fill="#0A84FF" />
          </svg>
            contact@catalystanalytics.io</p>
          <p className='text-white text-[14px] flex items-center justify-center gap-1'> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 4.5C1.5 2.84315 2.84315 1.5 4.5 1.5H5.87163C6.732 1.5 7.48197 2.08556 7.69064 2.92025L8.79644 7.34343C8.97941 8.0753 8.70594 8.84555 8.10242 9.29818L6.8088 10.2684C6.67447 10.3691 6.64527 10.5167 6.683 10.6197C7.81851 13.7195 10.2805 16.1815 13.3803 17.317C13.4833 17.3547 13.6309 17.3255 13.7316 17.1912L14.7018 15.8976C15.1545 15.2941 15.9247 15.0206 16.6566 15.2036L21.0798 16.3094C21.9144 16.518 22.5 17.268 22.5 18.1284V19.5C22.5 21.1569 21.1569 22.5 19.5 22.5H17.25C8.55151 22.5 1.5 15.4485 1.5 6.75V4.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="#0A84FF" />
          </svg>
            +1 (469) 712-4672</p>
          <p className='text-white text-[14px]  flex items-center justify-center gap-1'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5397 22.351C11.57 22.3685 11.5937 22.3821 11.6105 22.3915L11.6384 22.4071C11.8613 22.5294 12.1378 22.5285 12.3608 22.4075L12.3895 22.3915C12.4063 22.3821 12.43 22.3685 12.4603 22.351C12.5207 22.316 12.607 22.265 12.7155 22.1982C12.9325 22.0646 13.2388 21.8676 13.6046 21.6091C14.3351 21.0931 15.3097 20.3274 16.2865 19.3273C18.2307 17.3368 20.25 14.3462 20.25 10.5C20.25 5.94365 16.5563 2.25 12 2.25C7.44365 2.25 3.75 5.94365 3.75 10.5C3.75 14.3462 5.76932 17.3368 7.71346 19.3273C8.69025 20.3274 9.66491 21.0931 10.3954 21.6091C10.7612 21.8676 11.0675 22.0646 11.2845 22.1982C11.393 22.265 11.4793 22.316 11.5397 22.351ZM12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="#0A84FF" />
          </svg>
            5511 Parkcrest Dr, Suite 103, Austin, TX 78731</p>
        </div>
        <div className='text-[14px] text-[#98989A] flex items-center justify-center gap-5'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <br /> <br />
          <p className='text-[14px] text-[#98989A]'>© 2025 Catalyst Analytics. All rights reserved.</p>
          <br />
    </div>
  )
}

export default Home