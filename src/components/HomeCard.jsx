import React from "react";

const HomeCard = ({ title, technology }) => {
  return (
    <div className="text-[#e5e5e5] w-fit h-fit md:w-65 bg-[#171717] flex flex-col justify-center 
     md:gap-3 font-['Space_Grotesk'] px-3 py-3 md:py-5 border-l-2 border-[#6d6a6ac9] hover:border-[#e9c349]">
      <span className="block text-[0.8rem] md:text-[0.8rem]/1 font-semibold tracking-tight text-[#9f9f9f64]">
        {title}
      </span>
      <span className="block text-[0.9rem]  md:text-[1.1rem] text-[#afafaf]">
        {technology}
      </span>
    </div>
  );
};

export default HomeCard;
