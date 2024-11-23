import React, { useState } from "react";
import profileImage from "../img/pp.png"; // Import profile image
import Project from './Project'; // Import Project component
import About from './About'; // Import About component
import Header from './Header'; // Import Header component
import Contact from './Contact'; // Import Contact component
import './../styles/Home.css'; // Import CSS

function Home() {
  const [activePage, setActivePage] = useState('home'); // Manage active page state

  const handleNavClick = (page) => {
    setActivePage(page); // Set the active page when a link is clicked
  };

  return (
    <div className="page">
      <div className="container">
        {/* Header Section */}
        <Header activePage={activePage} onNavClick={handleNavClick} />

        {/* Home Section */}
        {activePage === 'home' && (
          <section className="hero" id="home">
            <div className="hero-text">
              <h1 className="title">
                Hello, I'm <span className="name">Miqdad Dzaki</span>
              </h1>
              <p className="description">
                I am a student majoring in Information Technology at Aisyiyah University Yogyakarta.
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/Miqdad-Dzaki"
                  className="icon"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/miqdad-dzaki-a26b73339/"
                  className="icon"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/dzakimiqdad_?utm_source=qr"
                  className="icon"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="mailto:csmiqdad@gmail.com" // Replace with your actual email address
                  className="icon"
                  aria-label="Email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
            <div className="profile-card">
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image"
              />
            </div>
          </section>
        )}

        {/* Project Section */}
        {activePage === 'projects' && <Project />}

        {/* About Section */}
        {activePage === 'about' && <About />}

        {/* Contact Section */}
        {activePage === 'contact' && <Contact />}
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Miqdad Dzaki. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
