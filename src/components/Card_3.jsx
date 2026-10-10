import React from 'react'

const Card_3 = ({ textH1, textP }) => {
    return (
      
           
            <div className='border border-[#DFCCB7] p-2 rounded-2xl w-39 py-4 hover:bg-[#DFCCB7] cursor-pointer '>
                <p className='font-[500] text-[24px] text-[#493E3E] '>{textH1}</p>
                <p className='font-[500] text-[16px] text-[#493E3E] '> {textP} </p>
            </div>
    )
}

export default Card_3