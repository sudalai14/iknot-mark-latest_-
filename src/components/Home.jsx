import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png'; // Ensure this path is correct
import build1 from '../assets/build1.jpeg';
import build2 from '../assets/build2.jpg';
import build3 from '../assets/build3.jpeg';
import build4 from '../assets/build4.jpg';
import build5 from '../assets/build5.jpg';
import build6 from '../assets/build6.jpg';
import build7 from '../assets/build7.jpg';
import build8 from '../assets/build8.jpg';
import build9 from '../assets/build9.jpg';
import build10 from '../assets/build10.jpg';
import build11 from '../assets/build11.jpg';
import "./home.css";

const images = [
  build1, build2, build3, build4, build5, build6, build7, build8, build9,build10, build11
];

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [bgImage, setBgImage] = useState(images[0]); // Set default background image
  const sliderRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  // Automatically scroll the images
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Set scroll interval (3 seconds)

    return () => clearInterval(scrollInterval); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    // Update background image based on the current scroll index
    setBgImage(images[scrollIndex]);

    // Automatically scroll the image slider
    if (sliderRef.current) {
      const scrollPos = (sliderRef.current.scrollWidth / images.length) * scrollIndex;
      sliderRef.current.scrollTo({
        left: scrollPos,
        behavior: 'smooth',
      });
    }
  }, [scrollIndex]);

  const firstLine = "A Civil Aspirants";
  const secondLine = "Touch";

  return (
    <div id="home">
      <div
        className="relative flex flex-col items-center overflow-hidden font-batangas"
        style={{
          minHeight: '100vh',
          width: '100vw',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Sidebar for Mobile */}
        <div
          className={`fixed top-0 left-0 w-full bg-white z-50 transform transition-all duration-500 ${
            showSidebar ? 'h-70' : 'h-16'
          } md:hidden`}
        >
          <div className="flex flex-col">
            {/* Logo and Close Button */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Company Logo" className="w-16 h-auto" />
                <div className="text-center text-orange-500 leading-none">
                  <h1 className="font-bold text-xl">MARK</h1>
                  <p className="text-sm">Constructions</p>
                </div>
              </div>
              {showSidebar ? (
                <FaTimes
                  className="text-xl cursor-pointer"
                  onClick={() => setShowSidebar(false)}
                />
              ) : (
                <FaBars
                  className="text-xl cursor-pointer"
                  onClick={() => setShowSidebar(true)}
                />
              )}
            </div>

            {/* Nav Items for Mobile */}
            {showSidebar && (
              <div className="flex flex-col px-6 py-4 space-y-4 hover-parent">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-2xl font-bold text-gray-800 hover:text-orange-500 hover-item cursor-pointer"
                  onClick={() => setShowSidebar(false)}
                >
                  HOME
                </Link>
                <Link
                  to="aboutus"
                  smooth={true}
                  duration={500}
                  className="text-2xl font-bold text-gray-800 hover:text-orange-500 hover-item cursor-pointer"
                  onClick={() => setShowSidebar(false)}
                >
                  ABOUT US
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-2xl font-bold text-gray-800 hover:text-orange-500 hover-item cursor-pointer"
                  onClick={() => setShowSidebar(false)}
                >
                  PROJECTS
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="text-2xl font-bold text-gray-800 hover:text-orange-500 hover-item cursor-pointer"
                  onClick={() => setShowSidebar(false)}
                >
                  SERVICES
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-2xl font-bold text-gray-800 hover:text-orange-500 hover-item cursor-pointer"
                  onClick={() => setShowSidebar(false)}
                >
                  CONTACT US
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Navigation for Desktop */}
        <div className="fixed w-full bg-gray-200 text-black p-4 z-10 flex justify-center items-center md:flex hidden">
          <div className="flex items-center justify-between w-full max-w-6xl">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Company Logo" className="w-16 h-auto" />
              <div className="text-center text-orange-500 leading-none">
                <h1 className="font-bold text-2xl">MARK</h1>
                <p className="text-sm">Constructions</p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center items-center hover-parent">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-orange-500 hover-item cursor-pointer"
              >
                HOME
              </Link>
              <Link
                to="aboutus"
                smooth={true}
                duration={500}
                className="hover:text-orange-500 hover-item cursor-pointer"
              >
                ABOUT US
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-orange-500 hover-item cursor-pointer"
              >
                PROJECTS
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="hover:text-orange-500 hover-item cursor-pointer"
              >
                SERVICES
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-orange-500 hover-item cursor-pointer"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>

        {/* A Civil Aspirants Touch */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          {firstLine.split(" ").map((word, index) => (
            <span
              key={index}
              className="inline-block opacity-0 mx-2"
              style={{
                animation: `fadeIn 0.5s forwards ${index * 0.2}s`,
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'black',
              }}
            >
              {word}
            </span>
          ))}
          <br />
          {secondLine.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block opacity-0"
              style={{
                animation: `fadeIn 0.5s forwards ${index * 0.25}s`,
                fontSize: '4rem',
                fontWeight: 'bold',
                color: 'black',
                marginTop: '-0.5rem',
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Horizontal Image Scroller */}
        <div
          className="absolute bottom-0 w-full flex overflow-x-auto bg-transparent z-20"
          ref={sliderRef}
          style={{
            padding: '10px 0',
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Project ${index + 1}`}
              className="h-32 w-32 cursor-pointer object-cover mx-2"
              onClick={() => setBgImage(img)} // Change background image on click
              style={{ borderRadius: '0px', flexShrink: 0 }} // Uniform image size
            />
          ))}
        </div>

        {/* CSS for FadeIn Animation */}
        <style>
          {`
            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Home;
