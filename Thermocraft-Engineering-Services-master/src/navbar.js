import React from 'react';
import './navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/AboutUsSection">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/testimonials">Testimonials</a></li>
      </ul>
      <div className="contact-container">
        <div className="contact-button">
          Contact Us
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
