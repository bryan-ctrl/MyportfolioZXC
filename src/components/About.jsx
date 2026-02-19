export default function About() {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>

      <div className="about-card">
        <p className="about-text">
          I’m Bryan S. Pacu-an, a Web Developer focused on building clean, fast, and
          user-friendly web applications using modern technologies.
        </p>
        <p className="about-text">
            I’m still learning and exploring new tools and frameworks to grow as a developer.
            I believe in consistent practice, building real-world projects, and staying
            updated with modern web development trends. My goal is to become a well-rounded
            developer who creates meaningful and reliable digital experiences.
        </p>


        {/* Grids for Skills and Tools */}
        <div className="about-grids">
          {/* Skills */}
          <div className="info-box large-box">
            <h3>Front End</h3>
            <div className="icon-grid">
              <div className="icon-item">
                <i className="devicon-html5-plain colored"></i>
                <span>HTML</span>
              </div>
              <div className="icon-item">
                <i className="devicon-css3-plain colored"></i>
                <span>CSS</span>
              </div>
              <div className="icon-item">
                <i className="devicon-javascript-plain colored"></i>
                <span>JavaScript</span>
              </div>
              <div className="icon-item">
                <i className="devicon-react-original colored"></i>
                <span>ReactJS</span>
              </div>
              <div className="icon-item">
                <i className="devicon-tailwindcss-plain colored"></i>
                <span>TailwindCSS</span>
              </div>
            </div>
          </div>
          

          {/* Tools */}
          <div className="info-box large-box">
            <h3>Tools</h3>
            <div className="icon-grid">
              <div className="icon-item">
                <i className="devicon-git-plain colored"></i>
                <span>Git</span>
              </div>
              <div className="icon-item">
                <i className="devicon-github-original colored"></i>
                <span>GitHub</span>
              </div>
              <div className="icon-item">
                <i className="devicon-figma-plain colored"></i>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
