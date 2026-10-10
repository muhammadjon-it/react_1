import React from 'react'
import Card_3 from '../components/Card_3'

const Second = () => {
    return (
        <>
            <div className='bg-[#E2DDC0] rounded-2xl w-[90%] md:w-[92%] h-80 md:h-40 m-4 md:m-10 pt-4'>
                <p className='font-[500] text-[29px] md:text-[30px] text-[#000000] text-start px-10 leading-10'>Подберите рацион для своих целей</p>
                <div className='flex flex-wrap gap-3 items-center justify-between px-10 py-10'>
                    <div className='flex gap-2 rounded-2xl px-1 py-1 bg-[#FAF6F2] text-[15px]'>
                        <p className='cursor-pointer hover:rounded-full  hover:bg-[#DFCCB7] px-[7px]'>Ж</p>
                        <p className='cursor-pointer hover:rounded-full  hover:bg-[#DFCCB7] px-[7px]'>М</p>
                    </div>
                    <p className='rounded-2xl px-3 py-1 bg-[#FAF6F2] text-[15px] hover:bg-[#DFCCB7] cursor-pointer'>Ваш вес</p>
                    <p className='rounded-2xl px-3 py-1 bg-[#FAF6F2] text-[15px] hover:bg-[#DFCCB7] cursor-pointer'>Ваш рост</p>
                    <p className='rounded-2xl px-3 py-1 bg-[#FAF6F2] text-[15px] hover:bg-[#DFCCB7] cursor-pointer'>Ваш возраст</p>
                    <select className=' rounded-2xl px-3 py-1 bg-[#FAF6F2] text-[15px] hover:bg-[#DFCCB7] cursor-pointer'>
                        <option value="">Активность</option>
                    </select>
                    <select className='m-auto md:m-0 w-[90%] md:w-35 rounded-2xl text-center px-3 py-1 bg-[#FAF6F2] text-[15px] hover:bg-[#DFCCB7] cursor-pointer'>
                        <option value="">Выберите цель</option>
                    </select>
                    <p className=' w-78 md:w-40 rounded-2xl px-3 py-1 text-[15px] text-white bg-[#4D8F76] cursor-pointer'>Рассчитать рацион</p>
                </div>
            </div>
            <br />

            <div className='bg-[#FFFFFF] p-5 rounded-lg m-10'>
                <div className='flex items-center justify-between bg-[#FFFFFF]  rounded-lg'>
                    <p className='font-[500] text-[30px] text-black'>Программа ПремиумБоул</p>
                    <p className='flex gap-4 font-[500] text-[15px] text-[#4D8F76]'>
                        <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.53 2.89014V7.87014C8.53 8.46014 7.97813 8.96014 7.19744 9.08014C6.41675 9.20014 5.85142 9.72014 5.85142 10.3101C5.85142 13.4901 5.85142 20.1001 5.85142 20.1001C5.85142 20.6001 5.31301 21.0001 4.64 21.0001C3.96699 21.0001 3.42858 20.6001 3.42858 20.1001V10.3201C3.42858 9.72014 2.86325 9.21014 2.08256 9.09014C1.30187 8.97014 0.75 8.46014 0.75 7.87014V2.89014" stroke="#4D8F76" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.36133 2.89014V7.20014" stroke="#4D8F76" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.93213 2.89014V7.20014" stroke="#4D8F76" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M33.9187 15.6341C33.9187 18.793 33.9187 19.856 33.9187 19.856C33.9187 20.3527 33.4367 20.75 32.8343 20.75C32.2319 20.75 31.75 20.3527 31.75 19.856V12.1672V2.75C31.75 2.75 35.75 3.50497 35.75 8.51159V14.0944H34.8584C34.3524 14.0944 33.9307 14.4321 33.9307 14.8593L33.9187 15.6341Z" stroke="#4D8F76" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M29.3601 17.22C27.4801 20.75 23.7501 23.15 19.4701 23.15C14.5101 23.15 10.3001 19.92 8.83008 15.45" stroke="#4D8F76" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.8203 4.84C12.8703 2.34 15.9903 0.75 19.4703 0.75C23.8503 0.75 27.6503 3.27 29.4903 6.94" stroke="#4D8F76" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.4798 19.63C23.7214 19.63 27.1598 16.1916 27.1598 11.95C27.1598 7.70847 23.7214 4.27002 19.4798 4.27002C15.2383 4.27002 11.7998 7.70847 11.7998 11.95C11.7998 16.1916 15.2383 19.63 19.4798 19.63Z" stroke="#4D8F76" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Каждый день новое меню
                    </p>
                </div>
                <p className='text-start py-4 text-black'>Калорийность</p>
                <div className='flex flex-wrap gap-5'>
                    <Card_3 textH1={<p>900 ккал</p>} textP={<p> 3 блюда </p>} />
                    <Card_3 textH1={<p>1 250 ккал </p>} textP={<p> 4 блюда </p>} />
                    <Card_3 textH1={<p>1 600 ккал</p>} textP={<p> 5 блюд</p>} />
                    <Card_3 textH1={<p>2 050 ккал</p>} textP={<p> 6 блюд </p>} />
                    <Card_3 textH1={<p className='text-[20px]'>индивидуально подобрать</p>}  />
                </div>
                <p className='text-start py-4 text-black'>Калорийность</p>
                <div className='flex flex-wrap gap-5'>
                    <Card_3 textH1={<p className='text-[20px]'>Пробные 2 дня</p>} textP={<p> за 2 900 ₽ </p>} />
                    <Card_3 textH1={<p>1 неделя</p>} textP={<p> 1 700 ₽ в день </p>} />
                    <Card_3 textH1={<p>2 недели</p>} textP={<p> 1 600 ₽ в день </p>} />
                    <Card_3 textH1={<p>3 недели</p>} textP={<p> 1 520 ₽ в день </p>} />
                    <Card_3 textH1={<p>4 недели</p>} textP={<p> 1 450 ₽  в день</p>} />
                </div>
            </div>
        </>
    )
}

export default Second