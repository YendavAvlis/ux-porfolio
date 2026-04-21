import React, { useEffect, useRef } from 'react'
import CaseStudyOne from '../pages/CaseStudyOne'
import CaseStudyTwo from '../pages/CaseStudyTwo'
import { useScroll } from 'framer-motion';
import CaseStudyThree from '../pages/CaseStudyThree';
import Lenis from 'lenis';


const CaseStudies = () => {
  const container = useRef();
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })
  useEffect( () => {
  const lenis = new Lenis()

  function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  }, [])
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <h4 className='text-center text-primary text-md font-bold pb-4 tracking-wider uppercase'>projects</h4>
      <h1 className=' lg:text-9xl font-semibold text-center bg-gradient-to-b  from-foreground bg-clip-text text-transparent'>Case Studies</h1>
      <main ref={container} className='relative h-[300vh]'>
        <CaseStudyOne scrollYProgress={scrollYProgress}/>
        <CaseStudyTwo  scrollYProgress={scrollYProgress}/>
        <CaseStudyThree  scrollYProgress={scrollYProgress}/>
      </main>
    </section>
  )
}

export default CaseStudies