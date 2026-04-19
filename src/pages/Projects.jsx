import ProjectCard from "../components/ProjectCard";
import project1img from "../assets/project1.png";
import project2img from "../assets/project2.png";
import { RiArrowDropDownLine } from "@remixicon/react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      projectCondition: "STABLE",
      imgSrc: project1img,
      title: "FLORA PROTOCOL",
      objective:
        "Frontend focused e-commerce experience for a boutique florist. Focused on elegant UI and smooth transitions.",
      deployment: "Deployed using Vercel",
      techs: [
        {
          id: 1.1,
          name: "REACT",
        },
        {
          id: 1.2,
          name: "TAILWIND CSS",
        },
        {
          id: 1.3,
          name: "GSAP",
        },
      ],
      liveLink: "https://od-fulawala.vercel.app/",
      githubLink: "https://github.com/Ankit-976/OD_Fulawala",
    },
    {
      id: 2,
      projectCondition: "IN DEVELOPMENT",
      imgSrc: project2img,
      title: "CULINARY STREAM",
      objective:
        "Backend focused instagram-inspired vertical video feed for food partners and regular users.",
      deployment: "Deployed backend using Render and frontend using Vercel.",
      techs: [
        {
          id: 2.1,
          name: "REACT",
        },
        {
          id: 2.2,
          name: "TAILWIND CSS",
        },
        {
          id: 2.3,
          name: "NODE.JS",
        },
        {
          id: 2.4,
          name: "EXPRESS.JS",
        },
        {
          id: 2.5,
          name: "MONGODB",
        },
      ],
      liveLink: "https://food-reel-frontend-theta.vercel.app/ ",
      githubLink: "https://github.com/Ankit-976 ",
    },
  ];
  return (
    <div
      className="data-section text-white md:min-h-screen flex flex-col justify-center px-7 lg:px-20 gap-2 sm:gap-8 md:gap-10 xl:gap-15 md:pt-20 lg:pt-40 xl:pt-20 py-10 sm:pt-0 "
      id="projects"
    >
      <div className="flex flex-col gap-2 md:gap-0 font-['Space_Grotesk']">
        <div className="flex items-center gap-2 md:gap-4 px-1">
          <span className="block h-[0.05rem] w-7 md:w-12 bg-[#e9c349] opacity-60"></span>
          <span className='block text-[#e9c349] font-["Space_Grotesk"] text-[0.7rem] opacity-60'>
            IDENTITY VERIFIED // ACCESS GRANTED
          </span>
        </div>
        <h1 className="text-4xl/10 sm:text-7xl/20 md:text-[7rem]/25 tracking-tighter">
          SELECTED
        </h1>
        <div className="md:text-[7rem]/25 sm:text-7xl/20 text-4xl/10 text-[#e9c349] tracking-tighter font-['Space_Grotesk']">
          WORKS_024
        </div>
      </div>
      <div>
        <p className="text-[#afafaf] font-['Inter'] max-w-200 text-wrap md:text-[1.3rem]">
          A surgical display of high-performance engineering. These projects
          represent the intersection of classified complexity and cinematic
          precision.
        </p>
      </div>
      <div className="bg-[#0e0e0e] flex flex-wrap xl:flex-nowrap justify-around font-['Space_Grotesk']">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              project={project}
              length={projects.length}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-between sm:px-6 font-['Space_Grotesk']">
        <span className="text-[#939292] text-[0.7rem] md:text-[0.9rem] font-semibold">
          Page 01/01
        </span>
        <span className="text-[#232323] cursor-wait font-semibold h-fit flex py-2 md:py-2.5 px-2 md:px-5 items-center w-fit tracking-widest text-[0.7rem] md:text-[0.9rem] bg-[#e9c349]">
          PROJECTS COMING
          <RiArrowDropDownLine />
        </span>
      </div>
    </div>
  );
};

export default Projects;
