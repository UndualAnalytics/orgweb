import React from 'react';

const FeaturesSection = () => {
  const features = [
    { title: 'Creative People' },
    { title: 'Good Reviews' },
    { title: 'Awesome Design' },
    { title: 'Fast Delivery' }
  ];

  return (
    <section className="w-full mt-14 bg-primaryColor py-16">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-2xl font-bold">*</span>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;