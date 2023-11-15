// src/Hero.js

import React from 'react';
import './hero.css';
import logo from './media/logo.png';
function Hero() {

  return (
    <div className="hero">
      <div className="background-image"></div>

      <div className='teshead'>
        <h1>THERMOCRAFT ENGINEERING
          <br></br> SERVICES</h1>
      </div>

      <img src={logo} alt="logo-tes" className="logo-tes" />

      <div className='Heading'>
        <h2>
          Complete Services<br />
          from Concept to
          <br></br> Operation!
        </h2>
      </div>

      <div className="content">
        {<p>
          To provide concept to procurement, erection,
          <br></br>installation, commissioning
          services and beyond under one roof.</p>}
      </div>



    </div>
  );
}

export default Hero;
