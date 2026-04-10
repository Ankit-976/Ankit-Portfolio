import React, { useEffect, useRef } from 'react'
import BatLogo from "../assets/logobatman.png";

const Navbar = ({ navLogoRef }) => {
    
  return (
    <div className='fixed top-0 w-full md:h-13 md:flex md:items-center md:justify-between md:px-15 z-20 md:bg-black'>
        <div><img ref={navLogoRef} src={BatLogo} className='md:h-8 md:cursor-pointer' /></div>
        <div>
            <ul className='flex md:flex md:gap-10 font-["Inter"] md:text-[0.9rem] md:text-[#e5e5e5] md:tracking-widest md:cursor-pointer'>
                <li className='group'>
                  HOME
                  <span className='block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out'></span>
                </li>
                <li className='group'>
                  ABOUT
                  <span className='block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out'></span>
                </li>
                <li className='group'>
                  SKILLS
                  <span className='block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out'></span>
                </li>
                <li className='group'>
                  PROJECTS
                  <span className='block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out'></span>
                </li>
                <li className='group'>
                  CONTACT
                  <span className='block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out'></span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
