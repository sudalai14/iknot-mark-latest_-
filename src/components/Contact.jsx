import React, { useEffect, useState } from 'react';
import Slide from './Slide';

const Contact = () => {
  const [iframeHeight, setIframeHeight] = useState(728); // Default height

  useEffect(() => {
    // Listen for message from the iframe (Google Form submission)
    const handleIframeResize = (event) => {
      if (event.origin === 'https://docs.google.com') {
        // Ensure the message comes from Google Forms
        const { data } = event;
        // If the data contains height, update the iframe height accordingly
        if (typeof data === 'number') {
          setIframeHeight(data);
        }
      }
    };

    window.addEventListener('message', handleIframeResize);
    
    return () => {
      window.removeEventListener('message', handleIframeResize);
    };
  }, []);

  return (
    <div id="contact" className="py-16 bg-gray-100 bg-cover bg-center">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">Contact Us</h2>
        <Slide delay={0.3}>
          <p className="mt-4 text-gray-600">
            Get in touch with us for any inquiries or to request our services...
          </p>
          <div className="mt-8 max-w-full mx-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdTXmluZcuRpPbH8MVAEEJmnJUKVh6az2M0pQx9FhCxQkpXFg/viewform?embedded=true"
              width="100%" // Make the iframe responsive in width
              height={iframeHeight} // Set the height dynamically
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full max-w-lg mx-auto"
              title="Google Form"
            >
              Loading…
            </iframe>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Contact;
