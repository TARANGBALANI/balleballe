import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Main Email: <a href="mailto:thermocraftengineeringservices@gmail.com">thermocraftengineeringservices@gmail.com</a></p>
          <p>Sales/Enquiry: <a href="mailto:thermocraft.sales@gmail.com">thermocraft.sales@gmail.com</a></p>
          <p>HR Department: <a href="mailto:hr.thermocraft@gmail.com">hr.thermocraft@gmail.com</a></p>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li>
              <a href="https://www.instagram.com/thermocraft">
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/thermocraft-engineering-services-pvt-ltd/mycompany/?viewAsMember=true">
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/thermocraftengineeringservices">
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section careers">
          <h3>Careers</h3>
          <p>To apply to Thermocraft: <a href="mailto:workwiththermocraft@gmail.com">workwiththermocraft@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-logo">
        <img src="F:\Thermocraft-Engineering-Services\src\media\logo.png" alt="Company Logo" />
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Thermocraft Engineering Services PVT LTD. All rights reserved.</p>
        <p>1234 Example Street, City, Country</p>
      </div>
    </footer>
  );
};

export default Footer;
