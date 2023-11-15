import React from 'react';
import './InfoSection.css'; // Import your CSS file

const InfoSection = () => {
  return (
    <div className="info-section">
      <h2 className="section-heading">Key Statistics</h2>
      <div className="info-box">
        <i className="fas fa-building info-icon"></i>
        <div className="info-text">
          <div className="info-number">92</div>
          <div className="info-label">Consulting</div>
        </div>
      </div>
      <div className="info-box">
        <i className="fas fa-user-friends info-icon"></i>
        <div className="info-text">
          <div className="info-number">25</div>
          <div className="info-label">Strategy</div>
        </div>
      </div>
      <div className="info-box">
        <i className="fas fa-smile info-icon"></i>
        <div className="info-text">
          <div className="info-number">27</div>
          <div className="info-label">Happy Clients</div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
