import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutCompany = () => {
  return (
    <div className="bg-black text-white md:py-20 py-10">
      <div className="">
        <div className="grid lg:grid-cols-3 gap-16 items-center  max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="relative">
            <div className="relative w-40 h-40 mx-auto">
              {/* Rotating text circle */}
              <div className="absolute inset-0 animate-slow-spin">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path
                    id="textCircle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                    className="text-gray-700"
                  />
                  <text className="text-xs">
                    <textPath
                      href="#textCircle"
                      className="fill-gray-500 uppercase tracking-widest"
                    >
                      Digital • Experience • Development • Solutions •
                    </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Center star icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-black border-2 border-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 col-span-2">
            <div className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-primaryColor" />
              <span className="text-primaryColor text-sm font-medium">About Company</span>
            </div>

            <h2 className="primary-heading font-bold leading-tight">
              Our Main Goal to Satisfied Local & Global Clients
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              At Vdigtech, we understand that your online presence is more than just code and graphics; it's the digital heartbeat of your brand. That's why we specialize in creating custom web solutions tailored to your unique needs.
            </p>

            <button className="inline-flex items-center gap-2 text-white hover:text-primaryColor transition-colors group">
              <span className="font-medium">Read More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>


      <h2 className='main-heading'>WEB DESIGN <br/>AGENCY</h2>
    </div>
  );
};

export default AboutCompany;