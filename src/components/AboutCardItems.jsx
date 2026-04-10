import React from 'react'

const AboutCardItems = ({ message, color }) => {
  return (
    <div className={`h-fit py-2 md:h-12 text-[#adadad] bg-[#292929] w-fit px-7 flex justify-center items-center border-l-2`} style={{borderColor: color}}>
      {message}
    </div>
  )
}

export default AboutCardItems