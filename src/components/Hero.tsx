"use client"
import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import Link from "next/link"; 

const Hero = () => {
    const [text,count] = useTypewriter({
        words:[
            "Hi,The Name's Leena Gupta",
            "Girl-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore/>"
        ],

        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className="h-screen flex flex-col space-y-8 
    items-center justify-center text-center overflow-hidden">
         <img
            className="relative rounded-full h-32 w-32 mx-auto object-cover" 
            src="pic1.jpeg" 
            alt=""
          />
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A"/>
          </h1>
          <div className="pt-5">
            <Link legacyBehavior href="/#About"><button className="heroButton">About</button></Link>
            <Link legacyBehavior href="/#Skills"><button className="heroButton">Skills</button></Link>
            <Link legacyBehavior href="/#Project"><button className="heroButton">Project</button></Link>
          </div>
      </div>
    </div>
  )
}

export default Hero