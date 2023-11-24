"use client"
import React from 'react'
import {motion} from 'framer-motion';


const About = () => {

  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly gap:40 mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl  ">About</h3>
      <motion.img  
        initial={{x:-200,opacity:0,}}
        transition={{duration:1.2}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        src="mypic.jpeg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
        alt=""
      />
      <div className=" -mb-24 space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#f7AB0A]/50">little</span> background
        </h4>
        <p className="text-sm">
         I'm Leena Gupta, a dedicated student at MNIT, Jaipur. My academic journey is centered on learning, growth, and exploration. While pursuing my B.Tech, I've discovered my true passion for problem-solving and coding. In addition to my technical skills, I have a knack for intermediate frontend development, with a strong grasp of JavaScript and ReactJS. I've even had the pleasure of crafting some exciting projects using these technologies.
        <br/>
        Beyond the world of academics and code, I find joy in my hobbies. Table tennis is a sport that keeps me active and competitive, while reading books helps me discover more about myself and the world around me.
        <br/>
        I'm excited to continue my journey of learning, growing, and exploring new horizons. Feel free to connect with me if you share similar interests or if you'd like to collaborate on exciting projects.
        </p>
      </div>
    </div>
  );
}

export default About;