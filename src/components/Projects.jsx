import React, { useState } from "react";

// Project 1 Images
import projectImage1 from "../assets/image.png";
import projectImage2 from "../assets/image2.png";
import projectImage3 from "../assets/image3.png";
import projectImage4 from "../assets/image4.png";
import projectImage5 from "../assets/image5.png";

// Capstone Project Images (1-12)
import m1 from "../assets/mariwska1.png";
import m2 from "../assets/mariwska2.png";
import m3 from "../assets/mariwska3.png";
import m4 from "../assets/mariwska4.png";
import m5 from "../assets/mariwska5.png";
import m6 from "../assets/mariwska6.png";
import m7 from "../assets/mariwska7.png";
import m8 from "../assets/mariwska8.png";
import m9 from "../assets/mariwska9.png";
import m10 from "../assets/mariwska10.png";
import m11 from "../assets/mariwska11.png";
import m12 from "../assets/mariwska12.png";

export default function Projects() {
  const projectList = [
    {
      title: "E-COMMERCE WEB APP",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"], 
      images: [projectImage1, projectImage2, projectImage3, projectImage4, projectImage5],
    },
    {
      title: "Capstone Project",
      techStack: ["REACT.JS", "Material UI", "JavaScript", "NODE.JS"],
      images: [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      {/* Floating Background Particles */}
      <div className="bg-icons">
        <i className="devicon-nodejs-plain floating-icon proj-node"></i>
        <i className="devicon-mongodb-plain floating-icon proj-mongo"></i>
        <i className="devicon-javascript-plain floating-icon proj-js"></i>
        <i className="devicon-react-original floating-icon proj-react"></i>
        <i className="devicon-github-original floating-icon proj-github"></i>
      </div>

      <div className="section-header reveal">
        <h2 className="section-title">My Projects</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="projects-container">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  return (
    <div className="project-card reveal">
      <div className="project-card-inner">
        <h3 className="project-title-top">{project.title}</h3>

        <div className="project-image-wrapper" onClick={handleImageClick}>
          <img
            key={currentImgIndex} 
            src={project.images[currentImgIndex]}
            alt={`${project.title} screenshot`}
            className="project-image slide-animation"
          />
          
          <div className="image-indicators">
            {project.images.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentImgIndex ? "active" : ""}`}
              ></span>
            ))}
          </div>
          
          <div className="click-hint">Click image to slide</div>
        </div>

        <div className="project-content">
          <div className="tech-badges">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}