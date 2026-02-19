import React from "react";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-content">
        <h2 className="footer-title">Contact Me</h2>
        <p>Email: <a href="mailto:bryaninformation10@email.com">bryaninformation10@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/bryan-ctrl" target="_blank" rel="noopener noreferrer">github.com/bryan-ctrl</a></p>
      </div>

      <div className="footer-bottom">
        &copy; {currentYear} Bryan S. Pacu-an. All rights reserved.
      </div>
    </footer>
  );
}
