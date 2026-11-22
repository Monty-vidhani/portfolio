import { useEffect, useState } from 'react'
import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import NavBar from './components/NavBar';
import Animation from './components/Animation';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Curser from './components/Curser';
// import { Cursor } from 'react-simple-typewriter';


function App() {
 let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 60,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".landing", {
      scale: 1.1,
      x:0,
      y:0,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.4,
      x: "-50%",
      bottom: "-64%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 0.7,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const landing = document.querySelector(".landing");

    landing?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      // gsap.to(".main .text", {
      //   x: `${xMove * 0.4}%`,
      // });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);
  return (
   <>
      <NavBar/> 
      <Animation/>
      {showContent && (
      <>  
     
        {/* <div className="main w-full h-full rotate-[-10deg] scale-[1.7]"> */}
        <LandingPage/>
        {/* </div> */}
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
        </>
      )}
   </>
  )
}

export default App
