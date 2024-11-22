import React, { useState } from 'react';
import image1 from "../img/game.png";
import image2 from "../img/medis.png";
import image3 from "../img/mobile.png";
import image4 from "../img/list.png";
import image1Extra from "../img/game1.png"; // Contoh gambar tambahan
import image2Extra from "../img/medis1.png"; // Contoh gambar tambahan
import image3Extra from "../img/mobile1.png"; // Contoh gambar tambahan
import image4Extra from "../img/list1.png"; // Contoh gambar tambahan
// import image1Extra from "../img/game1.png"; // Contoh gambar tambahan
import image6Extra from "../img/medis2.png"; // Contoh gambar tambahan
import image7Extra from "../img/mobile2.png"; // Contoh gambar tambahan
import image8xtra from "../img/list2.png";
import './../styles/Project.css'; // Import the CSS file for styling

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Projects data
  const projects = [
    {
      id: 1,
      images: [image1, image1Extra],
      title: "Virus Movement",
      description: "Virus Movement is the name given to this game. In this game, it tells the story of a patient who is looking for a hospital for treatment, but on the way he has to collect as many drugs as possible to collect the score. ",
    },
    {
      id: 2,
      images: [image2, image2Extra, image6Extra],
      title: "Medical Records",
      description: "Medical Records Program A digital system for recording, storing, and managing patient health data, such as medical history, diagnoses, and prescriptions. Accelerate services, improve accuracy, and make it easier for medical personnel to access.",
    },
    {
      id: 3,
      images: [image3, image3Extra, image7Extra],
      title: "Yuki Drink",
      description: "A ui/ux design of a mobile application for one of the UMKM in Jogja, precisely near the campus of Aisyiyah University Yogyakarta.",
    },
    {
      id: 4,
      images: [image4, image4Extra, image8xtra],
      title: "To Do List",
      description: "A web to-do list, which allows us to add to our activities what we want to do. We can also add, delete, edit each list.",
    },
  ];

  // Function to handle project click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to the first image when opening
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  // Function to handle image navigation
  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % selectedProject.images.length
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
      );
    }
  };

  return (
    <section className="project-section" id="projects">
      <div className="project-header">
        <h1>My Projects</h1>
      </div>
      <div className="project-container">
        {/* Right side with multiple project cards */}
        <div className="projects-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <img src={project.images[0]} alt={project.title} className="project-image" />
              <div className="project-info">
                <h2>{project.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Left arrow for navigation */}
            <button className="nav-arrow left-arrow" onClick={handlePrevImage}>
              &#8249; {/* Unicode for left arrow */}
            </button>

            {/* Display the current image */}
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={selectedProject.title}
              className="modal-image"
            />

            {/* Right arrow for navigation */}
            <button className="nav-arrow right-arrow" onClick={handleNextImage}>
              &#8250; {/* Unicode for right arrow */}
            </button>

            <div className="modal-description">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;