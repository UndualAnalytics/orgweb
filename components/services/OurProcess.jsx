// components/OurProcess.js
import { Code, Wrench, Rocket, ShieldCheck } from "lucide-react"; // Import icons from ShadCN

const processSteps = [
  {
    title: "User Experience (UX) Design",
    description: "Design a user-friendly experience with wireframes or prototypes.",
    icon: <Code size={32} className="text-primaryColor" />,
  },
  {
    title: "Testing and Optimization",
    description: "Test rigorously to find and resolve issues like broken links, browser compatibility, or usability glitches.",
    icon: <Wrench size={32} className="text-primaryColor" />,
  },
  {
    title: "Launch and Deployment",
    description: "Host the website, set up domain and hosting securely, and keep an eye on performance.",
    icon: <Rocket size={32} className="text-primaryColor" />,
  },
  {
    title: "Maintenance and Updates",
    description: "Keep the website fresh with new content, enhance its features, and fix any tech glitches.",
    icon: <ShieldCheck size={32} className="text-primaryColor" />,
  },
];

export default function OurProcess() {
  return (
    <section className="py-12 px-6 bg-black text-white">
      <div className="md:flex gap-4 space-y-10 md:space-y-0">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-md bg-gray-900 text-white md:w-1/4"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-bold mb-4 text-center">{step.title}</h3>
            <p className="text-center text-lg">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
