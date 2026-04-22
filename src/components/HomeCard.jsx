import React from "react";

const HomeCard = ({ title, technology, id }) => {
  return (
    <div className="text-[#e5e5e5] h-fit md:min-w-60 bg-[#171717] flex flex-col justify-center md:gap-3 cursor-context-menu font-['Space_Grotesk'] px-3 py-3 pr-15 lg:min-w-45 xl:min-w-65  lg:pr-0  md:py-5 xl:py-7 border-l-2 border-[#6d6a6ac9] hover:border-[#e9c349] hover:bg-linear-to-r from-[#e9c44922] to-[#171717]" 
    id={`card-${id}`}>
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