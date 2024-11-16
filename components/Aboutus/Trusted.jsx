import React from 'react';

const TrustedClients = () => {
  return (
    <div className="bg-black text-white py-12">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Trusted by our clients
      </h2>
      <div className="overflow-hidden">
        <div className="flex gap-8 animate-scroll">
          {/* Client logos */}
          <img
            src="assets/trusted1.png"
            alt="Client 1"
            className="w-40 h-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="assets/trusted2.png"
            alt="Client 2"
            className="w-40 h-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="assets/trusted3.png"
            alt="Client 3"
            className="w-40 h-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="assets/trusted4.png"
            alt="Client 4"
            className="w-40 h-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
          />
          {/* Repeat the logos to create a seamless scroll effect */}
          <img
            src="assets/trusted5.png"
            alt="Client 1"
            className="w-40 h-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="assets/trusted6.png"
            alt="Client 2"
            className="w-40 h-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="assets/trusted1.png"
            alt="Client 3"
            className="w-40 h-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="assets/trusted2.png"
            alt="Client 4"
            className="w-40 h-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedClients;
