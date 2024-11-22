// Header.js
import React from 'react';


function Header({ activePage, onNavClick }) {
  return (
    <header className="header">
      <h1 className="logo">Dzaki.</h1>
      <nav className="nav">
        <a
          href="#home"
          className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => onNavClick('home')}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`nav-link ${activePage === 'projects' ? 'active' : ''}`}
          onClick={() => onNavClick('projects')}
        >
          Project
        </a>
        <a
          href="#about"
          className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
          onClick={() => onNavClick('about')}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
          onClick={() => onNavClick('contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
