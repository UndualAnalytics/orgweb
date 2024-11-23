'use client';
import React from 'react';
import Trusted from './Trusted';
import Establish from './Establish';
import FeaturesSection from '../services/Banner';
import StatsSection from '../home/Stats';

const AtUndual = () => {
  return (
    <div className="bg-black text-white ">
      {/* Section 1: Introduction */}
      <div className='min-h-screen p-6 md:p-16'>

      
      <div>
        {/* Left side heading */}
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem', justifyContent: 'center' }}>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
              Undual Analytics
            </h1>
            <div className="relative flex items-center" style={{ columnGap: '0.875rem', flexWrap: 'wrap', rowGap: '0.875rem' }}>
              <h1 style={{ textWrap: 'nowrap' }} className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
                at a
              </h1>
              <img
                style={{ borderRadius: '50px' }}
                src="/assets/aboutus2.avif"
                alt="Team Working"
                className="w-[14.0625rem] h-[6.25rem] shadow-lg object-cover"
              />
              <img
                style={{ borderRadius: '50px', width: '420px', height: '100px', objectFit: 'cover' }}
                src="/assets/aboutus4.avif"
                alt="Team Working"
                className="shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
              glance
            </h1>
          </div>

          {/* New Image after "glance" */}
          <p className="mt-6 text-gray-400 text-lg md:text-xl">
            Know your trusted source of online services, and build your empire with top-class integrations.
          </p>
        </div>
      </div>

      {/* Section 2: Company Overview */}
      <div className="mt-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Left side image */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 lg:w-[60%]">
          <img
            src="/assets/aboutus3.avif"
            alt="Team Discussion"
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right side description */}
        <div className="text-center md:text-left md:max-w-md">
          <h2 className="text-4xl font-bold">
          Transforming Businesses with Data-Driven Innovation<span role="img" aria-label="rock-on">🤘</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Welcome to <span className="font-bold text-white">Undual Analytics </span>. At Undual Analytics, we are a forward-thinking technology company dedicated to empowering businesses through advanced software solutions, data analytics, and artificial intelligence (AI). We provide end-to-end services.
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <Trusted />
      </div>
      <FeaturesSection />
      <div className='pt-6'>
      <StatsSection />
      </div>
      
      <Establish />
    </div>
  );
};

export default AtUndual;
