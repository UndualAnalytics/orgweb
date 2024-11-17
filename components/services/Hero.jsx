// components/HeroSection.js
import React from 'react';
import ContactForm from '../ContactUs/ContactForm';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content container */}
      <div className="relative container  mx-auto px-4 md:py-20 py-5 flex flex-col lg:flex-row  justify-between">
        {/* Text content */}
        <div className="w-full py-10 lg:w-1/2 text-white space-y-6">
          {/* Website text with outline effect */}
          <div className="text-4xl md:text-7xl font-bold mb-4">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300" 
                >
              Website
            </span>
          </div>
          
          {/* Development text */}
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
            Development
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            Unlock the Power of Web Presence with our Professional Website Designing
            Service! Elevate Your Online Presence with Stunning Website Designs.
          </p>

        
        </div>

        {/* Right side space for your form */}
        <div className="w-full text-white lg:w-1/2">
          {/* Your form will go here */}
          <ContactForm />
        </div>
      </div>

  
    </div>
  );
};

export default HeroSection;