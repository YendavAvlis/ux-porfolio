import React from 'react'
import {motion, useTransform} from 'framer-motion'
import Pic1 from '../assets/case-3.jpg'

const img = new Image()
const CaseStudyThree = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [ 0.75, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.div style={{scale, rotate, backgroundImage:`url(${Pic1})`, backgroundSize: 'cover', height: '100vh', width: '85vw'}} className="sticky top-0 rounded-md h-screen bg-[#C72626] flex flex-col items-center justify-center text-white overflow-hidden mx-auto">
      <div  className='bg-white/30 backdrop-blur-md w-screen h-full'>
        <div className="container mx-auto px-6 pt-30 pb-20 relative z-10">
          <h2 className='font-semibold text-6xl'>Skuata App</h2>
          <hr className='my-4' />
          <p></p>
        </div>
      </div>   
    </motion.div>
  )
}

export default CaseStudyThree