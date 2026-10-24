import React from 'react'
import Img from '@/images/image copy.png'
import Img_1 from '@/images/image copy 2.png'
import Img_2 from '@/images/image copy 3.png'
import Img_3 from '@/images/image copy 4.png'
import Img_4 from '@/images/image copy 5.png'
import Img_5 from '@/images/image copy 6.png'
import Img_6 from '@/images/image copy 7.png'
import Footer from './Footer'
import Todos from './Todos'

const Home = () => {
  return (
    <div className=''>
      <section className='flex items-center justify-between px-30 pb-16 bg-[#FEDAD5] pt-20'>
        <div >
          <p className='text-5xl font-bold w-100 leading-18'>Enjoy studying
            with Createx Online Courses</p>
          <div className='flex gap-5'>
            <button className=' border border-[#FF3F3A] text-[#FF3F3A] px-4 py-2 '>About us</button>
            <button className='bg-[#FF3F3A] text-white px-4 py-2 '>Explore courses</button>
          </div>
        </div>
        <div>
          <img src={Img} alt="" className='w-120' />
        </div>
      </section>
      <section className='p-30 pb-20 flex gap-30 items-center'>
        <div>
          <img src={Img_1} alt="" className='w-120' />
        </div>
        <div>
          <p className='font-bold text-xl'>Who we are</p>
          <p className='font-bold text-4xl'>Why Createx?</p>
          <br />
          <p className='flex gap-3  w-100'>
            <svg width="25" height="35" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_68699_5204)">
                <path d="M7.99984 15.3327C12.0432 15.3327 15.3332 12.043 15.3332 7.99935C15.3332 7.30141 15.2357 6.61361 15.0428 5.9549C14.9478 5.63099 14.6096 5.44495 14.2848 5.53998C13.9606 5.63472 13.7751 5.97415 13.8698 6.29805C14.0296 6.84531 14.1109 7.41793 14.1109 7.99935C14.1109 11.369 11.3695 14.1105 7.99984 14.1105C4.63022 14.1105 1.88873 11.369 1.88873 7.99935C1.88873 4.62973 4.63022 1.88824 7.99984 1.88824C9.22445 1.88824 10.4027 2.24631 11.4071 2.92352C11.6866 3.11225 12.0668 3.0381 12.2552 2.7585C12.4438 2.47861 12.3703 2.09875 12.0904 1.91017C10.8834 1.0963 9.46898 0.666016 7.99984 0.666016C3.95645 0.666016 0.666504 3.95566 0.666504 7.99935C0.666504 12.043 3.95645 15.3327 7.99984 15.3327Z" fill="#FF3F3A" />
                <path d="M14.8617 1.52787L7.99971 8.38953L5.8044 6.19454C5.54399 5.93429 5.12211 5.93429 4.86169 6.19454C4.60144 6.45496 4.60144 6.87683 4.86169 7.13725L7.52836 9.80391C7.65873 9.93429 7.82898 9.99923 7.99971 9.99923C8.17045 9.99923 8.3407 9.93429 8.47107 9.80391L15.8044 2.47058C16.0647 2.21016 16.0647 1.78829 15.8044 1.52787C15.544 1.26762 15.1221 1.26762 14.8617 1.52787Z" fill="#FF3F3A" />
              </g>
              <defs>
                <clipPath id="clip0_68699_5204">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            A fermentum in morbi pretium aliquam adipiscing donec tempus.
          </p>
          <br />
          <p className='flex gap-3  w-100'>
            <svg width="20" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_68699_5204)">
                <path d="M7.99984 15.3327C12.0432 15.3327 15.3332 12.043 15.3332 7.99935C15.3332 7.30141 15.2357 6.61361 15.0428 5.9549C14.9478 5.63099 14.6096 5.44495 14.2848 5.53998C13.9606 5.63472 13.7751 5.97415 13.8698 6.29805C14.0296 6.84531 14.1109 7.41793 14.1109 7.99935C14.1109 11.369 11.3695 14.1105 7.99984 14.1105C4.63022 14.1105 1.88873 11.369 1.88873 7.99935C1.88873 4.62973 4.63022 1.88824 7.99984 1.88824C9.22445 1.88824 10.4027 2.24631 11.4071 2.92352C11.6866 3.11225 12.0668 3.0381 12.2552 2.7585C12.4438 2.47861 12.3703 2.09875 12.0904 1.91017C10.8834 1.0963 9.46898 0.666016 7.99984 0.666016C3.95645 0.666016 0.666504 3.95566 0.666504 7.99935C0.666504 12.043 3.95645 15.3327 7.99984 15.3327Z" fill="#FF3F3A" />
                <path d="M14.8617 1.52787L7.99971 8.38953L5.8044 6.19454C5.54399 5.93429 5.12211 5.93429 4.86169 6.19454C4.60144 6.45496 4.60144 6.87683 4.86169 7.13725L7.52836 9.80391C7.65873 9.93429 7.82898 9.99923 7.99971 9.99923C8.17045 9.99923 8.3407 9.93429 8.47107 9.80391L15.8044 2.47058C16.0647 2.21016 16.0647 1.78829 15.8044 1.52787C15.544 1.26762 15.1221 1.26762 14.8617 1.52787Z" fill="#FF3F3A" />
              </g>
              <defs>
                <clipPath id="clip0_68699_5204">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Vulputate placerat amet pulvinar lorem nisl.
          </p>
          <br />
          <p className='flex gap-3  w-100'>
            <svg width="30" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_68699_5204)">
                <path d="M7.99984 15.3327C12.0432 15.3327 15.3332 12.043 15.3332 7.99935C15.3332 7.30141 15.2357 6.61361 15.0428 5.9549C14.9478 5.63099 14.6096 5.44495 14.2848 5.53998C13.9606 5.63472 13.7751 5.97415 13.8698 6.29805C14.0296 6.84531 14.1109 7.41793 14.1109 7.99935C14.1109 11.369 11.3695 14.1105 7.99984 14.1105C4.63022 14.1105 1.88873 11.369 1.88873 7.99935C1.88873 4.62973 4.63022 1.88824 7.99984 1.88824C9.22445 1.88824 10.4027 2.24631 11.4071 2.92352C11.6866 3.11225 12.0668 3.0381 12.2552 2.7585C12.4438 2.47861 12.3703 2.09875 12.0904 1.91017C10.8834 1.0963 9.46898 0.666016 7.99984 0.666016C3.95645 0.666016 0.666504 3.95566 0.666504 7.99935C0.666504 12.043 3.95645 15.3327 7.99984 15.3327Z" fill="#FF3F3A" />
                <path d="M14.8617 1.52787L7.99971 8.38953L5.8044 6.19454C5.54399 5.93429 5.12211 5.93429 4.86169 6.19454C4.60144 6.45496 4.60144 6.87683 4.86169 7.13725L7.52836 9.80391C7.65873 9.93429 7.82898 9.99923 7.99971 9.99923C8.17045 9.99923 8.3407 9.93429 8.47107 9.80391L15.8044 2.47058C16.0647 2.21016 16.0647 1.78829 15.8044 1.52787C15.544 1.26762 15.1221 1.26762 14.8617 1.52787Z" fill="#FF3F3A" />
              </g>
              <defs>
                <clipPath id="clip0_68699_5204">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
          </p>
          <br />
          <p className='flex gap-3  w-100'>
            <svg width="20" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_68699_5204)">
                <path d="M7.99984 15.3327C12.0432 15.3327 15.3332 12.043 15.3332 7.99935C15.3332 7.30141 15.2357 6.61361 15.0428 5.9549C14.9478 5.63099 14.6096 5.44495 14.2848 5.53998C13.9606 5.63472 13.7751 5.97415 13.8698 6.29805C14.0296 6.84531 14.1109 7.41793 14.1109 7.99935C14.1109 11.369 11.3695 14.1105 7.99984 14.1105C4.63022 14.1105 1.88873 11.369 1.88873 7.99935C1.88873 4.62973 4.63022 1.88824 7.99984 1.88824C9.22445 1.88824 10.4027 2.24631 11.4071 2.92352C11.6866 3.11225 12.0668 3.0381 12.2552 2.7585C12.4438 2.47861 12.3703 2.09875 12.0904 1.91017C10.8834 1.0963 9.46898 0.666016 7.99984 0.666016C3.95645 0.666016 0.666504 3.95566 0.666504 7.99935C0.666504 12.043 3.95645 15.3327 7.99984 15.3327Z" fill="#FF3F3A" />
                <path d="M14.8617 1.52787L7.99971 8.38953L5.8044 6.19454C5.54399 5.93429 5.12211 5.93429 4.86169 6.19454C4.60144 6.45496 4.60144 6.87683 4.86169 7.13725L7.52836 9.80391C7.65873 9.93429 7.82898 9.99923 7.99971 9.99923C8.17045 9.99923 8.3407 9.93429 8.47107 9.80391L15.8044 2.47058C16.0647 2.21016 16.0647 1.78829 15.8044 1.52787C15.544 1.26762 15.1221 1.26762 14.8617 1.52787Z" fill="#FF3F3A" />
              </g>
              <defs>
                <clipPath id="clip0_68699_5204">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Etiam duis lobortis in fames ultrices commodo nibh.
          </p>
          <br />
          <p className='flex gap-3  w-100'>
            <svg width="20" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_68699_5204)">
                <path d="M7.99984 15.3327C12.0432 15.3327 15.3332 12.043 15.3332 7.99935C15.3332 7.30141 15.2357 6.61361 15.0428 5.9549C14.9478 5.63099 14.6096 5.44495 14.2848 5.53998C13.9606 5.63472 13.7751 5.97415 13.8698 6.29805C14.0296 6.84531 14.1109 7.41793 14.1109 7.99935C14.1109 11.369 11.3695 14.1105 7.99984 14.1105C4.63022 14.1105 1.88873 11.369 1.88873 7.99935C1.88873 4.62973 4.63022 1.88824 7.99984 1.88824C9.22445 1.88824 10.4027 2.24631 11.4071 2.92352C11.6866 3.11225 12.0668 3.0381 12.2552 2.7585C12.4438 2.47861 12.3703 2.09875 12.0904 1.91017C10.8834 1.0963 9.46898 0.666016 7.99984 0.666016C3.95645 0.666016 0.666504 3.95566 0.666504 7.99935C0.666504 12.043 3.95645 15.3327 7.99984 15.3327Z" fill="#FF3F3A" />
                <path d="M14.8617 1.52787L7.99971 8.38953L5.8044 6.19454C5.54399 5.93429 5.12211 5.93429 4.86169 6.19454C4.60144 6.45496 4.60144 6.87683 4.86169 7.13725L7.52836 9.80391C7.65873 9.93429 7.82898 9.99923 7.99971 9.99923C8.17045 9.99923 8.3407 9.93429 8.47107 9.80391L15.8044 2.47058C16.0647 2.21016 16.0647 1.78829 15.8044 1.52787C15.544 1.26762 15.1221 1.26762 14.8617 1.52787Z" fill="#FF3F3A" />
              </g>
              <defs>
                <clipPath id="clip0_68699_5204">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Tincidunt sagittis neque sem ac eget.
          </p>
          <br />
          <p className='flex gap-3  w-100'>
            <svg width="25" height="35" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_68699_5204)">
                <path d="M7.99984 15.3327C12.0432 15.3327 15.3332 12.043 15.3332 7.99935C15.3332 7.30141 15.2357 6.61361 15.0428 5.9549C14.9478 5.63099 14.6096 5.44495 14.2848 5.53998C13.9606 5.63472 13.7751 5.97415 13.8698 6.29805C14.0296 6.84531 14.1109 7.41793 14.1109 7.99935C14.1109 11.369 11.3695 14.1105 7.99984 14.1105C4.63022 14.1105 1.88873 11.369 1.88873 7.99935C1.88873 4.62973 4.63022 1.88824 7.99984 1.88824C9.22445 1.88824 10.4027 2.24631 11.4071 2.92352C11.6866 3.11225 12.0668 3.0381 12.2552 2.7585C12.4438 2.47861 12.3703 2.09875 12.0904 1.91017C10.8834 1.0963 9.46898 0.666016 7.99984 0.666016C3.95645 0.666016 0.666504 3.95566 0.666504 7.99935C0.666504 12.043 3.95645 15.3327 7.99984 15.3327Z" fill="#FF3F3A" />
                <path d="M14.8617 1.52787L7.99971 8.38953L5.8044 6.19454C5.54399 5.93429 5.12211 5.93429 4.86169 6.19454C4.60144 6.45496 4.60144 6.87683 4.86169 7.13725L7.52836 9.80391C7.65873 9.93429 7.82898 9.99923 7.99971 9.99923C8.17045 9.99923 8.3407 9.93429 8.47107 9.80391L15.8044 2.47058C16.0647 2.21016 16.0647 1.78829 15.8044 1.52787C15.544 1.26762 15.1221 1.26762 14.8617 1.52787Z" fill="#FF3F3A" />
              </g>
              <defs>
                <clipPath id="clip0_68699_5204">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Ultricies amet justo et eget quisque purus vulputate dapibus tortor.
          </p>
          <br />
          <button className='bg-[#FF3F3A] text-white px-4 py-2 '>More about us</button>
        </div>
      </section>
      <section className='p-30 pb-20'>
        <div className='flex justify-between items-end'>
          <div>
            <p className='text-xl font-bold'>Ready to learn?</p>
            <p className='text-4xl font-bold'>Featured Courses</p>
          </div>
          <button className=' border border-[#FF3F3A] text-[#FF3F3A] px-4 py-2 '>View all courses</button>
        </div>
        <br />

        <div className='flex flex-wrap gap-5 w-full'>
          <div className='flex  items-center border w-125'>
            <div>
              <img src={Img_2} alt="" className='w-60' />
            </div>
            <div className='px-5'>
              <p className='bg-[#03CEA4] w-30 px-6 py-1 rounded-lg text-white'>Marketing</p>
              <br />
              <p className='text-xl font-bold'>The Ultimate Google Ads Training Course</p>
              <br />
              <p> <span className='text-[#FF4242]'> $100</span>  by Jerome Bell</p>
            </div>
          </div>
          <div className='flex  items-center border w-125'>
            <div>
              <img src={Img_2} alt="" className='w-60' />
            </div>
            <div className='px-5'>
              <p className='bg-[#03CEA4] w-30 px-6 py-1 rounded-lg text-white'>Marketing</p>
              <br />
              <p className='text-xl font-bold'>The Ultimate Google Ads Training Course</p>
              <br />
              <p> <span className='text-[#FF4242]'> $100</span>  by Jerome Bell</p>
            </div>
          </div>
          <div className='flex  items-center border w-125'>
            <div>
              <img src={Img_2} alt="" className='w-60' />
            </div>
            <div className='px-5'>
              <p className='bg-[#03CEA4] w-30 px-6 py-1 rounded-lg text-white'>Marketing</p>
              <br />
              <p className='text-xl font-bold'>The Ultimate Google Ads Training Course</p>
              <br />
              <p> <span className='text-[#FF4242]'> $100</span>  by Jerome Bell</p>
            </div>
          </div>
          <div className='flex  items-center border w-125'>
            <div>
              <img src={Img_2} alt="" className='w-60' />
            </div>
            <div className='px-5'>
              <p className='bg-[#03CEA4] w-30 px-6 py-1 rounded-lg text-white'>Marketing</p>
              <br />
              <p className='text-xl font-bold'>The Ultimate Google Ads Training Course</p>
              <br />
              <p> <span className='text-[#FF4242]'> $100</span>  by Jerome Bell</p>
            </div>
          </div>
          <div className='flex  items-center border w-125'>
            <div>
              <img src={Img_2} alt="" className='w-60' />
            </div>
            <div className='px-5'>
              <p className='bg-[#03CEA4] w-30 px-6 py-1 rounded-lg text-white'>Marketing</p>
              <br />
              <p className='text-xl font-bold'>The Ultimate Google Ads Training Course</p>
              <br />
              <p> <span className='text-[#FF4242]'> $100</span>  by Jerome Bell</p>
            </div>
          </div>
          <div className='flex  items-center border w-125'>
            <div>
              <img src={Img_2} alt="" className='w-60' />
            </div>
            <div className='px-5'>
              <p className='bg-[#03CEA4] w-30 px-6 py-1 rounded-lg text-white'>Marketing</p>
              <br />
              <p className='text-xl font-bold'>The Ultimate Google Ads Training Course</p>
              <br />
              <p> <span className='text-[#FF4242]'> $100</span>  by Jerome Bell</p>
            </div>
          </div>
        </div>
      </section>
      <section className=' p-30'>
        <div className='flex flex-col items-center'>
          <p className='font-bold text-xl'>Our benefits</p>
          <p className='font-bold text-4xl'>That’s how we do it</p>
          <br />
          <div className='flex items-center justify-center gap-10'>
            <button className=' border border-[#FF3F3A] text-[#FF3F3A] px-10 py-2 '>Experienced Tutors</button>
            <button className='   text-[gray] px-4 py-2 '>Feedback & Support</button>
            <button className='   text-[gray] px-4 py-2 '>24/7 Online Library</button>
            <button className='   text-[gray] px-4 py-2 '>Community</button>
          </div>
        </div>
        <br />
        <div className='flex items-center justify-center gap-30'>
          <div>
            <p className='text-2xl font-bold'>Only practicing tutors</p>
            <br />
            <p className='w-100 text-[13px]'>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
          </div>
          <div>
            <img src={Img_3} alt="" className='w-110' />
          </div>
        </div>
      </section>

      <Todos />

      <section className='p-30'>
        <div className='flex justify-between items-center'>
          <div>
            <p className='text-xl font-bold'>Our blog</p>
            <p className='text-3xl font-bold'>Latest posts</p>
          </div>
          <button className='bg-[#FF3F3A] text-white px-4 py-2 '>Go to blog</button>
        </div>
        <br />
        <div className='flex gap-5'>
          <div className='w-90'>
            <div>
              <img src={Img_4} alt="" className='w-90' />
            </div>
            <p className='flex items-center gap-3'>Marketing
              <svg width="1" height="12" viewBox="0 0 1 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.5L0.500001 11.5" stroke-linecap="round" stroke="#787A80" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00016 0.833984C5.36835 0.833984 5.66683 1.13246 5.66683 1.50065V1.83399L10.3335 1.834V1.50065C10.3335 1.13246 10.632 0.833985 11.0002 0.833984C11.3684 0.833984 11.6668 1.13246 11.6668 1.50065V1.834L12.5002 1.83401C13.9729 1.83401 15.1668 3.02792 15.1668 4.50067V12.5006C15.1668 13.9734 13.9729 15.1673 12.5002 15.1673L3.50016 15.1673C2.0274 15.1673 0.833496 13.9734 0.833496 12.5007L0.833496 6.00078L0.833496 4.50065C0.833496 3.02789 2.02741 1.83398 3.50017 1.83399L4.3335 1.83399V1.50065C4.3335 1.13246 4.63197 0.833984 5.00016 0.833984ZM4.3335 3.16732L3.50017 3.16732C2.76378 3.16732 2.16683 3.76427 2.16683 4.50065V5.33398H13.8335V4.50067C13.8335 3.76429 13.2365 3.16734 12.5002 3.16734L11.6668 3.16734V3.50065C11.6668 3.86884 11.3684 4.16732 11.0002 4.16732C10.632 4.16732 10.3335 3.86884 10.3335 3.50065V3.16734L5.66683 3.16733V3.50065C5.66683 3.86884 5.36835 4.16732 5.00016 4.16732C4.63197 4.16732 4.3335 3.86884 4.3335 3.50065V3.16732ZM13.8335 6.66732H2.16683L2.16683 12.5007C2.16683 13.237 2.76378 13.834 3.50016 13.834L12.5002 13.834C13.2365 13.834 13.8335 13.237 13.8335 12.5006V6.66732Z" fill-rule="evenodd" clip-rule="evenodd" fill="#787A80" />
              </svg>

              September 4, 2020
              <svg width="1" height="12" viewBox="0 0 1 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.5L0.500001 11.5" stroke-linecap="round" stroke="#787A80" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.6665 4.33268C8.6665 3.96449 8.36803 3.66602 7.99984 3.66602C7.63165 3.66602 7.33317 3.96449 7.33317 4.33268V7.99935C7.33317 8.17616 7.40341 8.34573 7.52843 8.47075L9.52843 10.4708C9.78878 10.7311 10.2109 10.7311 10.4712 10.4708C10.7316 10.2104 10.7316 9.78829 10.4712 9.52794L8.6665 7.72321V4.33268Z" fill="#787A80" />
                <path d="M7.99984 0.666016C3.94975 0.666016 0.666504 3.94926 0.666504 7.99935C0.666504 12.0494 3.94975 15.3327 7.99984 15.3327C12.0499 15.3327 15.3332 12.0494 15.3332 7.99935C15.3332 3.94926 12.0499 0.666016 7.99984 0.666016ZM1.99984 7.99935C1.99984 4.68564 4.68613 1.99935 7.99984 1.99935C11.3135 1.99935 13.9998 4.68564 13.9998 7.99935C13.9998 11.3131 11.3135 13.9993 7.99984 13.9993C4.68613 13.9993 1.99984 11.3131 1.99984 7.99935Z" fill-rule="evenodd" clip-rule="evenodd" fill="#787A80" />
              </svg>

              36 min</p>
            <br />
            <p className='text-xl font-bold'>What is traffic arbitrage and does it really make money?</p>
            <br />
            <p className='text-[14px]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
          </div>
          <div className='w-90'>
            <div>
              <img src={Img_5} alt="" className='w-90' />
            </div>
            <p className='flex items-center gap-3'>Marketing
              <svg width="1" height="12" viewBox="0 0 1 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.5L0.500001 11.5" stroke-linecap="round" stroke="#787A80" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00016 0.833984C5.36835 0.833984 5.66683 1.13246 5.66683 1.50065V1.83399L10.3335 1.834V1.50065C10.3335 1.13246 10.632 0.833985 11.0002 0.833984C11.3684 0.833984 11.6668 1.13246 11.6668 1.50065V1.834L12.5002 1.83401C13.9729 1.83401 15.1668 3.02792 15.1668 4.50067V12.5006C15.1668 13.9734 13.9729 15.1673 12.5002 15.1673L3.50016 15.1673C2.0274 15.1673 0.833496 13.9734 0.833496 12.5007L0.833496 6.00078L0.833496 4.50065C0.833496 3.02789 2.02741 1.83398 3.50017 1.83399L4.3335 1.83399V1.50065C4.3335 1.13246 4.63197 0.833984 5.00016 0.833984ZM4.3335 3.16732L3.50017 3.16732C2.76378 3.16732 2.16683 3.76427 2.16683 4.50065V5.33398H13.8335V4.50067C13.8335 3.76429 13.2365 3.16734 12.5002 3.16734L11.6668 3.16734V3.50065C11.6668 3.86884 11.3684 4.16732 11.0002 4.16732C10.632 4.16732 10.3335 3.86884 10.3335 3.50065V3.16734L5.66683 3.16733V3.50065C5.66683 3.86884 5.36835 4.16732 5.00016 4.16732C4.63197 4.16732 4.3335 3.86884 4.3335 3.50065V3.16732ZM13.8335 6.66732H2.16683L2.16683 12.5007C2.16683 13.237 2.76378 13.834 3.50016 13.834L12.5002 13.834C13.2365 13.834 13.8335 13.237 13.8335 12.5006V6.66732Z" fill-rule="evenodd" clip-rule="evenodd" fill="#787A80" />
              </svg>

              September 4, 2020
              <svg width="1" height="12" viewBox="0 0 1 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.5L0.500001 11.5" stroke-linecap="round" stroke="#787A80" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.6665 4.33268C8.6665 3.96449 8.36803 3.66602 7.99984 3.66602C7.63165 3.66602 7.33317 3.96449 7.33317 4.33268V7.99935C7.33317 8.17616 7.40341 8.34573 7.52843 8.47075L9.52843 10.4708C9.78878 10.7311 10.2109 10.7311 10.4712 10.4708C10.7316 10.2104 10.7316 9.78829 10.4712 9.52794L8.6665 7.72321V4.33268Z" fill="#787A80" />
                <path d="M7.99984 0.666016C3.94975 0.666016 0.666504 3.94926 0.666504 7.99935C0.666504 12.0494 3.94975 15.3327 7.99984 15.3327C12.0499 15.3327 15.3332 12.0494 15.3332 7.99935C15.3332 3.94926 12.0499 0.666016 7.99984 0.666016ZM1.99984 7.99935C1.99984 4.68564 4.68613 1.99935 7.99984 1.99935C11.3135 1.99935 13.9998 4.68564 13.9998 7.99935C13.9998 11.3131 11.3135 13.9993 7.99984 13.9993C4.68613 13.9993 1.99984 11.3131 1.99984 7.99935Z" fill-rule="evenodd" clip-rule="evenodd" fill="#787A80" />
              </svg>

              36 min</p>
            <br />
            <p className='text-xl font-bold'>What is traffic arbitrage and does it really make money?</p>
            <br />
            <p className='text-[14px]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
          </div>
          <div className='w-90'>
            <div>
              <img src={Img_6} alt="" className='w-90' />
            </div>
            <p className='flex items-center gap-3'>Marketing
              <svg width="1" height="12" viewBox="0 0 1 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.5L0.500001 11.5" stroke-linecap="round" stroke="#787A80" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00016 0.833984C5.36835 0.833984 5.66683 1.13246 5.66683 1.50065V1.83399L10.3335 1.834V1.50065C10.3335 1.13246 10.632 0.833985 11.0002 0.833984C11.3684 0.833984 11.6668 1.13246 11.6668 1.50065V1.834L12.5002 1.83401C13.9729 1.83401 15.1668 3.02792 15.1668 4.50067V12.5006C15.1668 13.9734 13.9729 15.1673 12.5002 15.1673L3.50016 15.1673C2.0274 15.1673 0.833496 13.9734 0.833496 12.5007L0.833496 6.00078L0.833496 4.50065C0.833496 3.02789 2.02741 1.83398 3.50017 1.83399L4.3335 1.83399V1.50065C4.3335 1.13246 4.63197 0.833984 5.00016 0.833984ZM4.3335 3.16732L3.50017 3.16732C2.76378 3.16732 2.16683 3.76427 2.16683 4.50065V5.33398H13.8335V4.50067C13.8335 3.76429 13.2365 3.16734 12.5002 3.16734L11.6668 3.16734V3.50065C11.6668 3.86884 11.3684 4.16732 11.0002 4.16732C10.632 4.16732 10.3335 3.86884 10.3335 3.50065V3.16734L5.66683 3.16733V3.50065C5.66683 3.86884 5.36835 4.16732 5.00016 4.16732C4.63197 4.16732 4.3335 3.86884 4.3335 3.50065V3.16732ZM13.8335 6.66732H2.16683L2.16683 12.5007C2.16683 13.237 2.76378 13.834 3.50016 13.834L12.5002 13.834C13.2365 13.834 13.8335 13.237 13.8335 12.5006V6.66732Z" fill-rule="evenodd" clip-rule="evenodd" fill="#787A80" />
              </svg>

              September 4, 2020
              <svg width="1" height="12" viewBox="0 0 1 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.5L0.500001 11.5" stroke-linecap="round" stroke="#787A80" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.6665 4.33268C8.6665 3.96449 8.36803 3.66602 7.99984 3.66602C7.63165 3.66602 7.33317 3.96449 7.33317 4.33268V7.99935C7.33317 8.17616 7.40341 8.34573 7.52843 8.47075L9.52843 10.4708C9.78878 10.7311 10.2109 10.7311 10.4712 10.4708C10.7316 10.2104 10.7316 9.78829 10.4712 9.52794L8.6665 7.72321V4.33268Z" fill="#787A80" />
                <path d="M7.99984 0.666016C3.94975 0.666016 0.666504 3.94926 0.666504 7.99935C0.666504 12.0494 3.94975 15.3327 7.99984 15.3327C12.0499 15.3327 15.3332 12.0494 15.3332 7.99935C15.3332 3.94926 12.0499 0.666016 7.99984 0.666016ZM1.99984 7.99935C1.99984 4.68564 4.68613 1.99935 7.99984 1.99935C11.3135 1.99935 13.9998 4.68564 13.9998 7.99935C13.9998 11.3131 11.3135 13.9993 7.99984 13.9993C4.68613 13.9993 1.99984 11.3131 1.99984 7.99935Z" fill-rule="evenodd" clip-rule="evenodd" fill="#787A80" />
              </svg>

              36 min</p>
            <br />
            <p className='text-xl font-bold'>What is traffic arbitrage and does it really make money?</p>
            <br />
            <p className='text-[14px]'>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
          </div>
        </div>
      </section>
      <section className='bg-[#FEDAD5] p-30 pb-10 text-white'>
        <p className='text-center text-xl font-bold '>Don’t miss anything</p>
        <p className='text-center text-4xl font-bold  w-200 m-auto'>Subscribe to the Createx School announcements</p>
        <br />  <br />
        <div className='flex gap-10 justify-center'>
          <input type="text" name="" placeholder='Your working email' id="" className='bg-white w-90 px-10 text-[gray]' />
          <button className='bg-[#FF3F3A] text-white px-4 py-2 '>Go to blog</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home