import React from 'react'
import Pic1 from '../assets/skuata_webapp.webp'
import Pic2 from '../assets/skuata_mobile.webp'
import { useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
const img = new Image()
const CaseStudyOne = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (

    <motion.div style={{scale, rotate, backgroundImage:`url(${Pic1})`, backgroundSize: 'cover', height: '100vh', width: '85vw'}} className="sticky top-0 rounded-md h-screen bg-[#C72626] flex flex-col items-center justify-center text-white overflow-hidden mx-auto">
      <div  className='container bg-white/30 backdrop-blur-md w-screen h-full '>
        <div className=" flex justify-center gap-4 mx-auto h-full relative z-10">
          <div className='w-1/3 flex flex-col justify-evenly my-auto border border-primary glass p-6 h-[65%] rounded-md'>
            <div className=''>
              <h2 className='font-bold text-3xl py-4 '>Skuata App</h2>
              <p className='text-xl text-foreground/80 font-medium'>An innovative solution for affordable housing, designed to make living easier for low-income individuals, students, and minimum wage earners.</p>
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
          <div className='w-1/3 my-auto overflow-hidden gap-2 flex flex-col rounded-md'>
            <img
              src={Pic1}
              fill
            />
            <img
              src={Pic2}
              fill
            />
          </div>
          <div className='w-1/3 flex flex-col justify-evenly my-auto border border-primary glass p-6 h-[65%] rounded-md'>
            <div className=''>
              <h2 className='font-bold text-3xl py-4 '>Skuata App</h2>
              <p className='text-xl text-foreground/80 font-medium'>An innovative solution for affordable housing, designed to make living easier for low-income individuals, students, and minimum wage earners.</p>
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
        </div>
      </div>   
    </motion.div>
  )
}

export default CaseStudyOne