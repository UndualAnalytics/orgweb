import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative   bg-black text-white overflow-hidden">
      {/* Abstract decoration */}
      <div className="absolute top-10 right-10 z-20">
        <div className="relative">
          <div className="w-24 h-24 bg-primaryColor rounded-full opacity-80"></div>
          <div className="absolute top-0 right-0 w-32 h-32">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-32 h-32 border border-gray-500 rounded-full animate-pulse"
                style={{
                  transform: `scale(${1 + i * 0.1}) rotate(${i * 15}deg)`,
                  opacity: 1 - i * 0.2,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className=" mx-auto px-6 pt-20 relative z-10">
        <div className="custom-container">
          <div className="space-y-8">
            <h1 className=" font-bold  main-heading  leading-tight">
              <span className="block">BEST</span>
              <span className="block  text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-light tracking-wider">
                WEBSITE
              </span>
              <span className="block relative z-10">
                DEVELOPMENT
              </span>
            </h1>
          </div>
        </div>
        <div className="relative  lg:h-[80vh] ">
        <div className="lg:absolute h-full  lg:top-[-13%] w-[100vw] left-0  z-0">
          <div className="relative w-full h-full">
            {/* Gradient overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div> */}

            {/* Image container */}
            <div className="relative w-full">
              <Image
                src="/images/home/hero-banner.jpg"
                alt="Team collaboration"
                className=" w-[100vw]  object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        </div>
   
      </div>

    
    </div>
  );
};

export default HeroSection;
