import React, { useState } from 'react';
import Swal from 'sweetalert2'; 
import Header from './Header';
import './../styles/Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Ambil data yang sudah ada di localStorage
    const existingMessages = JSON.parse(localStorage.getItem('messages')) || [];
  
    // Tambahkan pesan baru ke dalam array
    const updatedMessages = [...existingMessages, formData];
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  
    // Reset form
    Swal.fire({
      title: 'Message Sent!',
      text: 'Thank you for reaching out. Your message has been saved.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  
    setFormData({ name: '', email: '', message: '' });
  };
  

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h1>Contact Me</h1>
      </div>

      {/* Social Media Links */}
      <div className="social-link">
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
          href="mailto:miqdad.dzaki@example.com" // Ganti dengan alamat email Anda
          className="icon"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-envelope"></i>
        </a>

      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
};


export default Contact;
