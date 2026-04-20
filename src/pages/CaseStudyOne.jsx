import React from 'react'
import Pic1 from '../assets/skuata_webapp.png'
import { useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
const img = new Image()
const CaseStudyOne = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (

    <motion.div style={{scale, rotate, backgroundImage:`url(${Pic1})`, backgroundSize: 'cover', height: '100vh'}} className="sticky top-0 rounded-md h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white overflow-hidden">
      <div  className='bg-white/30 backdrop-blur-xl w-screen h-full'>
        <h1>Testing</h1>
      </div>   
    </motion.div>
  )
}

export default CaseStudyOne