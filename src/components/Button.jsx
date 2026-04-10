import React from "react";

const Button = (props) => {
  const textColor = props.color === "#000000" ? "white" : "black";

  return (
    <div
      className={` ${textColor === 'white' ? 'text-white' : 'text-black'}  h-12 w-32 md:w-40 flex justify-center items-center border border-[#e9c349] cursor-pointer font-['Space_Grotesk'] tracking-wider text-[0.8rem] font-semibold`}
      style={{backgroundColor: props.color}}
    >
      {props.message}
    </div>
  );
};

export default Button;
