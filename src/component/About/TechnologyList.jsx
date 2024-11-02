import { map } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';
import Technology from './Technology';

const TechnologyList = () => {
    const [skills, setSkills] =useState([])

    useEffect(()=>{
       fetch('skills.json')
       .then(res => res.json())
       .then(data => setSkills(data))
    },[])
    return (
        <div className='my-8 mx-2 lg:mx-0'>
              <div className='bg-[#ffffff13] rounded-2xl p-4'>
                <h3 className='text-center text-3xl text-[#ffffffd3]'>Technical Skills</h3>
              </div>
              <br />
          
             <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-6 justify-evenly'>
             {
              skills?.map((skill)=><Technology
                key={skill.id}  skill={skill}
              />)   
            }
             </div>
        </div>
    );
};

export default TechnologyList;