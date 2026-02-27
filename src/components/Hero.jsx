import React from 'react';
import profile from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero-split">
      {/* Floating Background Particles */}
      <div className="bg-icons">
        <i className="devicon-react-original floating-icon hero-react"></i>
        <i className="devicon-tailwindcss-plain floating-icon hero-tailwind"></i>
        <i className="devicon-git-plain floating-icon hero-git"></i>
        <i className="devicon-javascript-plain floating-icon hero-js"></i>
      </div>

      <div className="hero-container">
        {/* Left Side: Hero Text */}
        <div className="hero-content">
          <div className="typewriter">
            <h1 className="hero-name">Bryan S. Pacu-an</h1>
          </div>
          <p className="hero-description">
            I'm a <strong>4th year Student</strong> from <strong>National University</strong>, taking up 
            BSIT Major in Mobile and Web Application. I am passionate about building 
            responsive, user-friendly applications and continuous learning in the 
            field of software development.
          </p>

          <div className="hero-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume"
            >
              VIEW RESUME
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="hero-img-container">
          <img
            src={profile}
            alt="Bryan S. Pacu-an Profile"
            className="hero-profile-pic"
          />
        </div>
      </div>
    </section>
  );
}