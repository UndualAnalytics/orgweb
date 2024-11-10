"use client"
import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const StatCounter = ({ end, duration = 2000, label, outlined = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="text-center relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <div className="w-7 h-7 rounded-full border-2 border-primaryColor flex items-center justify-center">
          <Check className="w-4 h-3 text-primaryColor" strokeWidth={5} />
        </div>
      </div>
      {/* <div className={`text-7xl lg:text-8xl font-bold mb-4 ${
        outlined 
          ? 'text-transparent stroke-[1px] stroke-gray-800' 
          : 'text-emerald-400'
      }`}>
        {count}
      </div> */}
      <div className={`text-7xl lg:text-8xl font-bold mb-4 `}>
        {count}
      </div>
      <div className="uppercase tracking-wider text-sm">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <StatCounter end={250} label="Projects" outlined={true} />
            <StatCounter end={125} label="Clients" outlined={false} />
            <StatCounter end={25} label="Experts" outlined={true} />
          </div>

     
        </div>
      </div>
    </div>
  );
};

export default StatsSection;