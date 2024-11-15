import Image from 'next/image';
import { CheckCircle } from 'lucide-react'; // Using Lucide's CheckCircle icon

export default function AboutUs() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12 lg:p-20">
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 lg:pr-12 space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Enhance Your Business's With Data & AI-Driven Insights
          <span role="img" aria-label="medal" className="ml-2">🏅</span>
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
          Unlock new growth opportunities with data-driven Insightsand AI-RPA provides you with intelligent solutionsthat optimize decision-making and streamline operations.
        </p>
        <div className="space-y-3 text-sm md:text-base lg:text-lg font-medium">
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            <p>Custom Software Development</p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            <p>Predictive Data modeling</p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            <p>AI and Machine Learning Application</p>
          </div>
          {/* <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            <p>Social Media Marketing & Advertisement</p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            <p>Real-Time Reports</p>
          </div> */}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="relative w-full max-w-md h-64 md:h-80 lg:h-96 transition-transform transform hover:scale-105">
          <Image
            src="/assets/aboutus2.avif"
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
