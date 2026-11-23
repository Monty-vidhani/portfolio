import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';
import useSound from 'use-sound';


const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
   const [click] = useSound('/click.mp3') ;
  // const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
     { id: "contact", label: "Contact" }
  ];
    const handleMenuItemClick = (sectionId) => {
    // setActiveSection(sectionId);
    // setIsOpen(false);
    click();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
        <div className="navbar text-2xl flex items-center justify-around text-white top-0 left-0 fixed z-[10] backdrop-blur-md bg-white/30 dark:bg-white/10  h-[10%] w-full shadow-lg p-2">
      <h4 ><button className={`cursor-pointer hover:text-[#ffa200]` } onClick={() => handleMenuItemClick("landing")}>Neeraj Vidhani</button></h4>
       <ul className=" md:flex gap-5 ">
          {menuItems.map((item) => (
            <li
              key={item.id}
              // className={`cursor-pointer hover:text-[#ffa200]` }
            >
              <button 
              className={`cursor-pointer hover:text-[#ffa200]` }
              onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
          <div 
            onClick={()=>{click()}} className="hidden md:flex space-x-4">
          <a
       
            href="https://github.com/Monty-vidhani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffa200]"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/neeraj-vidhani/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffa200]"
          >
            <FaLinkedin size={28} />
          </a>
           <a
            href="https://leetcode.com/u/NEERAJ_VIDHANI-18/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffa200]"
          >
            <SiLeetcode size={28} />
          </a>
        </div>
    </div>
  )
}

export default NavBar
