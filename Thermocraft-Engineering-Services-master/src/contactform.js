// ContactForm.js

import React from 'react';
import './contactform.css'; // Import your CSS file for styling


function ContactForm() {
  return (
    <div className="contact-container">
      <div className="left-container">
        <h2>Contact Us</h2>
        <img src="F:\Thermocraft-Engineering-Services\src\media\contact.PNG" />
      </div>
      <div className="right-container">
        <form>
          <h3>Contact Information</h3>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">What can we help you with?</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
