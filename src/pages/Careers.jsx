import React from 'react'
import imgBag from "@/images/calogo1 2.png"
import { Link, Outlet } from 'react-router'
import Logo from "@/images/Logo (1).png"
import clubContainer from "@/images/Sub Container.png"


const Careers = () => {
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
          <img src={imgBag} alt="" />
        </div>
      </div>
      <br /> <br />
      <div className='flex justify-between'>
        <select className='bg-[#141414] text-white px-5 py-2 rounded-2xl cursor-pointer text-[14px]'>
          <option>Departments</option>
        </select>
        <select className='bg-[#141414] text-white px-5 py-2 rounded-2xl cursor-pointer text-[14px]'>
          <option>Experience</option>
        </select>
        <select className='bg-[#141414] text-white px-5 py-2 rounded-2xl cursor-pointer text-[14px]'>
          <option>Job Type</option>
        </select>
        <select className='bg-[#141414] text-white px-5 py-2 rounded-2xl cursor-pointer text-[14px]'>
          <option>Workplace Type</option>
        </select>
        <div className='bg-[#141414] text-white w-60 px-5 py-1 rounded-2xl  text-[14px] flex justify-between items-center'>
          <input className=' outline-none  w-full' placeholder='Search by keywords...' />
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#459CF3" />
            <g clip-path="url(#clip0_31_17484)">
              <path d="M22.893 22.92L25.973 26M25 17.5C25 19.4891 24.2098 21.3968 22.8033 22.8033C21.3968 24.2098 19.4891 25 17.5 25C15.5109 25 13.6032 24.2098 12.1967 22.8033C10.7902 21.3968 10 19.4891 10 17.5C10 15.5109 10.7902 13.6032 12.1967 12.1967C13.6032 10.7902 15.5109 10 17.5 10C19.4891 10 21.3968 10.7902 22.8033 12.1967C24.2098 13.6032 25 15.5109 25 17.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="white" />
            </g>
            <defs>
              <clipPath id="clip0_31_17484">
                <rect width="24" height="24" fill="white" transform="translate(6 6)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <br /> <br />
      <p className='text-white font-bold text-2xl'>Open Positions</p>
      <br />
      <div className='flex flex-wrap items-center justify-center   gap-6'>

        <div className='p-8 text-white bg-[#141414] w-100 text-start rounded-2xl'>
          <p className='  flex items-center justify-start gap-3 text-xl font-bold'><svg width="70" height="70" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="70" height="70" rx="11.5" fill="#1F1F1F" />
            <rect x="0.5" y="0.5" width="70" height="70" rx="11.5" stroke="#333333" />
            <path d="M34.5086 28.1502L45.8499 39.4915C46.7041 40.3456 48.0889 40.3456 48.943 39.4915C49.7971 38.6374 49.7971 37.2525 48.943 36.3984L47.3965 34.8519L49.4585 32.7898C51.7362 30.5121 51.7362 26.8193 49.4585 24.5416C47.1808 22.2639 43.488 22.2639 41.2103 24.5416L39.1482 26.6036L37.6017 25.0571C36.7476 24.203 35.3627 24.203 34.5086 25.0571C33.6545 25.9112 33.6545 27.296 34.5086 28.1502Z" fill="#0A84FF" />
            <path d="M34.5525 31.1993L26.6711 39.0808C26.0251 39.7268 25.7021 40.0498 25.4971 40.4367C25.3603 40.6947 25.2631 40.9719 25.2087 41.2588C25.1271 41.689 25.1775 42.143 25.2784 43.051L25.3532 43.7244C25.3807 43.9721 25.3945 44.096 25.398 44.2149C25.419 44.9352 25.1725 45.6378 24.7061 46.1872C24.6292 46.2778 24.541 46.366 24.3648 46.5422L23.4741 47.4329C22.62 48.287 22.62 49.6719 23.4741 50.526C24.3282 51.3801 25.7131 51.3801 26.5672 50.526L27.4579 49.6353C27.6341 49.459 27.7223 49.3709 27.8129 49.294C28.3623 48.8276 29.0649 48.5811 29.7852 48.6021C29.9041 48.6056 30.0279 48.6194 30.2757 48.6469L30.9491 48.7217C31.857 48.8226 32.311 48.873 32.7413 48.7914C33.0282 48.737 33.3054 48.6398 33.5634 48.503C33.9503 48.298 34.2733 47.975 34.9193 47.329L36.9571 45.2911L34.3314 42.6653C33.9164 42.2504 33.9164 41.5777 34.3314 41.1627C34.7463 40.7478 35.4191 40.7478 35.834 41.1627L38.4598 43.7885L39.7904 42.4577L37.1647 39.832C36.7498 39.4171 36.7498 38.7443 37.1647 38.3294C37.5796 37.9145 38.2524 37.9145 38.6673 38.3294L41.2931 40.9552L42.8008 39.4476L34.5525 31.1993Z" fill="#0A84FF" />
          </svg>
            Web Designer</p>
          <br />
          <p className='bg-[#1F1F1F] text-[14px] rounded-lg w-60 px-5 text-[#B3B3B2]'>Salary <span className='text-[#0A84FF]'>•</span> <span className='text-white'>$45,000 - $60,000 per year</span></p>
          <div className='mt-3 flex gap-4'>
            <p className='bg-[#1F1F1F] text-[14px] rounded-lg w-40 px-2 text-[#B3B3B2]'>Experience <span className='text-[#0A84FF]'>•</span> <span className='text-white'>1+ year</span></p>
            <p className='bg-[#1F1F1F] text-[14px] rounded-lg w-45 px-2 text-[#B3B3B2]'>Deadline <span className='text-[#0A84FF]'>•</span> <span className='text-white'>30/09/2025</span></p>
          </div>
          <br />
          <p>Skills</p>
          <p className='text-[13px] text-[#B3B3B2]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), <br /> strong understanding of UI/UX design principles, responsive <br /> design expertise.</p>
          <br />
          <button className='bg-[#0A84FF] w-full py-1 rounded-lg cursor-pointer font-[500]'>Apply Now</button>
        </div>

        <div className='p-8 text-white bg-[#141414] w-100 text-start rounded-2xl'>
          <p className='  flex items-center justify-start gap-3 text-xl font-bold'>
            <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="73" height="73" rx="11.5" fill="#1F1F1F" />
              <rect x="0.5" y="0.5" width="73" height="73" rx="11.5" stroke="#333333" />
              <path d="M27.3262 24.493C25.6665 26.1528 25.6665 28.8241 25.6665 34.1666V39.8333C25.6665 45.1759 25.6665 47.8472 27.3262 49.5069C28.986 51.1666 31.6573 51.1666 36.9998 51.1666C42.3424 51.1666 45.0137 51.1666 46.6734 49.5069C48.3332 47.8472 48.3332 45.1759 48.3332 39.8333V34.1666C48.3332 28.8241 48.3332 26.1528 46.6734 24.493C45.0137 22.8333 42.3424 22.8333 36.9998 22.8333C31.6573 22.8333 28.986 22.8333 27.3262 24.493ZM32.7498 26.0208C32.163 26.0208 31.6873 26.4965 31.6873 27.0833C31.6873 27.6701 32.163 28.1458 32.7498 28.1458H41.2498C41.8366 28.1458 42.3123 27.6701 42.3123 27.0833C42.3123 26.4965 41.8366 26.0208 41.2498 26.0208H32.7498ZM36.9998 46.9166C38.5646 46.9166 39.8332 45.6481 39.8332 44.0833C39.8332 42.5185 38.5646 41.25 36.9998 41.25C35.435 41.25 34.1665 42.5185 34.1665 44.0833C34.1665 45.6481 35.435 46.9166 36.9998 46.9166Z" fill-rule="evenodd" clip-rule="evenodd" fill="#0A84FF" />
            </svg>

            Mobile App Developer</p>
          <br />
          <p className='bg-[#1F1F1F] text-[14px] rounded-lg w-60 px-5 text-[#B3B3B2]'>Salary <span className='text-[#0A84FF]'>•</span> <span className='text-white'>$45,000 - $60,000 per year</span></p>
          <div className='mt-3 flex gap-4'>
            <p className='bg-[#1F1F1F] text-[14px] rounded-lg w-40 px-2 text-[#B3B3B2]'>Experience <span className='text-[#0A84FF]'>•</span> <span className='text-white'>1+ year</span></p>
            <p className='bg-[#1F1F1F] text-[14px] rounded-lg w-45 px-2 text-[#B3B3B2]'>Deadline <span className='text-[#0A84FF]'>•</span> <span className='text-white'>30/09/2025</span></p>
          </div>
          <br />
          <p>Skills</p>
          <p className='text-[13px] text-[#B3B3B2]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), <br /> strong understanding of UI/UX design principles, responsive <br /> design expertise.</p>
          <br />
          <button className='bg-[#0A84FF] w-full py-1 rounded-lg cursor-pointer font-[500]'>Apply Now</button>
        </div>

        <div className='p-8 text-white bg-[#141414] w-100 text-start rounded-2xl'>
          <p className='  flex items-center justify-start gap-3 text-xl font-bold'>
            <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="73" height="73" rx="11.5" fill="#1F1F1F" />
              <rect x="0.5" y="0.5" width="73" height="73" rx="11.5" stroke="#333333" />
              <path d="M22.8335 29.2084C22.8335 25.6876 25.6877 22.8334 29.2085 22.8334C32.7293 22.8334 35.5835 25.6876 35.5835 29.2084V33.4584C35.5835 33.9524 35.5835 34.1994 35.5292 34.4021C35.3818 34.9521 34.9522 35.3817 34.4022 35.5291C34.1996 35.5834 33.9525 35.5834 33.4585 35.5834H29.2085C25.6877 35.5834 22.8335 32.7292 22.8335 29.2084Z" fill="#0A84FF" />
              <path d="M38.4168 40.5417C38.4168 40.0477 38.4168 39.8006 38.4711 39.598C38.6185 39.048 39.0481 38.6184 39.5981 38.471C39.8008 38.4167 40.0478 38.4167 40.5418 38.4167H44.7918C48.3126 38.4167 51.1668 41.2709 51.1668 44.7917C51.1668 48.3125 48.3126 51.1667 44.7918 51.1667C41.271 51.1667 38.4168 48.3125 38.4168 44.7917V40.5417Z" fill="#0A84FF" />
              <path d="M22.8335 44.7917C22.8335 41.2709 25.6877 38.4167 29.2085 38.4167H33.0335C33.9261 38.4167 34.3724 38.4167 34.7133 38.5904C35.0132 38.7432 35.257 38.987 35.4098 39.2869C35.5835 39.6278 35.5835 40.0741 35.5835 40.9667V44.7917C35.5835 48.3125 32.7293 51.1667 29.2085 51.1667C25.6877 51.1667 22.8335 48.3125 22.8335 44.7917Z" fill="#0A84FF" />
              <path d="M38.4168 29.2084C38.4168 25.6876 41.271 22.8334 44.7918 22.8334C48.3126 22.8334 51.1668 25.6876 51.1668 29.2084C51.1668 32.7292 48.3126 35.5834 44.7918 35.5834H40.2383C40.0268 35.5834 39.9211 35.5834 39.8321 35.5734C39.0932 35.4901 38.5101 34.907 38.4269 34.1681C38.4168 34.0791 38.4168 33.9734 38.4168 33.7619V29.2084Z" fill="#0A84FF" />
            </svg>

            Digital Marketing Specialist</p>
          <br />
          <p className='bg-[#1F1F1F] text-[14px] rounded-lg w-60 px-5 text-[#B3B3B2]'>Salary <span className='text-[#0A84FF]'>•</span> <span className='text-white'>$45,000 - $60,000 per year</span></p>
          <div className='mt-3 flex gap-4'>
            <p className='bg-[#1F1F1F] text-[14px] rounded-lg w-40 px-2 text-[#B3B3B2]'>Experience <span className='text-[#0A84FF]'>•</span> <span className='text-white'>1+ year</span></p>
            <p className='bg-[#1F1F1F] text-[14px] rounded-lg w-45 px-2 text-[#B3B3B2]'>Deadline <span className='text-[#0A84FF]'>•</span> <span className='text-white'>30/09/2025</span></p>
          </div>
          <br />
          <p>Skills</p>
          <p className='text-[13px] text-[#B3B3B2]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), <br /> strong understanding of UI/UX design principles, responsive <br /> design expertise.</p>
          <br />
          <button className='bg-[#0A84FF] w-full py-1 rounded-lg cursor-pointer font-[500]'>Apply Now</button>
        </div>

        <div className='p-8 text-white bg-[#141414] w-100 text-start rounded-2xl'>
          <p className='  flex items-center justify-start gap-3 text-xl font-bold'>
            <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="73" height="73" rx="11.5" fill="#1F1F1F" />
              <rect x="0.5" y="0.5" width="73" height="73" rx="11.5" stroke="#333333" />
              <path d="M37.0738 21.7709H36.9265C35.6537 21.7708 34.5923 21.7708 33.7497 21.8841C32.8603 22.0037 32.0573 22.2667 31.4121 22.9119C30.7668 23.5572 30.5038 24.3602 30.3842 25.2495C30.2709 26.0921 30.271 27.1535 30.271 28.4264V28.5365C27.4077 28.6302 25.6882 28.9648 24.4932 30.1598C22.8335 31.8195 22.8335 34.4908 22.8335 39.8334C22.8335 45.176 22.8335 47.8473 24.4932 49.507C26.153 51.1667 28.8242 51.1667 34.1668 51.1667H39.8335C45.1761 51.1667 47.8474 51.1667 49.5071 49.507C51.1668 47.8473 51.1668 45.176 51.1668 39.8334C51.1668 34.4908 51.1668 31.8195 49.5071 30.1598C48.3121 28.9648 46.5927 28.6302 43.7293 28.5365V28.4264C43.7294 27.1536 43.7294 26.0921 43.6161 25.2495C43.4966 24.3602 43.2335 23.5572 42.5883 22.9119C41.943 22.2667 41.1401 22.0037 40.2507 21.8841C39.4081 21.7708 38.3467 21.7708 37.0738 21.7709ZM41.6043 28.5027V28.5C41.6043 27.1344 41.6021 26.217 41.5101 25.5327C41.4222 24.8789 41.2703 24.5992 41.0857 24.4145C40.9011 24.2299 40.6213 24.078 39.9675 23.9901C39.2832 23.8981 38.3659 23.8959 37.0002 23.8959C35.6345 23.8959 34.7171 23.8981 34.0328 23.9901C33.3791 24.078 33.0993 24.2299 32.9147 24.4145C32.7301 24.5992 32.5782 24.8789 32.4903 25.5327C32.3983 26.217 32.396 27.1344 32.396 28.5V28.5027C32.9514 28.5 33.5408 28.5 34.1668 28.5H39.8335C40.4596 28.5 41.049 28.5 41.6043 28.5027ZM44.0835 32.75C44.0835 33.5324 43.4492 34.1667 42.6668 34.1667C41.8844 34.1667 41.2502 33.5324 41.2502 32.75C41.2502 31.9676 41.8844 31.3334 42.6668 31.3334C43.4492 31.3334 44.0835 31.9676 44.0835 32.75ZM31.3335 34.1667C32.1159 34.1667 32.7502 33.5324 32.7502 32.75C32.7502 31.9676 32.1159 31.3334 31.3335 31.3334C30.5511 31.3334 29.9168 31.9676 29.9168 32.75C29.9168 33.5324 30.5511 34.1667 31.3335 34.1667Z" fill-rule="evenodd" clip-rule="evenodd" fill="#0A84FF" />
            </svg>

            Project Manager</p>
          <br />
          <p className='bg-[#1F1F1F] text-[14px] rounded-lg w-60 px-5 text-[#B3B3B2]'>Salary <span className='text-[#0A84FF]'>•</span> <span className='text-white'>$45,000 - $60,000 per year</span></p>
          <div className='mt-3 flex gap-4'>
            <p className='bg-[#1F1F1F] text-[14px] rounded-lg w-40 px-2 text-[#B3B3B2]'>Experience <span className='text-[#0A84FF]'>•</span> <span className='text-white'>1+ year</span></p>
            <p className='bg-[#1F1F1F] text-[14px] rounded-lg w-45 px-2 text-[#B3B3B2]'>Deadline <span className='text-[#0A84FF]'>•</span> <span className='text-white'>30/09/2025</span></p>
          </div>
          <br />
          <p>Skills</p>
          <p className='text-[13px] text-[#B3B3B2]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), <br /> strong understanding of UI/UX design principles, responsive <br /> design expertise.</p>
          <br />
          <button className='bg-[#0A84FF] w-full py-1 rounded-lg cursor-pointer font-[500]'>Apply Now</button>
        </div>
      </div>
      <br />
      <div className='shadow shadow-[#B3B3B2] rounded-2xl py-2 w-[90%] m-auto'>
      <p className='font-bold text-3xl text-white'>Ready to discuss</p>
      <br />
      <p className='text-white'>your product needs with <span className='font-black text-[#0A84FF]'> Catalyst Analytic </span> experts?</p>
      <br />
      <button className='text-[14px] bg-[#0A84FF] px-5 py-1 rounded-lg cursor-pointer text-white'>
        Get In Touch
      </button>
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

export default Careers