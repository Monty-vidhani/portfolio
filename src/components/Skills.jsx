import React from 'react'
import Tilt from "react-parallax-tilt";


const Skills = () => {
  return (
   <div id='skills' className="w-full flex items-center justify-center ">
            <div className="cntnr flex flex-col h-full pt-20 relative text-white w-full ">
                  <div className="heading flex  flex-col justify-evenly items-center w-full">
                    <h1 className='text-5xl underline decoration-yellow-500'>Skills</h1>
                    <p className='mt-3 text-2xl  font-[Helvetica_Now_Display]'>Learning New Skills Everyday.... </p>
                  </div>
                  <div className=' h-[35rem] flex flex-row  justify-evenly w-full overflow-hidden'>
                    <img className='scale-[1.3] hover:scale-[1.5] transition-all duration-1200 ease-out h-full ' src="./frontend.png" alt="" />
                    <img className='scale-[1.3] hover:scale-[1.5] transition-all duration-1200 ease-out h-full' src="./backend.png" alt="" />
                    <img className='scale-[1.3] hover:scale-[1.5] transition-all duration-1200 ease-out h-full' src="./tools.png" alt="" />
                  </div>
                  <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </div>
  )
}

export default Skills