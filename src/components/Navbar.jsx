import React, { useState, useEffect } from "react";

export default function Navbar() {
  // Naka-default tayo sa Dark Mode (true)
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="nav">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* Heto ang Toggle Button sa dulo */}
        <li className="theme-toggle-li">
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}