import React from 'react'

import { BallCanvas } from './canvas';

import { SectionWrapper } from '../hoc';

import { technologies } from '../constants/services';
const Tech = () => {
  return (
    
    <div className='flex flex-grow flex-wrap justify-center gap-10'>
      
      {technologies.map((technology) => (

        <div className='w-28 h-28' key = {technology.name}>

          <BallCanvas icon={technology.icon}/>

          <p className='flex align-center justify-center ext-white-100 text-[16px] p1-1 tracking-wider'>
            
                {technology.name}
          
          </p>
          
        </div>
      ))}
      
    </div>
  )
}

export default SectionWrapper(Tech, "Tech_Stack");