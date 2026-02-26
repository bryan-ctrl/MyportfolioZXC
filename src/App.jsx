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
    // 1. LOADER TIMER
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)

    // 2. SCROLL REVEAL (POP-OUT) LOGIC
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 120; // Pixels bago mag-trigger ang pop-out

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    // Pag hindi na loading, start na ang scroll listener
    if (!loading) {
      window.addEventListener("scroll", revealOnScroll);
      // Run once para sa mga elements na nasa viewport na agad
      setTimeout(revealOnScroll, 100); 
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", revealOnScroll);
    }
  }, [loading]);

  if (loading) {
    return <Loader />
  }

  return (
    <div className="portfolio-wrapper">
      {/* --- TECH GRID BACKGROUND LAYER --- */}
      <div className="bg-fixed-layer">
        <div className="grid-overlay"></div>
        <div className="spotlight-mask"></div>
        
        {/* Floating Icons */}
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
        {/* Nilagyan ko ng reveal class ang sections para mag-pop out */}
        <div className="reveal">
          <Hero />
        </div>
        <div className="reveal">
          <About />
        </div>
        {/* Ang Projects card mismo ang may 'reveal' sa loob ng component niya */}
        <Projects /> 
        <div className="reveal">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App