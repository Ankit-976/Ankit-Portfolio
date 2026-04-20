import React from "react";
import HomeCard from "../components/HomeCard";
import AboutCard from "../components/AboutCard";
import AboutMissionCard from "../components/AboutMissionCard";

const About = () => {

  const aboutCards = [
    {
      id: 1,
      title: "SURFACE_LAYER",
      module: "MODULE: FRONTEND",
      items: [
        {
          id: 1.1,
          message :"HTML",
          color: "#6d6a6ac9"
        },
        {
          id: 1.2,
          message :"CSS",
          color: "#6d6a6ac9"
        },
        {
          id: 1.3,
          message :"JAVASCRIPT",
          color: "#6d6a6ac9"
        },
        {
          id: 1.4,
          message :"REACT",
          color: "#e9c349"
        },
        {
          id: 1.5,
          message :"TAILWIND CSS",
          color: "#6d6a6ac9"
        },
        {
          id: 1.6,
          message :"GSAP",
          color: "#6d6a6ac9"
        }
      ]
    },
    {
      id: 2,
      title: "LOGIC_ENGINE",
      module: "IN FILTRATION",
      items: [
        {
          id: 2.1,
          message :"MONGODB",
          color: "#e9c449a5"
        },
        {
          id: 2.2,
          message :"NODE.JS",
          color: "#e9c449a5"
        },
        {
          id: 2.3,
          message :"EXPRESS",
          color: "#e9c449a5"
        }
      ]
    },
    
  ]
  return (
    <div className="data-section text-white md:min-h-screen flex flex-col justify-center px-7 md:px-10 lg:px-20 gap-2 md:gap-10 xl:gap-15 md:pt-20 lg:py-40 xl:py-20 py-10 sm:pt-0" id="about">
      <div className="flex flex-col font-['Space_Grotesk']">
        <div className="flex items-center gap-2 md:gap-4 px-1">
          <span className="block h-[0.05rem] w-7 md:w-12 bg-[#e9c349] opacity-60"></span>
          <span className='block text-[#e9c349] text-[0.7rem] opacity-60'>
            IDENTITY VERIFIED // ACCESS GRANTED
          </span>
        </div>
        <h1 className="text-8xl/20 md:text-[7rem]/25 tracking-tighter">THE</h1>
      </div>
      <div className="md:text-[7rem]/10 text-8xl/20 text-[#e9c349] tracking-tighter font-['Space_Grotesk']">INTEL</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 md:gap-10 flex-wrap">
          <p className="font-['Inter'] text-[1.1rem] md:text-[1.8rem] text-wrap max-w-220 tracking-wider">
            I am a Frontend Developer dedicated to building immersive digital
            interfaces with <br />
            <span className="text-[#e9c349] underline decoration-[#e9c449a0] underline-offset-4 md:underline-offset-[6px]">
              surgical precision
            </span>.
          </p>
          <HomeCard
            title={"CURRENT DEPLOYMENT"}
            technology={"OPERATIVE_LOCATION: REMOTE_GRID"}
          />
        </div>
        <p className="text-[#afafaf] font-['Inter'] max-w-150 text-wrap">
          Currently expanding my capabilities into the Backend, I believe
          software should be as intentional as architecture—unyielding in
          performance and silent in complexity.
        </p>
      </div>
      <div className="flex items-start gap-5 md:gap-10 xl:gap-40 flex-wrap">
        {aboutCards.map((card) => {
          return <AboutCard key={card.id} title={card.title} module={card.module} items={card.items} />
        })}
      </div>
      <div className="flex">
        <AboutMissionCard />
      </div>
    </div>
  );
};

export default About;
