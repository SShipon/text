import React from 'react';

const Technology = ({skill}) => {
    const {name, title , logo}= skill
    return (
        <div className='bg-[#ffffff13] p-4 flex flex-col rounded-lg shadow-xl'>
           <div className='text-center text-1xl font-semibold space-y-4 '>
           <p className='text-[#ffffffd3]'>{title}</p>
           <img className='w-[60px] block mx-auto' src={logo} alt="" srcset="" />
           </div>
        </div>
    );
};

export default Technology;