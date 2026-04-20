import React from 'react'
import {motion, useTransform} from 'framer-motion'
import Pic1 from '../assets/case-3.jpg'

const img = new Image()
const CaseStudyThree = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 rounded-md h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] overflow-hidden">
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <img
            src={Pic1}
            alt="image"
            placeholder="blur"
            fill
          />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  )
}

export default CaseStudyThree