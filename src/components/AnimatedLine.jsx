import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedLine = () => {
  const initialPath = "M 0 75 Q 650 75 1300 75";
  const svgRef = useRef(null)
  const pathRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    
    const handleMouseMove = (dets) => {
      const rect = svg.getBoundingClientRect();
      const x = dets.clientX - rect.left;
      const y = dets.clientY - rect.top;
      gsap.to(pathRef.current, {
        attr: { d: `M 0 75 Q ${x} ${y} 1300 75` },
        duration: 0.2,
        overwrite:"auto",
        ease: "power3.out"
      });
    }

    const handleMouseLeave = () => {
      gsap.to(pathRef.current, {
        attr: { d: initialPath },
        duration: 1.8,
        ease: "elastic.out(1,0.3)",
      });
    }

    svg.addEventListener("mousemove",handleMouseMove);
    svg.addEventListener("mouseleave",handleMouseLeave);

    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="xl:flex hidden justify-center">
      <svg ref={svgRef} height="150" width="1300" id="stringBox">
        <path ref={pathRef} d={initialPath} stroke="#e9c349" fill="none" strokeWidth="3" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
};

export default AnimatedLine;
