import ServicesSection from '@/components/home/Services'
import HowItWorks from '@/components/services/HowWeWork'
import OurProcess from '@/components/services/OurProcess'
import WhatWeDo from '@/components/services/WhatWeDo'
import React from 'react'
import FeaturesSection from '../../../components/services/Banner'
import ServiceSection from '../../../components/services/ServiceSection'
import CTASection from '../../../components/services/CTASection'
import HeroSection from '../../../components/services/Hero'
import ContactUs from '../../../components/ContactUs/ContactUs'

const page = () => {
  const websiteDesignData = {
    title: "Website Designing or Development Services",
    subtitle: "If you're looking for website designing services, there are several options available to you. Here are a few avenues you can explore:",
    features: [
      {
        title: "Complete website management",
        description:"Complete website management encompasses comprehensive services to handle all aspects of a website’s operation and maintenance. It includes activities such as website design and development, content updates, security monitoring, performance optimization, SEO, backups and restoration, domain and hosting management, and ongoing support. This holistic approach ensures a well-maintained, secure, and high-performing website, allowing businesses to focus on their core operations while leaving the technical aspects to the experts, and website maintenance costs."
      },
      {
        title: "Security and protection",
      },
      {
        title: "Performance optimization"
      }
    ],
    imageSrc: "/images/services/service-1.jpg"
  }

  // Example of mobile app development data
  const expertise = {
    title: "Expertise",
    subtitle: "Here is a list of our expertisation in developing websites for any platform. We follow a unique strategy to cover all sections of our client’s requirements. Our expertise generally includes.",
    features: [
      {
        title: "Responsive Design",
      },
     
      {
        title: "SEO-Friendly Design",
        description: "A website requires responsive design as well, and it must align the SEO-friendly requirements. Without SEO integration the website may face difficulties in its presence in search engines. Our professionals develop the website by keeping beat-by-beat features of SEO techniques to make the website SEO-friendly"
      },{
        title: "E-commerce Design:",
        description: "Understanding of basic SEO principles to design websites that are search engine friendly, including optimizing for page speed and mobile-friendliness."
      }
    ],
    imageSrc: "/images/services/service-1.jpg"
  }
  return (
    <div className='bg-black'>
      <div className='custom-container'>
        <HeroSection />
     
      <ServicesSection />
        <HowItWorks />
        <WhatWeDo />
        <OurProcess />
        
      </div>
      <FeaturesSection />
      <ServiceSection {...websiteDesignData} imagePosition="left" />
      
      {/* Image on the right */}
      <ServiceSection {...expertise} imagePosition="right" />
      <CTASection />
    </div>
  )
}

export default page