"use client"
import React,{useState} from 'react'


const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(1); // Setting second item open by default

    const steps = [
      {
        title: 'Define Goals and Requirements',
        description: 'First step in our website development process involves clearly defining your goals and gathering all project requirements.'
      },
      {
        title: 'Research and Planning',
        description: 'Conduct market research to gather insights about the target audience, competitors, and industry trends. Create a sitemap to outline the structure and hierarchy of the website\'s pages. Consider the user journey and how visitors will navigate through the site.'
      },
      {
        title: 'User Experience (UX) Design',
        description: 'We focus on creating intuitive and engaging user experiences that keep your visitors coming back.'
      },
      {
        title: 'Testing and Optimization',
        description: 'Rigorous testing and optimization to ensure your website performs flawlessly across all devices and browsers.'
      },
      {
        title: 'Launch and Deployment',
        description: 'Final step involves launching your website and ensuring everything is properly deployed and functioning.'
      }
    ];
  return (
    <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-b border-gray-800 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full text-left py-6 focus:outline-none group flex items-center justify-between"
              >
                <h3 className="text-2xl font-semibold group-hover:text-primaryColor transition-colors duration-300">
                  {step.title}
                </h3>
                
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
  )
}

export default Accordion