import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light" );
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className="nav">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* Ang toggle button ay nasa loob ng listahan para laging katabi ng Contact */}
        <li className="theme-toggle-wrapper">
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}