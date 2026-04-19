import  { useEffect, useState } from "react";
import bgHome from "../assets/bgHome.png";
import Button from "../components/Button";
import HomeCard from "../components/HomeCard";
import bgHome2 from "../assets/bgHome2.png";

const Home = () => {
  const [notMobile, setNotMobile] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setNotMobile(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {

    if (!notMobile) return;

    Shery.imageEffect(".imageContainer", {
      style: 5,
      gooey: true,
      config: {
        a: { value: 0, range: [0, 30] },
        b: { value: -1, range: [-1, 1] },
        zindex: { value: "0", range: [-9999999, 9999999] },
        aspect: { value: 1.7458866301278648 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: -0.02, y: 0 } },
        shapeScale: { value: { x: 1, y: 0.84 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: false },
        growSize: { value: 13.61, range: [1, 15] },
        durationOut: { value: 0.7, range: [0.1, 5] },
        durationIn: { value: 0.1, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: false },
        maskVal: { value: 1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 8.09, range: [0, 10] },
        metaball: { value: 0.14, range: [0, 2], _gsap: { id: 3 } },
        discard_threshold: { value: 1, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.37, range: [0, 2] },
        noise_scale: { value: 33.59, range: [0, 100] },
      },
    });

  }, [notMobile]);

  const HomeCards = [
    {
      id: 1,
      title: "PRIMARY CORE",
      technology: "React",
    },
    {
      id: 2,
      title: "SYSTEMS",
      technology: "Node.js",
    },
    {
      id: 3,
      title: "STORAGE",
      technology: "MongoDB",
    },
    {
      id: 4,
      title: "LOCATION",
      technology: "22°14' N, 84°52' E",
    },
  ];
  return (
    <div className="relative min-h-screen data-section" id="home">
      <div className="imageContainer hidden lg:block absolute z-[-1] lg:w-full ">
        <img src={bgHome} className=" lg:w-full lg:h-screen object-cover" />
        <img src={bgHome2} className=" lg:w-full lg:h-screen object-cover" />
      </div>
      <div className=" h-fit md:min-h-screen md:w-full z-9 md:absolute flex flex-col items-start justify-center px-7 md:px-10 lg:px-15 md:gap-10 gap-8 lg:gap-5 xl:px-25 xl:gap-20 py-15 sm:pt-10 md:py-15 xl:py-20"> 
        <div className="md:max-w-180 flex flex-col items-start gap-5 lg:gap-3 xl:gap-5">
          <div className="flex items-center gap-2 md:gap-4 lg:gap-2 xl:gap-4 px-2">
            <span className="block h-[0.05rem] w-7 md:w-12 bg-[#e9c349] opacity-60"></span>
            <span className='block text-[#e9c349] font-["Space_Grotesk"] sm:tracking-wider md:tracking-widest sm:text-[0.8rem] text-[0.7rem] opacity-60'>
              ACCESSING PERSONNEL FILE // 042
            </span>
          </div>
          <h1 className='font-["Space_Grotesk"] sm:text-9xl/30 md:text-[10rem]/35 text-8xl/20 lg:text-[8.5rem]/28 xl:text-[10rem]/35 font-semibold tracking-tighter text-[#e5e5e5]'>
            ANKIT <br className="sm:block hidden"/> BASA
          </h1>
          <div className="flex flex-col gap-2">
            <span className='text-[#efefef] md:text-4xl lg:text-[2rem] xl:text-4xl text-3xl font-["Space_Grotesk"]'>
              Frontend Developer
            </span>
            <p className='text-[#9f9f9fc3] md:text-xl lg:text-[1rem] xl:text-xl font-["Inter"]'>
              Crafting immersive front-end experiences while{" "}
              <br className="md:flex hidden" /> architecting the logic of
              tomorrow.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-10 w-full">
            <Button message={"VIEW PROJECTS"} color={"#e9c349"} section={"projects"} />
            <Button message={"CONTACT ME"} color={"#000000"} section={"contact"}/>
          </div>
        </div>
        <div className="flex gap-5 md:gap-10 flex-wrap xl:flex-nowrap">
          {HomeCards.map((card) => {
            return (
              <HomeCard
                key={card.id}
                title={card.title}
                technology={card.technology}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
