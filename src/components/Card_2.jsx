import React from 'react'

const Card_2 = ({image, text}) => {
  return (
    <>
    <div className='hidden md:flex w-full px-10 items-center justify-center p-10  gap-15'>
        <div className='text-start'>
            {text}
        </div>
        <div>
            <img src={image} alt="image" className='w-70' />
        </div>
    </div>

     <div className='block md:hidden w-full px-10 items-center justify-center p-10  gap-15'>
        <div>
            <img src={image} alt="image" className='w-70 m-10' />
        </div>
        <div className='text-start'>
            {text}
        </div>
    </div>

    </>
  )
}

export default Card_2