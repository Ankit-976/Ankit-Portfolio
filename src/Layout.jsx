import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import About from "./pages/About";
import Lenis from "lenis";

export let lenis;

const Layout = () => {

  useEffect(() => {
        // Initialize Lenis
    lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.05
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
      
    }

    requestAnimationFrame(raf);
      
        return () => {
      lenis.destroy();
    };
  }, [])

  const navLogoRef = useRef(null);

  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Navbar navLogoRef={navLogoRef} />
      {loading && <Preloader setLoading={setLoading} navLogoRef={navLogoRef} />}
      <Home />
      <About />
    </div>
  );
};

export default Layout;
