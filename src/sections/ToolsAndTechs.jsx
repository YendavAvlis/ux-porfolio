import React from 'react'
import { toolsTech } from '../utils/tools'


const ToolsAndTechs = () => {
  return (
    <section id="tools" className="container py-24 relative overflow-hidden mx-auto px-8">
      <h1 className='text-7xl lg:text-9xl font-semibold text-center bg-gradient-to-b  from-foreground bg-clip-text text-transparent'>Tools and Techs</h1>
      <div className='container flex flex-wrap pt-8 justify-center'>
        {
          toolsTech.map((tool, idx) => (
            <div key={idx} className='border border-transparent bg-border/20 hover:shadow-md hover:shadow-primary/5 hover:border-primary/20 p-8 w-2xl rounded-md m-4 flex transition-all duration-300'>
              <span className='text-4xl p-2 bg-transparent border border-border text-foreground rounded-md m-1 mr-4 hover:text-primary/80 transition-all duration-200'>
                {tool.icon}
              </span>
              <div>
                <h3 className='text-2xl font-bold'>{tool.name}</h3>
                <p className='text-md'>{tool.description}</p>
              </div>
              
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ToolsAndTechs