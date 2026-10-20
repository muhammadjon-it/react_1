import React from 'react'
import clubContainer from "@/images/Sub Container.png"
import { Link, Outlet } from 'react-router'
import Logo from "@/images/Logo (1).png"
import ContactImg from "@/images/calogo1 2 (1).png"


const Contact = () => {
  return (
    <div className='pt-20 bg-[#030303] px-10'>

      <div className='bg-[#141414] flex px-8 rounded-2xl gap-10 items-center justify-center'>
        <div className='text-white text-start'>
          <p className='font-bold text-2xl'>Build the Future with Us</p>
          <br />
          <p className='text-[16px]'>We’re a team of builders, thinkers, and explorers using AI, machine learning, and <br /> blockchain to solve meaningful problems.</p>
          <br />
          <button className='text-[14px] bg-[#0A84FF] px-5 py-1 rounded-lg cursor-pointer'>
            Explore Open Positions
          </button>
        </div>
        <div>
          <img src={ContactImg} alt="" />
        </div>
      </div>
      <br /> <br />
      <div className='flex gap-8'>
        <form className='p-8 bg-[#1A1A1A] text-white w-150 rounded-2xl' >
          <p>Apply Now</p>
          <br />
          <div className='flex gap-3'>
            <input className='bg-[#1F1F1F] text-[14px] rounded-lg py-[2px] w-70 border-1 border-[#B3B3B2] px-2' type="text" placeholder='First Name*' /> <input className='bg-[#1F1F1F] text-[14px] rounded-lg py-[2px] w-70 border-1 border-[#B3B3B2] px-2' type="text" placeholder='Last Name*' />
          </div>
          <br /> <br />
          <input className='bg-[#1F1F1F] text-[14px] rounded-lg py-[2px] w-full border-1 border-[#B3B3B2] px-2' type="text" placeholder='First Email*' />
          <br /> <br /> <br />
          <input className='bg-[#1F1F1F] text-[14px] rounded-lg py-[2px] w-full border-1 border-[#B3B3B2] px-2' type="text" placeholder='First Headline (Optional)' />
          <br /> <br /> <br />
          <input className='bg-[#1F1F1F] text-[14px] rounded-lg py-[2px] w-full border-1 border-[#B3B3B2] px-2' type="text" placeholder='Phone Number' />
          <br /> <br /> <br />
          <input className='bg-[#1F1F1F] text-[14px] rounded-lg py-[2px] pb-13 w-full border-1 border-[#B3B3B2] px-2' type="text" placeholder='Message' />
          <br /> <br /> <br />

          <button className='bg-[#0A84FF] w-full py-2 rounded-lg cursor-pointer font-[500]'>Submit Application</button>
        </form>
        <div>
          <div className='text-white text-start bg-[#1A1A1A] w-70 p-5 rounded-2xl h-80'>
            <p>Contact Information</p>
            <br /> 
            <p className='flex items-center gap-3'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2C22 0.9 21.1 0 20 0H4C2.9 0 2 0.9 2 2V14C2 15.1 2.9 16 4 16H20C21.1 16 22 15.1 22 14V2ZM20 2L12 7L4 2H20ZM20 14H4V4L12 9L20 4V14Z" fill="#0A84FF" />
              </svg>

              Email</p>
            <p className='text-[#B3B3B2]'>contact@catalystanalytics.io</p>
            <br />
            <p className='flex items-center gap-3'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.7772 1.70252C5.79136 0.69419 7.46136 0.873357 8.31053 2.00836L9.3622 3.41169C10.0539 4.33502 9.9922 5.62502 9.17136 6.44086L8.97303 6.63919C8.95054 6.72245 8.94826 6.80987 8.96636 6.89419C9.01886 7.23419 9.30303 7.95419 10.493 9.13752C11.683 10.3209 12.408 10.6042 12.753 10.6575C12.84 10.675 12.9297 10.6724 13.0155 10.65L13.3555 10.3117C14.0855 9.58669 15.2055 9.45086 16.1089 9.94169L17.7005 10.8084C19.0647 11.5484 19.4089 13.4017 18.2922 14.5125L17.108 15.6892C16.7347 16.06 16.233 16.3692 15.6214 16.4267C14.113 16.5675 10.5989 16.3875 6.9047 12.715C3.4572 9.28669 2.79553 6.29669 2.71136 4.82336C2.6697 4.07836 3.02136 3.44836 3.4697 3.00336L4.7772 1.70252ZM7.31053 2.75752C6.88803 2.19336 6.10136 2.14836 5.65803 2.58919L4.3497 3.88919C4.0747 4.16252 3.94303 4.46419 3.9597 4.75252C4.02636 5.92336 4.5597 8.62086 7.78636 11.8292C11.1714 15.1942 14.2972 15.295 15.5055 15.1817C15.7522 15.1592 15.9972 15.0309 16.2264 14.8034L17.4097 13.6259C17.8914 13.1475 17.7855 12.2759 17.1039 11.9059L15.5122 11.04C15.0722 10.8017 14.5572 10.88 14.2372 11.1984L13.858 11.5759L13.4164 11.1325C13.858 11.5759 13.8572 11.5767 13.8564 11.5767L13.8555 11.5784L13.853 11.5809L13.8472 11.5859L13.8347 11.5975C13.7995 11.6302 13.7616 11.6597 13.7214 11.6859C13.6547 11.73 13.5664 11.7792 13.4555 11.82C13.2305 11.9042 12.9322 11.9492 12.5639 11.8925C11.8414 11.7817 10.8839 11.2892 9.61136 10.0242C8.3397 8.75919 7.84303 7.80752 7.73136 7.08586C7.67386 6.71752 7.7197 6.41919 7.8047 6.19419C7.85148 6.06758 7.91846 5.94938 8.00303 5.84419L8.0297 5.81502L8.04136 5.80252L8.04636 5.79752L8.04886 5.79502L8.05053 5.79336L8.29053 5.55502C8.6472 5.19919 8.6972 4.61002 8.36136 4.16086L7.31053 2.75752Z" fill-rule="evenodd" clip-rule="evenodd" fill="#0A84FF" />
              </svg>
              Phone
            </p>
            <p className='text-[#B3B3B2]'>(469) 712-4672</p>
            <br />
            <p className='flex items-center gap-3'>
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.48957 2.44757C3.60731 1.35219 5.11217 0.742172 6.67715 0.750076C8.24212 0.75798 9.74074 1.38317 10.8474 2.48979C11.954 3.5964 12.5792 5.09503 12.5871 6.66C12.595 8.22497 11.985 9.72984 10.8896 10.8476L7.75007 13.9871C7.46878 14.2683 7.08732 14.4263 6.68957 14.4263C6.29182 14.4263 5.91036 14.2683 5.62907 13.9871L2.48957 10.8476C1.37574 9.73362 0.75 8.22285 0.75 6.64757C0.75 5.07229 1.37574 3.56152 2.48957 2.44757Z" stroke-width="1.5" stroke-linejoin="round" stroke="#0A84FF" />
                <path d="M8.93945 6.64758C8.93945 7.89022 7.93209 8.89758 6.68945 8.89758C5.44681 8.89758 4.43945 7.89022 4.43945 6.64758C4.43945 5.40494 5.44681 4.39758 6.68945 4.39758C7.93209 4.39758 8.93945 5.40494 8.93945 6.64758Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#0A84FF" />
              </svg>

              Office
            </p>
            <p className='text-[#B3B3B2]'>5511 Parkcrest Dr, Suite 103</p>
            <p className='text-[#B3B3B2]'>Austin, TX 78731</p>
            <p className='text-[#B3B3B2]'>United States</p>
          </div>
          <br />
          <div className='bg-[#1A1A1A] p-5 text-white rounded-2xl '>
            <p className='font-bold'>Contact Information</p>
            <br />
            <p className=' text-start text-[14px]'>Want to discuss your project in detail? Schedule a free 30-minute consultation <br /> with our team of experts. We'll help you understand how our solutions can <br /> benefit your business.</p>
           <br />
            <button className='bg-[#0A84FF] w-full py-1 rounded-lg cursor-pointer font-[500]'>Submit Application</button>
          </div>

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

export default Contact