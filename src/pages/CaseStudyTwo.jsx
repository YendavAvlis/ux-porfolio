import React from 'react'
import Pic1 from '../assets/case-1.jpg'
import {motion, useTransform} from 'framer-motion'

const img = new Image()
const CaseStudyTwo = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  
  return (
     <motion.div style={{scale, rotate}} className="sticky top-0 relative h-screen rounded-md overflow-hidden">
        <img 
          src={Pic1}
          alt="img"
          placeholder="blur"
          fill
        />
      </motion.div>
  )
}

export default CaseStudyTwo