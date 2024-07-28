import React from 'react'
 
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

import {motion} from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';

import { experiences } from '../constants/services';

import { SectionWrapper } from '../hoc';

import { textVariant } from '../utils/motion';

const ExperienceCard = ({experience}) => (

      <VerticalTimelineElement date={experience.date}
      
          contentStyle={{background : '#1d1835', color : '#fff'}}

          contentArrowStyle={{borderRight: '7px solid #232631'}}
          
          iconStyle={{background: experience.iconBg}}
          
          icon={<div className='flex justify-center items-center w-full h-full'>
            
                    <img src ={experience.icon} alt = {experience.company_name}
                    
                         className='w-[60%] h-[60%] object-contain'/>
                    
                </div>}>
          
        <div>

            <h3 className='text-white text-[24px] font bold'>{experience.title}</h3>
            
            <p className='text-secondary text-[16px]' style = {{margin : 0}}>{experience.company_name}</p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>

            {experience.points.map((point, index) => (

              <li className='text-white-100 text-[14px] p1-1 tracking-wider'
              
                  key = {`experience-point-${index}`}>

                    {point}

                </li>

            ))}

        </ul>

      </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

            <p className={styles.sectionSubText}> What have I done so far</p>

            <h2 className={styles.sectionHeadText}> Work Experience </h2>

      </motion.div>

        <div className='mt-20 flex flex-col'>

          <VerticalTimeline>

            {experiences.map((experience, index) =>(

              <ExperienceCard key = {index} experience = {experience}/>

            ))}

          </VerticalTimeline>

        </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")