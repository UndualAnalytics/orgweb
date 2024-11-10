import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative bg-black py-36 overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-[11rem] font-bold text-gray-800/40 whitespace-nowrap select-none">
          Let's Work <br/> Together
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        {/* Small Header */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <ArrowUpRight className="w-4 h-4 text-primaryColor" />
          <span className="text-primaryColor">Work With Us</span>
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Have Any Projects On Minds!
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Feel Free to Contact Us.
          </h3>
        </div>

        {/* Circular Button */}
        <button className="group relative w-40 h-40 rounded-full bg-primaryColor transition-colors duration-300">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
            <ArrowUpRight className="w-6 h-6 mb-2 transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
            <span className="text-sm font-medium">Let's Talk</span>
            <span className="text-sm font-medium">With Us</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default CTASection;