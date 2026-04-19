import { useEffect, useState } from "react";
import BatLogo from "../assets/logobatman.png";
import { lenis } from "../Layout";

const Navbar = ({ navLogoRef }) => {
  const [activeView, setActiveView] = useState("home");

  useEffect(() => {
  const sections = document.querySelectorAll(".data-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveView(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-40% 0px -40% 0px",
    }
  );

  sections.forEach((sec) => observer.observe(sec));

  return () => {
    sections.forEach((sec) => observer.unobserve(sec));
  };
}, []);

  function scrollTo(section) {
    lenis.scrollTo(`#${section}`, {
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
    setActiveView(section);
  }

  return (
    <div className="fixed top-0 w-full h-8 md:h-13 flex items-center justify-between px-2 md:px-15 z-20 backdrop-blur-3xl">
      <div>
        <img
          ref={navLogoRef}
          src={BatLogo}
          className="h-6 md:h-8 md:cursor-pointer"
        />
      </div>
      <div>
        <ul className='hidden md:flex md:gap-10 font-["Inter"] md:text-[0.9rem] md:text-[#e5e5e5] md:tracking-widest md:cursor-pointer'>
          <li
            className={`group ${
              activeView === "home" ? "text-[#e9c349]" : "text-white"
            }`}
            onClick={() => scrollTo("home")}
          >
            HOME
            <span className="block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out"></span>
          </li>
          <li
            className={`group ${
              activeView === "about" ? "text-[#e9c349]" : "text-white"
            }`}
            onClick={() => scrollTo("about")}
          >
            ABOUT
            <span className="block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out"></span>
          </li>
          <li
            className={`group ${
              activeView === "skills" ? "text-[#e9c349]" : "text-white"
            }`}
            onClick={() => scrollTo("skills")}
          >
            SKILLS
            <span className="block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out"></span>
          </li>
          <li
            className={`group ${
              activeView === "projects" ? "text-[#e9c349]" : "text-white"
            }`}
            onClick={() => scrollTo("projects")}
          >
            PROJECTS
            <span className="block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out"></span>
          </li>
          <li
            className={`group ${
              activeView === "contact" ? "text-[#e9c349]" : "text-white"
            }`}
            onClick={() => scrollTo("contact")}
          >
            CONTACT
            <span className="block h-0.5 w-0 md:bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
