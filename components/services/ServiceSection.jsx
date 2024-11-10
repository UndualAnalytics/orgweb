import React from 'react';

const ServiceSection = ({ 
  imagePosition = 'left',
  title,
  subtitle,
  features,
  imageSrc = '/api/placeholder/600/400',
}) => {
  const ContentSection = () => (
    <div className="w-full lg:w-1/2 px-6 py-8">
      <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-300 mb-8 text-lg">{subtitle}</p>
      
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-xl border-b border-gray-800 pb-8 font-semibold text-white">{feature.title}</h3>
            {feature.description && (
              <p className="text-gray-400 text-lg">{feature.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="w-full lg:w-1/2">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <section className="bg-black">
      <div className="custom-container mx-auto">
        <div className="flex  pt-[4rem] md:pt-[7rem] lg:pt-[10rem] flex-col lg:flex-row items-center">
          {imagePosition === 'left' ? (
            <>
              <ImageSection />
              <ContentSection />
            </>
          ) : (
            <>
              <ContentSection />
              <ImageSection />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;