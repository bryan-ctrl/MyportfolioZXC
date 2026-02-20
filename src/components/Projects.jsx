import React, { useState } from "react";
import projectImage1 from "../assets/image.png";
import projectImage2 from "../assets/image2.png";
import projectImage3 from "../assets/image3.png";
import projectImage4 from "../assets/image4.png";
import projectImage5 from "../assets/image5.png";

export default function Projects() {
  const projectList = [
    {
      title: "SMILE Admin System",
      // In-update ang description ayon sa request mo
      description: "Barangay Maligaya is a lively semi-urban community close to a provincial capital. It's home to market vendors, sari-sari store owners, and young freelancers. The community thrives on local trade and digital connectivity, making it a hub of growth and resilience in the region.",
      images: [projectImage1, projectImage2, projectImage3, projectImage4, projectImage5],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">My Project</h2>
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
    <div className="project-card">
      <div 
        className="project-image-wrapper" 
        onClick={handleImageClick}
      >
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
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        {/* Malinis na description nang walang GitHub link */}
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
}