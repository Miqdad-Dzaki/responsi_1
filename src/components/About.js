import React from 'react';
import profile from "../img/pp.png"; // Gambar profil
import cvFile from "../pdf/CV-ATS.pdf"; // File CV yang bisa didownload
import "./../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <img
            src={profile}
            alt="Miqdad Dzaki"
            className="profile-i"
          />
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <p>
            Hi, I'm Miqdad Dzaki, a student majoring in Information Technology at Aisyiyah University Yogyakarta. 
            I have a strong passion for software development, particularly in building web applications with React.js.
            I enjoy working on projects that challenge my problem-solving skills and allow me to learn new technologies.
          </p>
          <a 
            href={cvFile} 
            className="cv-button" 
            download="Miqdad_Dzaki_CV.pdf"
          >
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
