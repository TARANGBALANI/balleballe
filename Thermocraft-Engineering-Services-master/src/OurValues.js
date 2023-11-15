import React, { useState, useEffect } from 'react';
import './OurValues.css'; // Import your CSS file
import { FaChevronDown } from 'react-icons/fa'; // Import the icon

const unsplashImageURLs = [
  'https://source.unsplash.com/random/800x600/?technology',
  'https://source.unsplash.com/random/800x600/?innovation',
  'https://source.unsplash.com/random/800x600/?design',
  'https://source.unsplash.com/random/800x600/?development',
];

const OurValues = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSectionClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  useEffect(() => {
    // Automatically change the displayed image every few seconds
    const imageChangeInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % unsplashImageURLs.length);
    }, 5000);

    return () => {
      clearInterval(imageChangeInterval);
    };
  }, []);

  const values = [
    {
      id: 'section1',
      title: 'Consulting',
      content:
        'Navigate the path to success with our trusted consulting services, providing strategic insights and actionable solutions to propel your business forward.',
    },
    {
      id: 'section2',
      title: 'Strategy',
      content:
        'Unleash your competitive advantage with our strategic expertise, guiding you towards sustainable growth and market leadership.',
    },
  ];

  return (
    <div className="our-value">
      <div className={`company-image ${activeSection ? 'image-active' : ''}`}>
        <img src={unsplashImageURLs[currentImageIndex]} alt="Company logo" />
      </div>
      <div className="values">
        <div className="heading">Our Values</div>
        <div className="subtitle">Building a Strong Foundation</div>
        {values.map((value) => (
          <section
            key={value.id}
            className={`section ${activeSection === value.id ? 'active' : ''}`}
            onClick={() => handleSectionClick(value.id)}
          >
            <h3 className={`section-heading ${activeSection === value.id ? 'active' : ''}`}>
              {value.title}
              <span className={`dropdown-icon ${activeSection === value.id ? 'active' : ''}`}>
                <FaChevronDown />
              </span>
            </h3>
            {activeSection === value.id && (
              <div className="section-content">
                <p>{value.content}</p>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
