"use client"
import React,{useState} from 'react'


const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(1); // Setting second item open by default

    const steps = [
      {
        title: 'Define Objectives and Scope',
        description: 'Collaborate with clients to understand their goals, challenges, and requirements. Establish a clear project scope to ensure alignment with both short-term and long-term business objectives.'
      },
      {
        title: 'Research and Strategy Development',
        description: 'Conduct comprehensive market research and data analysis to uncover industry trends, audience behavior, and competitor insights. Develop strategic roadmaps for impactful solutions that blend software development, AI, and data analytics.'
      },
      {
        title: 'Custom Software and Data-Driven Solution Design',
        description: 'Design user-centric, scalable software applications that seamlessly integrate data analytics and AI capabilities. Focus on intuitive interfaces and robust functionalities to enhance decision-making and operational efficiency.'
      },
      {
        title: 'AI-Enhanced Insights',
        description: 'Leverage artificial intelligence to analyze complex data patterns, enabling predictive insights and automation. Deliver solutions that transform raw data into actionable strategies for improved business performance.'
      },
      {
        title: 'Testing, Quality Assurance, Deployment and Launch',
        description: 'Conduct rigorous testing to ensure optimal performance, reliability, and accuracy in both software and data-driven models. Fine-tune AI algorithms and analytics dashboards for precision and usability. Seamlessly deploy solutions, ensuring smooth integration with existing systems. Provide hands-on support during the launch to address any immediate needs.'
      },
      {
        title: 'Continuous Support and Updates',
        description: 'Offer ongoing maintenance, updates, and performance optimization for software, AI models, and analytics systems. Ensure solutions remain aligned with evolving business needs and technological advancements. We are committed to delivering innovative, data-powered, and AI-driven solutions that drive growth, efficiency, and success for your business.'
      },
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