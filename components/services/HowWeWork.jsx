// components/HowItWorks.js
import { ChevronRight } from "lucide-react"; // Import Chevron icon from ShadCN

const steps = [
  {
    step: "Step 01",
    title: "Web Inspection",
    description: "Proper inspection of a website with the best tools for the next stage.",
    bgColor: "bg-gray-900", // Dark background
    textColor: "text-white",
    borderColor:"border-gray-400"
  },
  {
    step: "Step 02",
    title: "Deep Optimization",
    description: "Optimizing the website with special strategies by covering all its needs.",
    bgColor: "bg-primaryColor", // Green background for Step 2
    textColor: "text-black",
    borderColor:"border-black"
  },
  {
    step: "Step 03",
    title: "Analyze Growth",
    description: "Expert analysis of website data for deploying a strategy for further growth.",
    bgColor: "bg-gray-900", // Dark background
    textColor: "text-white",
    borderColor:"border-gray-400"
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 px-6 bg-black text-white">
      <div className="text-primaryColor flex items-center gap-2 mb-8">
        <ChevronRight size={20} />
        <h2 className="text-lg font-semibold">How We Works</h2>
      </div>
      <div className="md:flex justify-between lg:gap-20 gap-10">
        {steps.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center py-10 px-6 rounded-md ${item.bgColor} ${item.textColor}`}
          >
            <h3 className={`${item.textColor} text-sm font-semibold mb-2`}>{item.step}</h3>
            <h4 className={`text-lg font-bold mb-4  border-b pb-5 ${item.borderColor}`}>{item.title}</h4>
            <p className="text-center text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
