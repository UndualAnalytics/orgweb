'use client';
import React from 'react';
import Trusted from './Trusted';
import Establish from './Establish';
import FeaturesSection from '../services/Banner';
import StatsSection from '../home/Stats';

const AtUndual = () => {
  return (
    <div className="bg-black text-white">
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
            {/* Scrollable Container */}
            <div className="mt-4 text-gray-400 text-lg max-h-96 overflow-y-scroll pr-4 scrollable-container">
              Welcome to Undual AnalyticsAt Undual Analytics, we are a forward-thinking technology company dedicated to empowering businesses through advanced software solutions, data analytics, and artificial intelligence (AI). We provide end-to-end services to help you optimize operations, enhance efficiency, and accelerate growth in the ever-evolving digital landscape. Our team is passionate about leveraging cutting-edge technology to solve complex business challenges. By combining industry expertise with innovative strategies, we deliver solutions that are customized to meet the unique needs of each client. Whether you are looking to build custom software, harness the power of AI, or unlock insights from data, Undual Analytics is your trusted partner in digital transformation. Our Mission Our mission is simple: to help businesses thrive by leveraging the latest technological advancements. We are committed to providing personalized, scalable, and secure solutions that help our clients stay ahead in a competitive world. Our Vision We envision a future where businesses, regardless of their size, can harness the full potential of emerging technologies to solve their toughest problems and unlock new growth opportunities. Our goal is to be the catalyst for your digital transformation, enabling you to make smarter decisions, drive operational efficiency, and deliver exceptional experiences to your customers. Our Values Innovation: We believe in pushing the boundaries of technology to create solutions that drive meaningful change. Collaboration: We work closely with our clients, building strong partnerships to deliver solutions that align with their goals. Excellence: We strive for the highest quality in everything we do, from development to deployment and beyond. Integrity: We uphold the highest ethical standards, ensuring transparency, honesty, and trust in all our client relationships. Why Choose Us? Expertise Across Industries: Our team brings a wealth of experience across diverse sectors, including healthcare, finance, retail, manufacturing, and more. Tailored Solutions: We don’t believe in one-size-fits-all solutions. Every project is customized to meet the unique needs of your business. End-to-End Services: From strategy and design to development and ongoing support, we provide a comprehensive suite of services to support your business at every stage of its digital transformation journey. Proven Results: Our focus on data-driven decisions and continuous optimization ensures that we deliver measurable results and tangible value to our clients. Our Team At Undual Analytics, we’re proud to have a talented team of professionals with expertise in software development, data science, and artificial intelligence. Our diverse team brings together creativity, technical prowess, and a deep understanding of business needs to create innovative solutions that make a real difference. crafted by Undual Analytics is a technology-driven company dedicated to helping businesses thrive in the digital world. With expertise in software development, data analytics, AI, and automation, we provide innovative solutions tailored to your needs. Our mission is to deliver cutting-edge technology solutions with a client-first approach. Our team’s dedication to quality, innovation, and reliability makes us the ideal partner for your digital transformation. Vdigtech, we offer a comprehensive suite of services, from web design to digital marketing strategies, tailored to your unique needs. Our team of experts brings a wealth of experience and creativity to the table, ensuring that your brand stands out and thrives in the digital realm.
            </div>
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
