// components/WhatWeDo.js
import { ChevronRight, Gem, Network } from "lucide-react"; // Import icons from ShadCN

const steps = [
  {
    title: "Define Goals and Requirements",
    description: "At Vdigtech, we understand the purpose of the website, its target audience, and the specific goals it needs to achieve.",
    icon: <Gem size={32} className="text-black" />,
    bgColor: "bg-primaryColor",
    textColor: "text-black",
  },
  {
    title: "Research and Planning",
    description: "Conduct market research to gather insights about the target audience, competitors, and industry trends.",
    icon: <Network size={32} className="text-primaryColor" />,
    bgColor: "bg-gray-900",
    textColor: "text-white",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 px-6 bg-black text-white md:flex">
      <div className="md:w-1/2"> 
      <div className="text-primaryColor flex items-center gap-2 mb-6">
        <ChevronRight size={20} />
        <h2 className="text-lg font-semibold">What We Do</h2>
      </div>
      <p className="mb-8 text-xl max-w-lg">
        As a website designer, we provide affordable website design services to our clients all over the world with the best services. Our services include small business website design services.
      </p>
      </div>
    
      <div className="sm:flex gap-6 md:w-1/2">
        {steps.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-8 rounded-md ${item.bgColor} ${item.textColor} sm:w-1/2`}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold mb-4 text-center">{item.title}</h3>
            <p className="text-center text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
