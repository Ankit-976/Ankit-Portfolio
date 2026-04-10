import  React  from "react";
import exchangeLogo from "../assets/exchange.png";
import codeLogo from "../assets/code.png";
import { useEffect, useState } from "react";

const AboutMissionCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper function for leading zero
  const pad = (num) => String(num).padStart(2, "0");

  // Extract values
  const year = time.getFullYear();
  const month = pad(time.getMonth() + 1);
  const date = pad(time.getDate());

  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  // Final format
  const formattedTime = `${year}.${month}.${date}_${hours}:${minutes}:${seconds}`;
  return (
    <div className="bg-[#131313] w-fit md:w-250 h-fit md:h-105 px-6 md:px-12 py-4 md:py-8 flex flex-col gap-3 md:gap-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className='block font-["Space_Grotesk"] md:text-[1.8rem]/9 tracking-wider'>
            ACTIVE_MISSION
          </span>
          <span className="block text-[0.6rem] md:text-[0.7rem] font-semibold tracking-[0.2rem] md:tracking-[0.3rem] text-[#e9c449da]">
            STATUS: IN PROGRESS
          </span>
        </div>
        <span className="block text-3xl md:text-5xl font-semibold tracking-tight font-['Space_Grotesk'] text-[#afafaf18]">
          LOG_08
        </span>
      </div>
      <hr className="text-[#afafaf0a]  "/>
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <p className='font-semibold font-["Inter"] tracking-wider'>
            Mission: Backend Mastery
          </p>
          <p className='font-["Inter"] text-[#afafafb3] tracking-wide'>
            Deep-dive into server-side architecture and distributed systems.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="block relative w-25 bg-[#afafaf2e] h-[0.15rem]">
            <span className="block absolute bg-[#e9c349] h-full w-[45%]"></span>
          </span>
          <span className="block font-['Space_Grotesk'] text-[0.8rem] font-semibold text-[#e9c349]">
            45% Sync
          </span>
        </div>
      </div>
      <hr className="text-[#afafaf0a]  "/>
      <div className="flex gap-10 md:gap-50 flex-wrap">
        <div className="flex gap-3">
          <img src={exchangeLogo} className="h-4 md:h-5" />
          <div className="flex flex-col md:gap-2">
            <span className="block text-[0.6rem] md:text-[0.75rem]/2 font-semibold font-['Space_Grotesk'] text-[#afafafb3] tracking-widest">
              PROTOCOL 01
            </span>
            <span className="block font-['Inter'] font-semibold text-[0.9rem] md:text-[1rem]">
              Archiving Distributed Systems
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <img src={codeLogo} className="h-6 md:h-7" />
          <div className="flex flex-col md:gap-2">
            <span className="block text-[0.6rem] md:text-[0.75rem]/2 font-semibold font-['Space_Grotesk'] text-[#afafafb3] tracking-widest">
              PROTOCOL 02
            </span>
            <span className="block font-['Inter'] font-semibold md:text-[1rem] text-[0.9rem]">
              Refactoring API Handlers
            </span>
          </div>
        </div>
      </div>
      <hr className="text-[#afafaf18]  "/>
      <div className="flex justify-between flex-wrap gap-2 md:gap-0">
        <span className="block text-[0.7rem] md:text-[0.8rem] font-semibold font-['Space_Grotesk'] tracking-[0.12rem] text-[#afafaf4d]">
          SYSTEM_CHECK: OPTIMAL
        </span>
        <span className="block text-[0.7rem] md:text-[0.8rem] font-semibold font-['Space_Grotesk'] tracking-[0.12rem] text-[#afafaf4d] tabular-nums ">
          TIMESTAMP: {formattedTime}
        </span>
      </div>
    </div>
  );
};

export default AboutMissionCard;
