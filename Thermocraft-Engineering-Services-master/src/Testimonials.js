// Testimonials.js

import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Luvneesh Joshi',
    position: 'Head of Recruitment',
    testimonial: 'Working at Thermocraft has been an enriching experience. The collaborative work environment, coupled with the company\'s commitment to innovation and employee development, has made it a truly rewarding journey.',
    image: 'https://source.unsplash.com/800x800/?nature', // Random nature image from Unsplash
  },
  {
    id: 2,
    name: 'Deepanshu',
    position: 'HR Intern',
    testimonial: 'I am proud to be a part of the talented team at Thermocraft. The company\'s focus on employee well-being and its inclusive culture have created a positive work atmosphere that encourages creativity and growth.',
    image: 'https://source.unsplash.com/800x800/?technology', // Random technology image from Unsplash
  },
  {
    id: 3,
    name: 'Khushant Gola',
    position: ' Database Management Intern',
    testimonial: 'Thermocraft values its employees and fosters a culture of continuous learning and growth. The supportive leadership and opportunities for skill development have empowered me to excel in my role and contribute meaningfully to the company\'s success.',
    image: 'https://source.unsplash.com/800x800/?architecture', // Random architecture image from Unsplash
  },
  {
    id: 4,
    name: 'Shradha Mathur',
    position: 'Legal Support Intern',
    testimonial: 'I appreciate the dynamic work culture at Thermocraft, where every voice is heard, and ideas are valued. The company\'s commitment to fostering a diverse and inclusive workplace has created a sense of belonging and camaraderie among the employees.',
    image: 'https://source.unsplash.com/800x800/?business', // Random business image from Unsplash
  },
  {
    id: 5,
    name: 'Mohit Meena',
    position: 'HR Assistant',
    testimonial: 'Thermocraft\'s dedication to excellence and innovation is truly inspiring. The company\'s emphasis on teamwork and professional development has enabled me to enhance my skills and contribute to impactful projects, making my experience here both fulfilling and exciting.',
    image: 'https://source.unsplash.com/800x800/?business', // Random business image from Unsplash
  },
];

function Testimonials() {
  const [currentTestimonials, setCurrentTestimonials] = useState([0, 1, 2]);
  const [middleIndex, setMiddleIndex] = useState(1); // Initialize the middle index

  useEffect(() => {
    // Update the middle index when the currentTestimonials change
    setMiddleIndex(currentTestimonials[1]);
  }, [currentTestimonials]);

  const prevTestimonials = () => {
    const newTestimonials = currentTestimonials.map((index) => (index - 1 + testimonialsData.length) % testimonialsData.length);
    setCurrentTestimonials(newTestimonials);
  };

  const nextTestimonials = () => {
    const newTestimonials = currentTestimonials.map((index) => (index + 1) % testimonialsData.length);
    setCurrentTestimonials(newTestimonials);
  };

  return (
    <section className="testimonials">
      <h2>Client Testimonials</h2>
      <div className="testimonial-container">
        {currentTestimonials.map((index) => (
          <div
            key={testimonialsData[index].id}
            className={`testimonial ${index === middleIndex ? 'active' : ''}`}
          >
            <img src={testimonialsData[index].image} alt={testimonialsData[index].name} />
            <h3>{testimonialsData[index].name}</h3>
            <p>{testimonialsData[index].position}</p>
            <p className="testimonial-text">{testimonialsData[index].testimonial}</p>
          </div>
        ))}
        <button className="prev" onClick={prevTestimonials}>
          &lt;
        </button>
        <button className="next" onClick={nextTestimonials}>
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Testimonials;