import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import BatLogo from "../assets/logobatman.png";

const Preloader = ({ setLoading, navLogoRef }) => {
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!navLogoRef.current) return;
    gsap.set(lineRef.current, {
      scaleX: 0,
      transformOrigin: "center",
    });
    gsap.set(logoRef.current, {
      scaleX: 0,
      transformOrigin: "center center",
    });
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setLoading(false);
        }, 100);
      },
    });
    tl.to({}, { duration: 0.5 });

    tl.to(logoRef.current, {
      scaleX: 1,
      opacity: 0.4,
      duration: 2,
      ease: "power2.inOut",
    }).to(
      lineRef.current,
      {
        scaleX: 1,
        duration: 5,
        ease: "power2.inOut",
      },
      "<",
    );

    tl.to(logoRef.current, {
      x: () => {
        if (!navLogoRef.current || !logoRef.current) return 0;
        const navLogoRect = navLogoRef.current.getBoundingClientRect();
        const logoRect = logoRef.current.getBoundingClientRect();
        return (
          navLogoRect.left +
          navLogoRect.width / 2 -
          (logoRect.left + logoRect.width / 2)
        );
      },
      y: () => {
        if (!navLogoRef.current || !logoRef.current) return 0;
        const navLogoRect = navLogoRef.current.getBoundingClientRect();
        const logoRect = logoRef.current.getBoundingClientRect();
        return (
          navLogoRect.top +
          navLogoRect.height / 2 -
          (logoRect.top + logoRect.height / 2)
        );
      },
      scale: () => {
        if (!navLogoRef.current || !logoRef.current) return 1;
        const navLogoRect = navLogoRef.current.getBoundingClientRect();
        const logoRect = logoRef.current.getBoundingClientRect();
        return navLogoRect.width / logoRect.width;
      },
      duration: 2,
      ease: "power2.inOut",
    }).to(
      ".postLogoFade",
      {
        opacity: 0,
        duration: 1.5,
      },
      "<",
    );

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power5.out",
    });

    return () => {
      tl.kill();
    };
  }, [navLogoRef.current]);

  return (
    <div
      ref={containerRef}
      className="preloader fixed top-0 bg-black z-50 left-0 h-screen w-screen flex justify-center items-center cursor-none"
    >
      <div className="flex flex-col items-center gap-5 md:gap-10">
        <div className="flex justify-center">
          <img ref={logoRef} src={BatLogo} className="h-13 md:h-20 opacity-40" />
        </div>
        <div className="flex postLogoFade flex-col items-center text-xl md:text-2xl font-['Space_Grotesk'] tracking-widest md:tracking-[0.4rem] md:gap-2 opacity-80 text-[#cbcbcb]">
          DISCIPLINE OVER FEAR.
          <div className="h-0.5 w-45 md:w-55 relative bg-[#1f1f1f]">
            <div
              ref={lineRef}
              className="bg-[#e9c349] absolute top-0 h-full w-full"
            ></div>
          </div>
        </div>
        <div className="flex postLogoFade justify-around items-center w-full opacity-50 font-['Inter']">
          <div>
            <ul className="flex flex-col tracking-widest items-center text-[0.7rem]/4 font-light">
              <li className="text-[#cbcbcb]">SYSTEM STATUS</li>
              <li className="text-[#e9c349]">ENCRYPTED</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col tracking-widest items-center text-[0.7rem]/4 font-light">
              <li className="text-[#cbcbcb]">IDENTITY</li>
              <li className="text-[#e9c349]">CONFIRMED</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
