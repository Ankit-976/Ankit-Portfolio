import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const frontendSkills = [
    { name: "HTML / CSS", val: 85 },
    { name: "Javascript", val: 75 },
    { name: "React", val: 50 },
    { name: "Tailwind CSS", val: 90 },
    { name: "GSAP", val: 60 },
  ];

  const backendSkills = [
    {
      title: "NODE.JS",
      desc: "Asynchronous event-driven runtime integration.",
    },
    {
      title: "EXPRESS",
      desc: "Minimalist web framework for API routing.",
    },
    {
      title: "MONGODB",
      desc: "NoSQL database modeling and architecture.",
    },
  ];

useEffect(() => {
  frontendSkills.forEach((skill, i) => {
    // Animate bar width
    gsap.to(`#skill-bar-${i}`, {
      width: `${skill.val}%`,
      duration: 6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#skills",
        start: "-10% top",
      },
    });

    // Animate percentage number
    const counter = { val: 0 }; 
    gsap.to(counter, {
      val: skill.val,
      duration: 6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#skills",
        start: "-10% top"
      },
      onUpdate: () => {
        const el = document.getElementById(`skill-val-${i}`);
        if (el) el.textContent = `${Math.round(counter.val)}%`;
      },
    });
  });
}, []);
  
  return (
    <div
      className="min-h-screen text-white pt-20 px-7 md:px-10 lg:px-20 flex flex-col md:gap-10 lg:gap-15 gap-0 py-10 data-section"
      id="skills"
    >
      <div className='flex flex-col md:gap-5 font-["Space_Grotesk"]'>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 md:gap-4 px-1">
            <span className="block h-[0.05rem] w-7 md:w-12 bg-[#e9c349] opacity-60"></span>
            <span className='block text-[#e9c349] font-["Space_Grotesk"] text-[0.7rem] opacity-60'>
              INTEL BRIEF: CAPABILITIES
            </span>
          </div>
        </div>
        <h1 className="text-6xl/20 sm:text-7xl/15 md:text-[7rem]/25 tracking-tight">
          TECHNICAL
        </h1>
        <h1 className="md:text-[7rem]/25 sm:text-7xl/25 text-6xl/20 text-[#e9c349] tracking-tight">
          ARSENAL
        </h1>
      </div>
      <div>
        <p className="text-[#afafaf] font-['Inter'] max-w-190 text-wrap md:text-[1.3rem]">
          Surgical precision in digital architecture. A curated stack Of
          technologies deployed for high-performance interface design and
          scalable infrastructure.
        </p>
      </div>
      <div className=" w-full h-full text-white flex flex-col lg:flex-row font-[Space_Grotesk]">
        <div className="relative w-full lg:w-[65%] md:pr-6 lg:pr-12 border-r md:p-10 p-5 bg-linear-to-t from-[#171616] to-black z-0 border-[#1a1a1a]">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl flex flex-col md:text-5xl font-semibold mb-10">
              Frontend{" "}
              <span className="text-[#e9c349] text-base md:text-lg">
                [DEPLOYED]
              </span>
            </h1>
            <span className=" absolute flex text-[0.8rem] md:text-[0.8rem]/1 font-semibold tracking-tight text-[#9f9f9f64] flex-nowrap right-5 top-5">
              SECTOR_01 // INTERFACE
            </span>
          </div>
          <div className="grid grid-cols-1 bg-linear-to-t from-[#131005] to-black  pb-20 md:pb-50 md:grid-cols-2 gap-8">
            {frontendSkills.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>{item.name}</span>
                  <span className="text-[#e9c349]" id={`skill-val-${i}`}>0%</span>
                </div>

                <div className="w-full h-0.5 bg-[#2a2a2a]">
                  <div
                    className="h-full bg-[#e9c349]"
                    id={`skill-bar-${i}`}
                    style={{ width: `0%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" relative w-full lg:w-[35%] mt-12 lg:mt-0 lg:pl-12 bg-[#9f9f9f34] p-10">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl md:text-5xl font-semibold mb-10 flex flex-col">
              Backend{" "}
              <span className="text-gray-500 text-base md:text-lg">
                [IN PROGRESS]
              </span>
            </h1>
            <span className="absolute right-5 top-5 block text-[0.8rem] md:text-[0.8rem]/1 font-semibold tracking-tight text-[#9f9f9f64] flex-nowrap">
              SECTOR_02 // CORE
            </span>
          </div>
          <div className="space-y-8">
            {backendSkills.map((item, i) => (
              <div key={i}>
                <span className="text-xs px-3 py-1 border border-[#2a2a2a] bg-[#141414] text-gray-300 inline-block mb-2">
                  {item.title}
                </span>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 border border-[#2f2f2f] h-42.5 relative flex items-center justify-center text-xs tracking-widest text-[#e9c349]">
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="border border-[#3c3b3b]" />
              ))}
            </div>
            SYNCING_CORE...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
