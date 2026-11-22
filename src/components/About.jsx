import React from 'react'
import Tilt from "react-parallax-tilt";
// import ReactTypingEffect from 'react-typing-effect';
import { Typewriter } from 'react-simple-typewriter';



const About = () => {

  
  return (
    <div id='about' className="w-full h-screen flex items-center justify-center">
            <div className="cntnr flex justify-evenly items-center text-white w-full h-full py-10 ">
            <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.02}
          transitionSpeed={1000}
          className='flex items-center justify-center h-[25rem] w-3/10  p-2'>

              <img className='object-cover scale-[0.9]' src="./tech.png" alt="" />
              </Tilt>
  
               <div className="rg w-[30%]">
                <h1 className="text-5xl">I'm A</h1>
                <h1 className="text-5xl">
                  <Typewriter
      words={['Full Stack Developer', 'UI/UX Enthusiast', 'Tech Explorer']}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={100}
      deleteSpeed={80}
      delaySpeed={1000}
    />
                </h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                
                <button className="bg-[#ffa200] px-8 py-8 text-black mt-10 text-2xl">
                  <a href="/Neeraj_Vidhani_Resume.pdf" download>Download Resume</a>
                </button>
              </div>
            </div>
          </div>
  )
}

export default About