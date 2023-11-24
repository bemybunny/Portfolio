"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  // useEffect(() => {
  //     AOS.init({
  //          duration: 800,
  //          once: false,
  //        })
  //  }, [])

  return (
    <main
      className="bg-[rgb(36,36,36)] text-white h-screen
     snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
     scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="About" className="snap-center">
        <About />
      </section>
      <section id="Skills" className="snap-start">
        <Skills />
      </section>
      <section id="Project" className="snap-start">
        <Project />
      </section>
      <section id="Contact" className="snap-start">
        <Contact />
      </section>
    </main>
  );
}
