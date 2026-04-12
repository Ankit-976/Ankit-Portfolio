import React from 'react'
import AboutCardItems from './AboutCardItems'
import TerminalButton from './TerminalButton'

const AboutCard = ({ title, module, items}) => {
    
  return (
    <div className='font-["Space_Grotesk"] max-w-130 bg-ed-800 flex flex-col gap-5 p-2'>
      <div className='flex justify-between items-end'>
        <span className='block font-semibold  md:text-[1.3rem]'>{title}</span>
        <span className={`block text-[0.7rem] md:text-[0.8rem] font-semibold`} style={{color:module === "IN FILTRATION" ? "#e9c449d5" : "#6d6a6ac9"}}>{module}</span>
      </div>
      <div className='flex gap-3 flex-wrap'>
        {items.map((item) => {
            return <AboutCardItems key={item.id} message={item.message} color={item.color} />
        })}
        {module === "IN FILTRATION" && <TerminalButton />}
      </div>
    </div>
  )
}

export default AboutCard