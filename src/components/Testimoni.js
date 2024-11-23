import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './../styles/Testimoni.css';

const Testimoni = () => {
  const [formData, setFormData] = useState({
    name: '',
    testimonial: '',
    rating: 0,
  });

  const [testimonials, setTestimonials] = useState([]);

  // Function to load testimonials from localStorage
  const loadTestimonials = () => {
    const storedTestimonials = localStorage.getItem('testimonials');
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    }
  };

  // Load testimonials on component mount
  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.testimonial || formData.rating === 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields and provide a rating.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    const newTestimonial = { ...formData, id: Date.now() };
    const updatedTestimonials = [...testimonials, newTestimonial];

    // Save updated testimonials to localStorage
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));

    // Add new testimonial to the list
    setTestimonials(updatedTestimonials);

    // Show SweetAlert confirmation
    Swal.fire({
      title: 'Testimonial Submitted!',
      text: 'Thank you for your feedback.',
      icon: 'success',
      confirmButtonText: 'OK',
    });

    // Reset form
    setFormData({ name: '', testimonial: '', rating: 0 });
  };

  const handleDelete = (id) => {
    // Show confirmation alert before deletion
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this testimonial?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTestimonials = testimonials.filter((testimonial) => testimonial.id !== id);

        // Save updated testimonials to localStorage
        localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));

        setTestimonials(updatedTestimonials);

        // Show SweetAlert confirmation
        Swal.fire({
          title: 'Deleted!',
          text: 'The testimonial has been deleted.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      }
    });
  };

  const handleEdit = (id) => {
    const testimonialToEdit = testimonials.find((testimonial) => testimonial.id === id);
    setFormData({ ...testimonialToEdit });
    handleDelete(id); // Remove the testimonial from the list before editing
  };

  return (
    <section className="testimonial-section" id="testimonial">
      <div className="testimonial-header">
        <h1>Submit Your Testimonial</h1>
      </div>

      {/* Testimonial Form */}
      <form onSubmit={handleSubmit} className="testimonial-form">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <textarea
          id="testimonial"
          name="testimonial"
          placeholder="Your testimonial"
          value={formData.testimonial}
          onChange={handleInputChange}
          required
        ></textarea>

        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${formData.rating >= star ? 'filled' : ''}`}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </span>
          ))}
        </div>

        <button type="submit" className="submit-button">
          Submit Testimonial
        </button>
      </form>

      {/* Display Testimonials */}
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <p><strong>{testimonial.name}</strong></p>
            <p>{testimonial.testimonial}</p>
            <p>
              Rating: {Array.from({ length: testimonial.rating }, (_, i) => '★').join('')}
            </p>
            <button onClick={() => handleEdit(testimonial.id)} className="edit-button">
              Edit
            </button>
            <button onClick={() => handleDelete(testimonial.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimoni;
