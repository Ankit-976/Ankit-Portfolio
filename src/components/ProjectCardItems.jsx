import React from 'react'

const AboutCardItems = ({ name }) => {
  return (
    <div className={`h-fit py-1.5 text-[0.9rem] text-[#adadad] bg-[#292929] w-fit px-5 flex justify-center items-center font-semibold`}>
      {name}
    </div>
  )
}

export default AboutCardItems