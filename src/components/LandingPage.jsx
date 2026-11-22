import React from 'react'
import "remixicon/fonts/remixicon.css";

const LandingPage = () => {
  return (
        <div id='landing' className="landing overflow-hidden relative  w-full h-full bg-black">
         
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-70 left-2/5 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[7rem] leading-none -ml-40">Hi, my name is</h1>
                <h1 className="text-[6rem] leading-none -ml-40">Neeraj Vidhani</h1>
                {/* <h1 className="text-[7rem] leading-none -ml-40">Neeraj Vidhani</h1> */}
                {/* <h1 className="text-[7rem] leading-none ml-20">Developer</h1> */}
              </div>
              <img
                className="absolute character -bottom-[150%]  left-8/10 -translate-x-1/2  scale-[3] rotate-[-20deg]"
                src="./boy.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-8 px-10 bg-gradient-to-t from-black to-transparent">
           
            </div>
          </div>
  )
}

export default LandingPage