import React from "react";
import projectImage from "../assets/image.png";

export default function Projects() {
  const projectList = [
    {
      title: "SMILE Admin System",
      description:
        "An admin dashboard UI built with React featuring authentication, role-based access, and clean user experience.",
      github: "https://github.com/KazuhiraXanxus/SMILE-Frontend",
      image: projectImage,
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">My Project</h2>

      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            {/* 1. Image Wrapper - Ito ang magbibigay ng margin/frame sa picture */}
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={`${project.title} UI`}
                className="project-image"
              />
            </div>

            {/* 2. Content Wrapper - Para sa maayos na alignment ng text */}
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
        ))}
      </div>
    </section>
  );
}