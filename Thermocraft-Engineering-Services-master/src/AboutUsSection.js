import React, { useState } from 'react';
import './AboutUsSection.css'; // Import CSS file

const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState('engineering');

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about-us-center">
      <div className="about-us-content">
        <h2 className="section-heading">About Us</h2>
        <p className="section-subtitle">
          We are driven by our company values, focusing on customers,<br></br> colleagues, and the community.
        </p>
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'engineering' ? 'active' : ''}`}
            onClick={() => toggleTab('engineering')}
          >
            Engineering Services
          </button>
          <button
            className={`tab-button ${activeTab === 'recruitment' ? 'active' : ''}`}
            onClick={() => toggleTab('recruitment')}
          >
            Recruitment Services
          </button>
        </div>
        <div className={`about-section ${activeTab === 'engineering' ? 'active' : ''}`}>
          <h3>Engineering Services</h3>
          <p>
          MEP Services
          <br></br>HVAC Services
<br></br>Firefighting & Firealarm
<br></br>Boiler 
<br></br>PEB Installations
<br></br>Solar 
<br></br>Civil structural works 
<br></br>Interior works 
<br></br>DG Installation and Commissioning 
<br></br>Industrial installation
<br></br>Commerical installation
          </p>
          
        </div>
        <div className={`about-section ${activeTab === 'recruitment' ? 'active' : ''}`}>
          <h3>Recruitment Services</h3>
          <p>
          IT hiring 
<br></br>Non IT hiring 
<br></br>Campus placements
          </p>
          
          
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;