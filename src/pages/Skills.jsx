import React from "react";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML / CSS", val: 99 },
    { name: "Javascript", val: 95 },
    { name: "React", val: 92 },
    { name: "Tailwind CSS", val: 98 },
    { name: "GSAP", val: 85 },
    { name: "Lenis", val: 90 },
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
  return (
    <div
      className="min-h-screen text-white pt-20 px-7 md:px-20 flex flex-col md:gap-15 gap-0 py-10 data-section"
      id="skills"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-2 md:gap-4 px-1">
          <span className="block h-[0.05rem] w-7 md:w-12 bg-[#e9c349] opacity-60"></span>
          <span className='block text-[#e9c349] font-["Space_Grotesk"] text-[0.7rem] opacity-60'>
            INTEL BRIEF: CAPABILITIES
          </span>
        </div>
      </div>
      <div className='flex flex-col gap-5 font-bold font-["Space_Grotesk"]'>
        <h1 className="text-7xl/20 md:text-[7rem]/25 tracking-tight">
          TECHNICAL
        </h1>
        <h1 className="md:text-[7rem] text-7xl/20 text-[#e9c349] tracking-tight">
          ARSENAL
        </h1>
      </div>
      <div>
        <p className="text-[#afafaf] font-['Inter'] max-w-190 text-wrap text-[1.3rem]">
          Surgical precision in digital architecture. A curated stack Of
          technologies deployed for high-performance interface design and
          scalable infrastructure.
        </p>
      </div>
      <div className="w-full h-full text-white flex flex-col lg:flex-row font-[Space_Grotesk]">
        <div className="w-full lg:w-[65%] pr-6 lg:pr-12 border-r p-10 border-[#1a1a1a]">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl md:text-5xl font-semibold mb-10">
            Frontend{" "}
            <span className="text-yellow-400 text-base md:text-lg">
              [DEPLOYED]
            </span>
          </h1>
          <span className="block text-[0.8rem] md:text-[0.8rem]/1 font-semibold tracking-tight text-[#9f9f9f64] flex-nowrap">
            SECTOR_01 // INTERFACE
          </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frontendSkills.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>{item.name}</span>
                  <span className="text-yellow-400">{item.val}%</span>
                </div>

                <div className="w-full h-0.5 bg-[#2a2a2a]">
                  <div
                    className="h-full bg-yellow-400"
                    style={{ width: `${item.val}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 h-27.5 border border-[#1a1a1a] bg-[#0f0f0f] opacity-40 flex items-center justify-center text-xs tracking-widest text-gray-500">
            WAVEFORM_LOADING...
          </div>
        </div>
        <div className="w-full lg:w-[35%] mt-12 lg:mt-0 lg:pl-12 bg-[#9f9f9f34] p-10">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl md:text-5xl font-semibold mb-10 flex flex-col">
            Backend{" "}
            <span className="text-gray-500 text-base md:text-lg">
              [IN PROGRESS]
            </span>
          </h1>
          <span className="block text-[0.8rem] md:text-[0.8rem]/1 font-semibold tracking-tight text-[#9f9f9f64] flex-nowrap">
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
          <div className="mt-16 border border-[#1a1a1a] h-42.5 relative flex items-center justify-center text-xs tracking-widest text-yellow-500">
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="border border-[#2a2a2a]" />
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
