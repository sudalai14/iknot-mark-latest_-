import React from 'react';
import Slide from "./Slide";

const AboutUs = () => {
  return (
    <section id="aboutus" className="about-us-section py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <Slide delay={0.3}>
          <p className="text-gray-600 text-center">
          Welcome to Mark Constructions, your trusted construction partner in Coimbatore since 2015. We deliver top-notch construction services with a focus on quality, innovation, and client satisfaction. Our mission is to turn your construction dreams into reality by prioritizing integrity and using the latest technologies and sustainable practices.
          </p>
        </Slide>
      </div>
    </section>
  );
};

export default AboutUs;
