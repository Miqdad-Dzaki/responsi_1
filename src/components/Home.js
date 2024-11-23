import React, { useState } from "react";
import profileImage from "../img/pp.png"; // Profile image
import Header from './Header'; // Header component
import Project from './Project'; // Project component
import About from './About'; // About component
import Contact from './Contact'; // Contact component
import Testimoni from './Testimoni'; // Testimoni component
import './../styles/Home.css'; // CSS Styles

function Home() {
  const [activePage, setActivePage] = useState('home'); // Manage active page state

  const handleNavClick = (page) => {
    setActivePage(page); // Update active page
  };

  const DynamicPage = () => {
    switch (activePage) {
      case 'projects':
        return <Project />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'testimoni':
        return <Testimoni />;
      default:
        return (
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
                  href="mailto:csmiqdad@gmail.com"
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
        );
    }
  };

  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <Header activePage={activePage} onNavClick={handleNavClick} />

        {/* Dynamic Page Section */}
        <DynamicPage />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Miqdad Dzaki. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
