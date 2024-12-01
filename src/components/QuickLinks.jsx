import React from 'react';
import Slide from "./Slide";

const QuickLinks = () => {
  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="quicklinks" className="py-16 bg-white flex flex-col items-center px-8">
      <div className="w-full md:w-1/2 text-center">
        <h2 className="text-3xl font-bold text-black">Quick Links</h2>
        <Slide delay={0.3}>
          <p className="mt-4 text-gray-600">
            Find what you need quickly through our quick links...
          </p>
          <ul className="mt-4 text-gray-600">
            <li className="mt-2">
              <a href="#aboutus" onClick={(e) => handleScrollToSection(e, 'aboutus')} className="text-orange-500 hover:text-orange-600">About Us</a>
            </li>
            <li className="mt-2">
              <a href="#services" onClick={(e) => handleScrollToSection(e, 'services')} className="text-orange-500 hover:text-orange-600">Services</a>
            </li>
            <li className="mt-2">
              <a href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')} className="text-orange-500 hover:text-orange-600">Projects</a>
            </li>
            <li className="mt-2">
              <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')} className="text-orange-500 hover:text-orange-600">Contact Us</a>
            </li>
          </ul>
        </Slide>
        <div className="mt-8 text-gray-600">
          <h3 className="text-lg font-bold">CONTACT INFO:</h3>
          <Slide delay={0.3}>
            <p className="mt-2">Phone: 6382633116, 9159401853</p>
            <p className="mt-2">Email: markconstructions22@gmail.com</p>
            <p className="mt-2">
              Location:
              <a href="https://maps.google.com" className="text-orange-500 hover:text-orange-600 ml-1">
                Company Location
              </a>
            </p>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
