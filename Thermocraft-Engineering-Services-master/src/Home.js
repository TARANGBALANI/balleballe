import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <motion.div
        className="company-section"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="company-info">
          <div>
            <h1 className="company-title">Thermocraft Engineering Services</h1>
            <p className="company-subtitle">Providing Innovative Engineering Solutions</p>
          </div>
        </div>
        <div className="company-logo">
          <img src="/path-to-your-logo.png" alt="Company Logo" />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
