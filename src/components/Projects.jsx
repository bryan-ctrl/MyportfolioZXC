import React, { useState } from "react";
// I-import ang lahat ng images
import projectImage1 from "../assets/image.png";
import projectImage2 from "../assets/image2.png";
import projectImage3 from "../assets/image3.png";

export default function Projects() {
  const projectList = [
    {
      title: "SMILE Admin System",
      description:
        "An admin dashboard UI built with React featuring authentication, role-based access, and clean user experience.",
      github: "https://github.com/KazuhiraXanxus/SMILE-Frontend",
      // Listahan ng images para sa project na ito
      images: [projectImage1, projectImage2, projectImage3],
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">My Project</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

// Sub-component para sa bawat Card para independent ang state ng bawat project
function ProjectCard({ project }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleImageClick = () => {
    // FORMULA: (current + 1) % total_length
    // Ito ay mag-iikot sa 0, 1, 2, tapos babalik sa 0.
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  return (
    <div className="project-card">
      {/* Image Wrapper na may Click Event */}
      <div 
        className="project-image-wrapper" 
        onClick={handleImageClick}
        style={{ cursor: "pointer", position: "relative" }}
      >
        <img
          src={project.images[currentImgIndex]}
          alt={`${project.title} screenshot ${currentImgIndex + 1}`}
          className="project-image"
          title="Click to see next image"
        />

        {/* Optional: Indicator Dots para sa User Experience */}
        <div className="image-indicators">
          {project.images.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentImgIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}