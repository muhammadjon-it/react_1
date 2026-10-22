import React from 'react'

const Card_1 = ({profilel, title, paragraf}) => {
  return (
    <div className='p-5 border bg-[#F2F0FE] rounded-2xl w-80'>
        <div className='flex items-center gap-4'>
            <img src={profilel} alt="" className='rounded-full' />
            <p className='font-bold'> {title} </p>
        </div>
        <br />
       <p className='text-[14px] font-[300]'> {paragraf} </p>
       <br />
       <button className='w-full rounded-2xl border border-[#1DBF73] text-[#1DBF73] hover:bg-[#1DBF73] hover:text-white text-[15px]'>Посмотреть</button>
    </div>
  )
}

export default Card_1