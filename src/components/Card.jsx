import React from 'react'

const Card = ({image, text}) => {
  return (
    <div className='flex-col md:flex flex-row w-full px-10 items-center justify-center p-10 gap-4'>
        <div>
            <img src={image} alt="image" className='w-70 m-10 md:m-0' />
        </div>
        <div className='text-start'>
            {text}
        </div>
    </div>
  )
}

export default Card