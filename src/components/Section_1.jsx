import React from 'react'

const Section_1 = ({ children }) => {
    return (
        <div className=' flex-col md:flex flex-row items-center justify-center gap-10 px-4 py-6'>
                {children}
        </div>
    )
}

export default Section_1