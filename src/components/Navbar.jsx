import React, { useEffect, useRef } from 'react'
import BatLogo from "../assets/logobatman.png";
import { lenis } from "../Layout"

const Navbar = ({ navLogoRef }) => {

    function scrollTo(section) {
      lenis.scrollTo(`#${section}`, {
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    };
    
  return (
    <div className='fixed top-0 w-full h-8 md:h-13 flex items-center justify-between px-2 md:px-15 z-20 bg-black'>
        <div><img ref={navLogoRef} src={BatLogo} className='h-6 md:h-8 md:cursor-pointer' /></div>
        <div>
            <ul className='hidden md:flex md:gap-10 font-["Inter"] md:text-[0.9rem] md:text-[#e5e5e5] md:tracking-widest md:cursor-pointer'>
                <li className='group' onClick={() => scrollTo("home")}>
                  HOME
                  <span className='block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out'></span>
                </li>
                <li className='group' onClick={() => scrollTo("about")}>
                  ABOUT
                  <span className='block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out'></span>
                </li>
                <li className='group' onClick={() => scrollTo("skills")}>
                  SKILLS
                  <span className='block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out'></span>
                </li>
                <li className='group' onClick={() => scrollTo("projects")}>
                  PROJECTS
                  <span className='block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out'></span>
                </li>
                <li className='group' onClick={() => scrollTo("contact")}>
                  CONTACT
                  <span className='block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out'></span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
