import React from 'react'
import imgServise from "@/images/Screenshot_85.png"
import imgAi from "@/images/72355892508 1 (3).png"
import img_1 from "@/images/72355892508 1 (4).png"
import img_2 from "@/images/72355892508 1 (5).png"
import img_3 from "@/images/72355892508 1 (6).png"
import img_4 from "@/images/72355892508 1 (7).png"
import img_5 from "@/images/72355892508 1 (8).png"
import Logo from "@/images/Logo (1).png"
import { Link, Outlet } from 'react-router'
import clubContainer from "@/images/Sub Container.png"


const Services = () => {
  return (
    <div className='pt-20 bg-[#030303] px-10'>
      <div className='bg-[#141414] flex px-8 rounded-2xl gap-10 items-center justify-center'>
        <div>
          <p className='text-2xl font-bold text-white'>Our Comprehensive  <span className='text-[#0A84FF] font-black'>Digital Solutions</span></p>
          <br />
          <p className='text-[13px] text-white text-start'>At Catalyst Analytics, we offer a comprehensive suite of digital solutions designed to propel <br /> your business to new heights in the digital realm. With a team of skilled professionals, <br /> cutting-edge technologies, and a passion for innovation, we are committed to delivering <br /> exceptional results for every project we undertake. From captivating web design that <br /> leaves a lasting impression to seamless web development that ensures optimal <br /> functionality, we cover every aspect of your online presence.</p>
        </div>
        <div>
          <img src={imgServise} alt="" className='object-cover w-60 h-60' />
        </div>
      </div>
      <br /> <br />
      <p className='text-white font-[600] text-2xl'>Our Services</p>
      <br />
      <p className='text-white'>Comprehensive AI, blockchain, and analytics solutions powered by deep expertise in machine <br /> learning and data engineering</p>
      <br /> <br />

      <div className='flex flex-wrap items-center justify-center   gap-6'>
        <div className='flex flex-col items-center bg-[#141414] px-8 py-3 rounded-3xl w-110'>
          <div>
            <img src={imgAi} alt="" className='w-35 object-cover' />
          </div>
          <p className='text-white text-xl font-bold'> Machine Learning Solutions </p>
          <br />
          <p className='text-white text-[13px]'> Custom ML models designed and optimized for your specific business <br /> challenges, leveraging cutting-edge deep learning techniques. </p>
          <br />
          <div className='flex text-start gap-5'>
            <div>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Deep learning model development</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Computer vision solutions</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Model optimization and scaling</p>
            </div>
            <div>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Neural network architecture design</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Natural language processing</p>
            </div>
          </div>
          <br />
          <button className='text-white flex items-center justify-center gap-4 border border-[#459CF3] rounded-4xl px-2 py-2 cursor-pointer'> <svg width="52" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="36" rx="18" fill="#459CF3" />
            <path d="M19.3335 18C19.3335 17.4201 19.7902 16.95 20.3535 16.95H29.3811L26.4465 14.2069C26.0405 13.805 26.0278 13.1403 26.4182 12.7223C26.8087 12.3043 27.4544 12.2912 27.8605 12.6932L32.6205 17.2431C32.8205 17.4411 32.9335 17.7144 32.9335 18C32.9335 18.2856 32.8205 18.5589 32.6205 18.7569L27.8605 23.3069C27.4544 23.7088 26.8087 23.6958 26.4182 23.2778C26.0278 22.8598 26.0405 22.1951 26.4465 21.7931L29.3811 19.05H20.3535C19.7902 19.05 19.3335 18.5799 19.3335 18Z" fill-rule="evenodd" clip-rule="evenodd" fill="white" />
          </svg>
            Book a Call</button>

        </div>

        <div className='flex flex-col items-center bg-[#141414] px-8 py-3 rounded-3xl w-110'>
          <div>
            <img src={img_1} alt="" className='w-35 object-cover' />
          </div>
          <p className='text-white text-xl font-bold'> Machine Learning Solutions </p>
          <br />
          <p className='text-white text-[13px]'> Custom ML models designed and optimized for your specific business <br /> challenges, leveraging cutting-edge deep learning techniques. </p>
          <br />
          <div className='flex text-start gap-5'>
            <div>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Deep learning model development</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Computer vision solutions</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Model optimization and scaling</p>
            </div>
            <div>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Neural network architecture design</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Natural language processing</p>
            </div>
          </div>
          <br />
          <button className='text-white flex items-center justify-center gap-4 border border-[#459CF3] rounded-4xl px-2 py-2 cursor-pointer'>
            Book a Call
            <svg width="52" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="52" height="36" rx="18" fill="#459CF3" />
              <path d="M19.3335 18C19.3335 17.4201 19.7902 16.95 20.3535 16.95H29.3811L26.4465 14.2069C26.0405 13.805 26.0278 13.1403 26.4182 12.7223C26.8087 12.3043 27.4544 12.2912 27.8605 12.6932L32.6205 17.2431C32.8205 17.4411 32.9335 17.7144 32.9335 18C32.9335 18.2856 32.8205 18.5589 32.6205 18.7569L27.8605 23.3069C27.4544 23.7088 26.8087 23.6958 26.4182 23.2778C26.0278 22.8598 26.0405 22.1951 26.4465 21.7931L29.3811 19.05H20.3535C19.7902 19.05 19.3335 18.5799 19.3335 18Z" fill-rule="evenodd" clip-rule="evenodd" fill="white" />
            </svg> </button>
        </div>

        <div className='flex flex-col items-center bg-[#141414] px-8 py-3 rounded-3xl w-110'>
          <div>
            <img src={img_2} alt="" className='w-35 object-cover' />
          </div>
          <p className='text-white text-xl font-bold'> Machine Learning Solutions </p>
          <br />
          <p className='text-white text-[13px]'> Custom ML models designed and optimized for your specific business <br /> challenges, leveraging cutting-edge deep learning techniques. </p>
          <br />
          <div className='flex text-start gap-5'>
            <div>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Deep learning model development</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Computer vision solutions</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Model optimization and scaling</p>
            </div>
            <div>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Neural network architecture design</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Natural language processing</p>
            </div>
          </div>
          <br />
          <button className='text-white flex items-center justify-center gap-4 border border-[#459CF3] rounded-4xl px-2 py-2 cursor-pointer'> <svg width="52" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="36" rx="18" fill="#459CF3" />
            <path d="M19.3335 18C19.3335 17.4201 19.7902 16.95 20.3535 16.95H29.3811L26.4465 14.2069C26.0405 13.805 26.0278 13.1403 26.4182 12.7223C26.8087 12.3043 27.4544 12.2912 27.8605 12.6932L32.6205 17.2431C32.8205 17.4411 32.9335 17.7144 32.9335 18C32.9335 18.2856 32.8205 18.5589 32.6205 18.7569L27.8605 23.3069C27.4544 23.7088 26.8087 23.6958 26.4182 23.2778C26.0278 22.8598 26.0405 22.1951 26.4465 21.7931L29.3811 19.05H20.3535C19.7902 19.05 19.3335 18.5799 19.3335 18Z" fill-rule="evenodd" clip-rule="evenodd" fill="white" />
          </svg>
            Book a Call</button>
        </div>

        <div className='flex flex-col items-center bg-[#141414] px-8 py-3 rounded-3xl w-110'>
          <div>
            <img src={img_3} alt="" className='w-35 object-cover' />
          </div>
          <p className='text-white text-xl font-bold'> Machine Learning Solutions </p>
          <br />
          <p className='text-white text-[13px]'> Custom ML models designed and optimized for your specific business <br /> challenges, leveraging cutting-edge deep learning techniques. </p>
          <br />
          <div className='flex text-start gap-5'>
            <div>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Deep learning model development</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Computer vision solutions</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Model optimization and scaling</p>
            </div>
            <div>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Neural network architecture design</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Natural language processing</p>
            </div>
          </div>
          <br />
          <button className='text-white flex items-center justify-center gap-4 border border-[#459CF3] rounded-4xl px-2 py-2 cursor-pointer'> <svg width="52" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="36" rx="18" fill="#459CF3" />
            <path d="M19.3335 18C19.3335 17.4201 19.7902 16.95 20.3535 16.95H29.3811L26.4465 14.2069C26.0405 13.805 26.0278 13.1403 26.4182 12.7223C26.8087 12.3043 27.4544 12.2912 27.8605 12.6932L32.6205 17.2431C32.8205 17.4411 32.9335 17.7144 32.9335 18C32.9335 18.2856 32.8205 18.5589 32.6205 18.7569L27.8605 23.3069C27.4544 23.7088 26.8087 23.6958 26.4182 23.2778C26.0278 22.8598 26.0405 22.1951 26.4465 21.7931L29.3811 19.05H20.3535C19.7902 19.05 19.3335 18.5799 19.3335 18Z" fill-rule="evenodd" clip-rule="evenodd" fill="white" />
          </svg>
            Book a Call</button>
        </div>

        <div className='flex flex-col items-center bg-[#141414] px-8 py-3 rounded-3xl w-110'>
          <div>
            <img src={img_4} alt="" className='w-35 object-cover' />
          </div>
          <p className='text-white text-xl font-bold'> Machine Learning Solutions </p>
          <br />
          <p className='text-white text-[13px]'> Custom ML models designed and optimized for your specific business <br /> challenges, leveraging cutting-edge deep learning techniques. </p>
          <br />
          <div className='flex text-start gap-5'>
            <div>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Deep learning model development</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Computer vision solutions</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Model optimization and scaling</p>
            </div>
            <div>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Neural network architecture design</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Natural language processing</p>
            </div>
          </div>
          <br />
          <button className='text-white flex items-center justify-center gap-4 border border-[#459CF3] rounded-4xl px-2 py-2 cursor-pointer'> <svg width="52" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="36" rx="18" fill="#459CF3" />
            <path d="M19.3335 18C19.3335 17.4201 19.7902 16.95 20.3535 16.95H29.3811L26.4465 14.2069C26.0405 13.805 26.0278 13.1403 26.4182 12.7223C26.8087 12.3043 27.4544 12.2912 27.8605 12.6932L32.6205 17.2431C32.8205 17.4411 32.9335 17.7144 32.9335 18C32.9335 18.2856 32.8205 18.5589 32.6205 18.7569L27.8605 23.3069C27.4544 23.7088 26.8087 23.6958 26.4182 23.2778C26.0278 22.8598 26.0405 22.1951 26.4465 21.7931L29.3811 19.05H20.3535C19.7902 19.05 19.3335 18.5799 19.3335 18Z" fill-rule="evenodd" clip-rule="evenodd" fill="white" />
          </svg>
            Book a Call</button>
        </div>

        <div className='flex flex-col items-center bg-[#141414] px-8 py-3 rounded-3xl w-110'>
          <div>
            <img src={img_5} alt="" className='w-35 object-cover' />
          </div>
          <p className='text-white text-xl font-bold'> Machine Learning Solutions </p>
          <br />
          <p className='text-white text-[13px]'> Custom ML models designed and optimized for your specific business <br /> challenges, leveraging cutting-edge deep learning techniques. </p>
          <br />
          <div className='flex text-start gap-5'>
            <div>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Deep learning model development</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Computer vision solutions</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Model optimization and scaling</p>
            </div>
            <div>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Neural network architecture design</p>
              <p className='text-white text-[12px]'><span className='text-[#0A84FF]'> • </span> Natural language processing</p>
            </div>
          </div>
          <br />
          <button className='text-white flex items-center justify-center gap-4 border border-[#459CF3] rounded-4xl px-2 py-2 cursor-pointer'> <svg width="52" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="36" rx="18" fill="#459CF3" />
            <path d="M19.3335 18C19.3335 17.4201 19.7902 16.95 20.3535 16.95H29.3811L26.4465 14.2069C26.0405 13.805 26.0278 13.1403 26.4182 12.7223C26.8087 12.3043 27.4544 12.2912 27.8605 12.6932L32.6205 17.2431C32.8205 17.4411 32.9335 17.7144 32.9335 18C32.9335 18.2856 32.8205 18.5589 32.6205 18.7569L27.8605 23.3069C27.4544 23.7088 26.8087 23.6958 26.4182 23.2778C26.0278 22.8598 26.0405 22.1951 26.4465 21.7931L29.3811 19.05H20.3535C19.7902 19.05 19.3335 18.5799 19.3335 18Z" fill-rule="evenodd" clip-rule="evenodd" fill="white" />
          </svg>
            Book a Call</button>
        </div>
      </div>
      <br /> <br /> <br />
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

export default Services