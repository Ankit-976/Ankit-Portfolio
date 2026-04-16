import ProjectCardItems from "./ProjectCardItems";
import { RiArrowRightUpLine, RiCodeSSlashLine } from "@remixicon/react";

const ProjectCard = ({ project, length }) => {

  return (
    <div className="w-130 p-6 flex flex-col gap-9">
      <div className="relative overflow-hidden">
        <img src={`${project.imgSrc}`} className=" aspect-auto"/>
        <span className="absolute top-3 right-3 bg-[#503e00] border border-[#c99a00] p-0.5 text-[0.8rem] font-semibold text-[#e9c349] px-3">
        MISSION: {project.projectCondition}
      </span>
      </div>
      <div className="flex justify-between items-start">
        <span className="text-3xl font-bold">{project.title}</span> <span className="text-[0.8rem] text-[#9f9f9fc3] font-semibold">00{project.id}/0{length}</span>
      </div>
      <div className="font-['Inter'] flex flex-col gap-5">
        <p className="text-[#9f9f9fc3]">
            <span className="font-semibold text-[#b4b2b2]">Objective: </span>{project.objective}
        </p>
        <p className="text-[#9f9f9fc3]">
            <span className="font-semibold text-[#b4b2b2]">Deployment: </span>{project.deployment}
        </p>
      </div>
      <div className='flex gap-3 flex-wrap'>
        {project.techs.map((item) => {
            return <ProjectCardItems key={item.id} name={item.name} />
        })}
      </div>
      <div className="flex gap-20 justify-start">
        <a href={project.liveLink} target="_blank" className="text-[1.1rem] tracking-wider text-[#e9c349] font-semibold flex items-center">LIVE DEMO<RiArrowRightUpLine className="h-5" /></a>
        <a href={project.githubLink} target="_blank" className="text-[1.1rem] tracking-wider text-[#939292] font-semibold flex items-center gap-1">GITHUB<RiCodeSSlashLine className="h-5" /></a>
      </div>
    </div>
  );
};

export default ProjectCard;
