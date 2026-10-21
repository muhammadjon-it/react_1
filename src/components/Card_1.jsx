import React from 'react';

const Card_1 = ({ title, imageSrc, bgColor, textColor }) => {
    return (
        <div className={`${bgColor} rounded-3xl px-6 py-3 flex flex-col justify-between h-50 w-full max-w-sm shadow-sm   relative overflow-hidden`}>
            <h3 className={`${textColor} text-xl font-bold leading-tight max-w-[200px]`}>
                {title}
            </h3>
            <div className='w-full flex items-end justify-end'>
                <div className="  w-35 h-35 flex items-center justify-center bg-white rounded-full">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="absolute object-cover  w-40"
                    />
                </div>
            </div>
        </div>
    );
};

export default Card_1;
