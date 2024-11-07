import React from 'react';
import { ArrowUpRight,ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, icon, image, isHighlighted = false }) => {
  return (
    <div className={`relative group overflow-hidden  transition-all duration-300 ${
      isHighlighted ? 'bg-primaryColor' : 'bg-gray-900'
    }`}>
      <div className="p-6 space-y-4">
        {/* Icon */}
        <div className={`w-12 h-12 ${isHighlighted ? 'text-black' : 'text-primaryColor'}`}>
          {icon}
        </div>

        {/* Title */}
        <h3 className={`text-xl font-semibold ${isHighlighted ? 'text-black' : 'text-white'}`}>
          {title}
        </h3>

        {/* Arrow icon */}
        <div className="absolute top-4 right-4">
          <div className={`p-3 ${
            isHighlighted ? 'bg-black' : 'bg-gray-800'
          }`}>
            <ArrowUpRight className={`w-6 h-6 ${
              isHighlighted ? 'text-white' : 'text-primaryColor'
            }`} />
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="h-28 mt-4 p-2 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 " />
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'Website Development',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          <path d="M13 20l6-6-6-6M5 20l6-6-6-6" />
        </svg>
      ),
      image: "/images/home/service-img.jpg",
      highlighted: true
    },
    {
      title: 'Graphic Design',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          <path d="M13 20l6-6-6-6M5 20l6-6-6-6" />
        </svg>
      ),
      image: "/images/home/service-img.jpg",
    
    },
    {
      title: 'App Development',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      image: "/images/home/service-img.jpg",
    },
    {
      title: 'Digital Marketing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          <path d="M12 16v-4M12 8h.01" />
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z" />
        </svg>
      ),
      image: "/images/home/service-img.jpg",
    },
    {
      title: 'Website Maintenance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          <path d="M12 6V4M12 20v-2M6 12H4m16 0h-2m1.657-6.343l-1.414 1.414M7.757 16.243l-1.414 1.414M7.757 7.757L6.343 6.343m10.9 10.9l-1.414-1.414" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      image: "/images/home/service-img.jpg",
    }
  ];

  return (
    <div className="bg-black pb-10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="mt-16 flex items-center justify-center gap-3 text-primaryColor">
            <ArrowRight className="w-5 h-5" />
            <span className="text-sm font-medium hover:text-primaryColor cursor-pointer transition-colors">
              All Services
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Comprehensive Website Services to Ignite Your Online Success. Empower Your Business with Powerful Online Services from our Website.
          </p>
        </div>

        <div className="flex flex-wrap justify-center space-x-8 gap-y-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              image={service.image}
              isHighlighted={service.highlighted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;