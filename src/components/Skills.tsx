import React from 'react'
import Skill from './Skill'
import {motion} from 'framer-motion'
const Skills = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex relative flex-col text-center md:text-left xl:flex-row
     max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency</h3>
        <div className="-mb-12 grid grid-cols-4 gap-5">
          <Skill image="react.png" percent="75"/>
          <Skill image="HTML 5.png" percent="90"/>
          <Skill image="javascript.png" percent="80"/>
          <Skill image="css.png" percent="75"/>
          <Skill image="next.png" percent="60"/>
          <Skill image="firebase.png" percent="45"/>
          <Skill image="nodejs.png" percent="50"/>
          <Skill image="c++.png" percent="95"/>
          <Skill image="tailwind.png" percent="70"/> 
        </div>
    </motion.div>
  )
}

export default Skills