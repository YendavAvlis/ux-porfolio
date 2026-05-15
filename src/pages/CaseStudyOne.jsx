import React from 'react'
import Pic1 from '../assets/skuata_webapp.webp'
import Pic2 from '../assets/skuata_mobile.webp'
import { useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import { caseOneSkills } from '../utils/tags'
const img = new Image()
const CaseStudyOne = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (

    <motion.div style={{scale, rotate, backgroundImage:`url(${Pic1})`, backgroundSize: 'cover', height: '140vh', width: '85vw'}} className="sticky top-0 rounded-md flex flex-col items-center text-white overflow-hidden mx-auto  ">
      <div  className=' bg-white/30 backdrop-blur-md  '>
        <div className=" flex flex-col items-center gap-4 mx-auto relative z-10 py-4 px-4 xl:flex-row">
          <div className='w-full xl:w-1/3 flex flex-col justify-evenly lg:my-auto border border-primary glass p-6 rounded-md '>
            <div className=''>
              <h2 className='font-bold text-3xl py-4 '>Skuata App</h2>
              <p className='text-xl text-foreground/80 font-medium leading-8'>An innovative solution for affordable housing, designed to make living easier for low-income individuals, students, and minimum wage earners.</p>
            </div>

            <div className=''>
              <h2 className='font-bold text-3xl py-4'>Roles</h2>
              <ul>
                <li>UI/UX Designer</li>
                <li>Frontend Developer</li>
              </ul>
            </div>

            <div className=''>
              <h2 className='font-bold text-3xl py-4'>Team</h2>
              <ul>
                <li>Project Manager</li>
                <li>Frontend Developers</li>
                <li>Backend Developer</li>
                <li>DevOps</li>

              </ul>
            </div>
          </div>
          <div className='md:w-1/2 xl:w-1/3 my-auto gap-2 flex flex-col items-center justify-center md:flex-row xl:flex-col  rounded-md'>
            <img
              src={Pic1}
              fill
            />
            <img
              className='hidden md:block'
              src={Pic2}
              fill
            />
          </div>
          <div className='w-full xl:w-1/3 flex flex-col justify-evenly my-auto border border-primary glass p-6 rounded-md '>
            <div className=''>
              <h2 className='font-bold text-3xl py-4 '>Year</h2>
              <p className='text-2xl text-foreground/80 font-medium'>2026</p>
            </div>

            <div className=''>
              <h2 className='font-bold text-3xl py-4'>Deliverables</h2>
              <ul>

                <li>Logo Design</li>
                <li>Design System</li>
                <li>Wireframe: Low & High Fidelity</li>
              </ul>
            </div>

            <div className='w-full  '>
              <h2 className='font-bold text-3xl py-4'>Skills</h2>
              <div className=''>
                {
                  caseOneSkills.map((item, index) => (
                    <span 
                      key={index}
                      className='inline-block py-2 px-4 mx-1 my-1 border-2 rounded-md hover:bg-foreground hover:text-muted hover:font-bold hover:border-primary transition-all duration-75'
                    >
                      {item.skill}
                    </span>
                  ))
                  
                }
              </div>
            </div>

            <div className=''>
              <h2 className='font-bold text-3xl py-4'>Links</h2>
              <ul>
                <li className='hover:underline hover:text-xl hover:text-primary transition-all duration-200'><a href="https://skuata.co.za/app" target="_blank" rel="noopener noreferrer">https://skuata.co.za/app</a></li>
                <li className='hover:underline hover:text-xl hover:text-primary transition-all duration-200'><a href="https://www.figma.com/proto/MR5DYX7ETLQqoDt4amsAgi/Skuata-UI-UX-Design?node-id=66-630&viewport=-571%2C29%2C0.37&t=YWe21vBqpCfZZODV-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=66%3A630&show-proto-sidebar=1&page-id=1%3A4" target="_blank" rel="noopener noreferrer">View Prototype</a></li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>   
    </motion.div>
  )
}

export default CaseStudyOne