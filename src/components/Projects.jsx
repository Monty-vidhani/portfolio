import React from 'react'
import CardCarousel from './CardCarousel';

const Projects = () =>{


  return (
      <div id='projects' className="w-full flex border-b-2 items-center justify-center bg-black">
            <div className="cntnr flex flex-col items-center h-full pt-20 relative text-white w-full ">
                  <div className="heading flex  flex-col justify-evenly items-center w-full">
                    <h1 className='text-5xl underline decoration-yellow-500'>Projects</h1>
                    <p className='mt-3 text-2xl  font-[Helvetica_Now_Display]'>Some things I have worked on</p>
                  </div>
                  <div className=' h-[35rem] flex flex-row projectCards justify-center   items-center w-full overflow-hidden'>
                    <CardCarousel/>
                  </div>
                  <div className="btmbar text-white absolute bottom-0 left-0 w-full py-8 px-10 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
          </div>
  )
}

export default Projects