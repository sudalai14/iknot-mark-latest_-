import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Founder from './components/Founder';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import QuickLinks from './components/QuickLinks';
import Footer from './components/Footer';
import Slide from './components/Slide';
import Reviews from './components/Reviews';
import './index.css'; // Import your custom styles

function App() {
  return (
    <>
      <Home />
      <Slide><AboutUs /></Slide>
      <Slide><Founder /></Slide>
      <Slide><Services /></Slide>
       <Projects />
      <Slide><Reviews/></Slide>
      <Slide><Contact /></Slide>
      <Slide><QuickLinks /></Slide>
      <Slide><Footer /></Slide>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/6382633116"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp_float"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </>
  );
}

export default App;
