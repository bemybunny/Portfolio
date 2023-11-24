import React from 'react'
import {motion} from 'framer-motion'
const Project = () => {

   const projects=[
    {
    image:"tesla.png",
    title:"Tesla Clone",
    text:"This project utilizes components and props to create a user-friendly experience. It is fully responsive, adapting seamlessly to different screen sizes, and closely emulates the design."
   },
   {
    image:"netflix.png",
    title:"Netflix Clone",
    text:"I created a Netflix clone that fetches data from the TMDb API and incorporates Firebase authentication for user signup and signout. This project provides users with access to a wide range of content similar to Netflix."
   },
   {
    image:"rps.png",
    title:"Rock-Paper-Scissor",
    text:"I've built a fun and interactive Rock, Paper, Scissors web application using React.js. Users can play the classic hand game against the computer, making their selections and enjoying a simple yet engaging experience."
   },
   {
    image:"dict.png",
    title:"Dictionary",
    text:"I've created a dictionary app that leverages an API to provide users with quick and easy access to word definitions and information. This project, built using React.js, offers a user-friendly interface for exploring the meanings, synonyms, and other details of words in a convenient and efficient manner."
   },
   {
    image:"weatherforecasting.png",
    title:"Weather Api",
    text:"I've created a dictionary app that leverages an API to provide users with quick and easy access to word definitions and information. This project, built using React.js, offers a user-friendly interface for exploring the meanings, synonyms, and other details of words in a convenient and efficient manner."
   },
  ];
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}

    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
      <div className="-mb-8 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
          snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project,i) => (
          <div key={i} className="-mb-12 w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen lg:mb-12">
              <motion.img 
              initial={{y:-300,opacity:0}}
              transition={{duration:1.2}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              src={project.image} alt="" className=" h-36 xl:h-44 transform hover:scale-125 transition duration-1000 "/>
            
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                  {project.title}</span>
                  </h4>
                  <p className="text-lg text-center md:text-left">{project.text}</p></div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"/>
    </motion.div>
  )
}

export default Project


