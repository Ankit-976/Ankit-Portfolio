import gsap from "gsap";
import { useEffect, useRef } from "react";

const CursorFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(followerRef.current, "x", { duration: 0.5 });
    const yTo = gsap.quickTo(followerRef.current, "y", { duration: 0.5 });

    const handleFollower = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleFollower);

    return () => {
      window.removeEventListener("mousemove", handleFollower);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="h-3 w-3 lg:flex hidden bg-[#f7cd46] z-0 rounded-full pointer-events-none fixed top-0 left-0"
    ></div>
  );
};

export default CursorFollower;
