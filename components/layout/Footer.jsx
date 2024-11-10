import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F15] text-white py-20">
      <div className="custom-container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Logo and Description */}
          <div className="md:col-span-2 ">
            <h2 className="lg:text-[5rem] md:text-[3rem] text-[1.8rem] font-bold mb-6">
              Get Ready to<br />
              Grow Your Business
            </h2>
            <div className="space-y-4 md:text-2xl text-md">
              <div className="inline-block">
                <a 
                  href="mailto:info@vdigtech.com" 
                  className="bg-[#0F1419] block border border-gray-700 text-white px-7 py-6 md:px-10 md:py-8 rounded-full hover:bg-gray-800 transition-colors"
                >
                  info@vdigtech.com ↑
                </a>
              </div>
              <div className="inline-block md:ml-4">
                <a 
                  href="tel:+917008166042" 
                  className="bg-[#0F1419] block border border-gray-700 text-white px-7 py-6 md:px-10 md:py-8 rounded-full hover:bg-gray-800 transition-colors"
                >
                  +91 7008166042 ↑
                </a>
              </div>
            </div>
          </div>


            <div className='border-l flex space-x-12 border-gray-700'>
                {/* Quick Links */}
          <div className=" md:ml-8 ml-4">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="hover:text-primaryColor transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-primaryColor transition-colors">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-primaryColor transition-colors">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primaryColor transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="/services/web-development" className="hover:text-primaryColor transition-colors">Website Development</a>
              </li>
              <li>
                <a href="/services/app-development" className="hover:text-primaryColor transition-colors">App Development</a>
              </li>
              <li>
                <a href="/services/maintenance" className="hover:text-primaryColor transition-colors">Website Maintenance</a>
              </li>
              <li>
                <a href="/services/digital-marketing" className="hover:text-primaryColor transition-colors">Digital Marketing</a>
              </li>
            </ul>
          </div>
            </div>
          
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-gray-400">© 2024 Vdigtech. All Rights Reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms & Condition
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;