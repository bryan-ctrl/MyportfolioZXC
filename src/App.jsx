import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'
import './styles/app.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200) 

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="portfolio-wrapper">
      {/* --- TECH GRID BACKGROUND LAYER --- */}
      <div className="bg-fixed-layer">
        <div className="grid-overlay"></div>
        <div className="spotlight-mask"></div>
        
        {/* Floating Icons/Assets - Gamit ang FontAwesome icons */}
        <div className="floating-asset asset-react">
          <i className="fab fa-react"></i>
        </div>
        <div className="floating-asset asset-node">
          <i className="fab fa-node-js"></i>
        </div>
        <div className="floating-asset asset-next">
          <span>N</span>
        </div>
      </div>

      {/* --- MAIN CONTENT LAYER --- */}
      <div className="content-layer">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App