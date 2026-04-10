import React, { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import About from './pages/About'

const Layout = () => {
    const navLogoRef = useRef(null)

    const [loading, setLoading] = useState(true)

  return (
    <div>
        <Navbar navLogoRef={navLogoRef}/>
        {loading && <Preloader setLoading={setLoading} navLogoRef={navLogoRef}/>}
        <Home />
        <About />
    </div>
  )
}

export default Layout