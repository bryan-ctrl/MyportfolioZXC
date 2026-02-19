import React from 'react';
import profile from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero-centered">
      {/* Profile Image */}
      <div className="hero-img">
        <img
          src={profile}
          alt="Bryan S. Pacu-an Profile"
        />
      </div>

      {/* Hero Text */}
      <div className="hero-text">
        <h1 className="hero-name">Bryan S. Pacu-an</h1>
        <h2 className="hero-role">Web Developer</h2>

        {/* Resume Button */}
        <div className="hero-actions">
          <a
            href="/resume.pdf"               // file path sa public folder
            target="_blank"                  // open sa new tab
            rel="noopener noreferrer"        // security best practice
            className="btn-resume"
          >
            VIEW RESUME
          </a>
        </div>
      </div>
    </section>
  );
}
