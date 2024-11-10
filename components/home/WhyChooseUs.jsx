// components/BusinessPresence.js
import { CheckCircle } from "lucide-react"; // import icons if you're using lucide-react
import Image from "next/image";

const BusinessPresence = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 lg:w-5/12">
          <Image
            src="/images/home/why-choose-us.jpg" // replace with your actual image path
            alt="Team working"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-grow w-full md:w-1/2 lg:w-7/12">
          <p className="text-primaryColor font-semibold mb-2">Why Choose Us</p>
          <h2 className="primary-heading font-bold mb-4">Establish Your Business's Online Presence</h2>
          <p className="text-lg text-gray-300 mb-6">
            Improve your business website’s online presence with the unique integration of digital marketing features. Show up your online strength to achieve your virtual goal.
          </p>
          
          {/* Feature List */}
          <ul className="space-y-4">
            <li className="flex items-center">
              <CheckCircle className="text-primaryColor w-6 h-6 mr-3" />
              <span className="text-xl font-medium">White-Hat SEO Technique</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-primaryColor w-6 h-6 mr-3" />
              <span className="text-xl font-medium">Social Media Marketing & Advertisement</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessPresence;
