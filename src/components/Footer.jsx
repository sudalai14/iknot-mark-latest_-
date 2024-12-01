import React from 'react';
import Slide from "./Slide"

const Footer = () => {
  return (
    <div className="py-4 bg-slate-600 text-white text-center">
      <Slide delay={0.3}>
      <p>&copy; 2024 MARK Construction. All Rights Reserved.</p>
      <div>
        Icons made from <a href="https://www.onlinewebfonts.com/icon" className="text-blue-400 hover:underline">svg icons</a> is licensed by CC BY 4.0
      </div>
      </Slide>
      
    </div>
  );
};

export default Footer;
