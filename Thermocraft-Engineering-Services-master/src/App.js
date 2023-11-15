import React from 'react';
import './App.css';
import Navbar from './navbar';
import Hero from './hero';
import OurValues from './OurValues';
import InfoSection from './InfoSection';
import AboutUsSection from './AboutUsSection';
import Testimonials from './Testimonials';
import Footer from './footer';
import ContactForm from './contactform';
import ClientSection from './ClientSection';
import Home from './Home';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Hero />
      <ClientSection/>
      <AboutUsSection/>
      <InfoSection/>
      <OurValues />
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
