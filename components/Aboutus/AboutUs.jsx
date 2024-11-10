'use client';
import React from 'react';
import Trusted from './Trusted';
import Establish from './Establish';

const AtUndual = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6 md:p-16">
      {/* Section 1: Introduction */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
  {/* Left side heading */}
  <div className="text-center md:text-left md:max-w-md">
    <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
      Undual <br /> at a  
      <br /> glance
    </h1>
    <p className="mt-6 text-gray-400 text-lg md:text-xl">
      Discover your trusted source of online services, empowering you to build an empire with top-tier integrations and seamless experiences.
    </p>
  </div>

  {/* Right side images with increased width */}
  <div className="relative flex items-center justify-center w-full md:w-3/4 lg:w-2/3 space-x-4">
    <img
      style={{ borderRadius: '50px' }}
      src="/assets/aboutus2.avif"
      alt="Team Working"
      className="w-[14.0625rem] h-[6.25rem] shadow-lg object-cover transition-transform duration-300 hover:scale-105"
    />
    <img
      style={{ borderRadius: '50px', width: '420px', height: '100px', objectFit: 'cover' }}
      src="/assets/aboutus2.avif"
      alt="Team Working"
      className="shadow-lg transition-transform duration-300 hover:scale-105"
    />
  </div>
</div>


      {/* Section 2: Company Overview */}
      <div className="mt-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Left side image */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 lg:w-[60%]">
          <img
            src="/assets/aboutus3.avif"
            alt="Team Discussion"
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right side description */}
        <div className="text-center md:text-left md:max-w-md">
          <h2 className="text-4xl font-bold">
            Creative technical wizards <span role="img" aria-label="rock-on">🤘</span> at your service
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Welcome to <span className="font-bold text-white">Undual</span>, a cutting-edge digital marketing and design solution crafted by ThinkWeb Hub Pvt. Ltd. We are dedicated to the art of digital transformation, and Undual is the embodiment of our commitment to redefining your online presence.
          </p>
          <p className="mt-4 text-gray-400 text-lg">
            At ThinkWeb Hub, we understand that the digital landscape is constantly evolving, and we are here to help your business stay at the forefront of this dynamic environment. With Undual, we offer a comprehensive suite of services, from web design to digital marketing strategies, tailored to your unique needs.
          </p>
          <p className="mt-4 text-gray-400 text-lg">
            Our team of experts brings a wealth of experience and creativity to the table, ensuring that your brand stands out and thrives in the digital realm.
          </p>
        </div>
      </div>
      
      {/* Additional Sections */}
      <Trusted />
      <Establish />
    </div>
  );
};

export default AtUndual;
