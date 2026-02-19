import React from "react";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-content">
        <h2 className="footer-title">Contact Me</h2>
        <p className="footer-subtitle">
          I'm currently open for new opportunities or collaborations. 
          Feel free to reach out through my socials!
        </p>

        {/* Social Links with Icons */}
        <div className="footer-socials">
          <a 
            href="https://www.facebook.com/bryanpacuan10" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a 
            href="https://www.instagram.com/bryanpacuan/" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a 
            href="https://www.linkedin.com/in/bryan-pacu-an-b35631217/" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a 
            href="https://github.com/bryan-ctrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>

          <a href="mailto:bryaninformation10@gmail.com" title="Email Me">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {currentYear} Bryan S. Pacu-an. All rights reserved.
      </div>
    </footer>
  );
}