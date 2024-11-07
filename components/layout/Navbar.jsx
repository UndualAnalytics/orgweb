"use client"
import React, { useState } from 'react';
import { Menu, X,ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); //for opening side navbar in mobile view
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);  //for nav-links with sublinks
  const [mobileActiveSection, setMobileActiveSection] = useState(''); //for dropdown in mobile view

  //services sublinks
  const services = [
    { name: 'Website Development', href: '/services/web-development' },
    { name: 'App Development', href: '/services/app-development' },
  ];

  //products sublinks
  const products = [
    { name: 'Product 1', href: '/products/1' },
    { name: 'Product 2', href: '/products/2' },
  ];

  //this is for getting which link we are on so that we can highlight
  const isActiveLink = (path) => pathname === path;

  //this is for the sublink selection
  const isActiveSection = (paths) => paths.some(path => pathname.startsWith(path));

  // Custom link component with hover and active states (this is for normal links and for sublinks there is DropDownLink Component)
  const NavLink = ({ href, children, isActive }) => (
    <a
      href={href}
      className={`relative group ${
        isActive ? 'text-primaryColor' : 'text-white hover:text-primaryColor'
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full ${
          isActive ? 'w-full' : ''
        }`}
      />
    </a>
  );

  // Dropdown link component
  const DropdownLink = ({ label, items, section }) => {
    const isActive = isActiveSection([`/${section}`]);

    return (
      <div
        className="relative group"
        onMouseEnter={() => setActiveDropdown(section)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button
          className={`flex items-center relative ${
            isActive || activeDropdown === section ? 'text-primaryColor' : 'text-white hover:text-primaryColor'
          }`}
        >
          {label}
          <span
            className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full ${
              isActive || activeDropdown === section ? 'w-full' : ''
            }`}
          />
        </button>
        
        <div
          className={`absolute left-0 mt-2 w-48 z-50 bg-white rounded-md overflow-hidden transition-all duration-300 ${
            activeDropdown === section ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-4 py-2 text-sm transition-colors ${
                isActiveLink(item.href)
                  ? 'bg-primaryColor text-black'
                  : 'text-black hover:bg-primaryColor'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    );
  };
  
 // this is for opening navlinks with sublinks in mobile view
  const toggleMobileSection = (section) => {
    setMobileActiveSection(mobileActiveSection === section ? '' : section);
  };

  return (
    <nav className="bg-black py-3 text-white">
      <div className="custom-container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0  flex items-center">
            <a href="/" className="text-2xl font-bold">
              <span className="text-white">✓</span>
              <span className="text-white">DIGTECH</span>
              <span className="text-[#FBD288]">.COM</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden text-lg font-semibold  md:flex items-center space-x-16">
            <NavLink href="/" isActive={isActiveLink('/')}>
              Home
            </NavLink>
            
            <NavLink href="/about" isActive={isActiveLink('/about')}>
              About
            </NavLink>
            
            <DropdownLink 
              label="Services" 
              items={services} 
              section="services" 
            />

            <DropdownLink 
              label="Products" 
              items={products} 
              section="products" 
            />

            <NavLink href="/contact" isActive={isActiveLink('/contact')}>
              Contact Us
            </NavLink>
            
          
          </div>

          <Button className="bg-primaryColor hidden lg:block hover:bg-white text-black">
              Let's Talk
              <span className="ml-2">↑</span>
            </Button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primaryColor z-50 relative"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div 
          className={`fixed top-0 left-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden z-50`}
        >
          {/* Logo Section */}
          <div className="p-4 border-b border-gray-900">
            <a href="/" className="text-xl font-bold">
              <span className="text-white">✓</span>
              <span className="text-white">DIGTECH</span>
              <span className="text-emerald-400">.COM</span>
            </a>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-primaryColor"
          >
            <X size={20} />
          </button>

          {/* Navigation Links */}
          <div className="py-4">
            <a href="/" className="block px-6 py-3 border-b border-gray-900 text-white hover:text-primaryColor">
              Home
            </a>
            
            <a href="/about" className="block px-6 py-3 border-b border-gray-900 text-white hover:text-primaryColor">
              About
            </a>

            {/* Services Section */}
            <div>
              <button 
                onClick={() => toggleMobileSection('services')}
                className="w-full flex items-center border-b border-gray-900 justify-between px-6 py-3 text-white hover:text-primaryColor"
              >
                <span>Services</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    mobileActiveSection === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`${
                  mobileActiveSection === 'services' ? 'max-h-48 b' : 'max-h-0'
                } overflow-hidden  transition-all duration-300 ease-in-out`}
              >
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className={`block px-8 py-2 border-b border-gray-900 text-white hover:text-primaryColor ${
                      isActiveLink(service.href) ? 'text-primaryColor' : ''
                    }`}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Products Section */}
            <div>
              <button 
                onClick={() => toggleMobileSection('products')}
                className="w-full flex items-center border-b border-gray-900 justify-between px-6 py-3 text-white hover:text-primaryColor"
              >
                <span>Products</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    mobileActiveSection === 'products' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`${
                  mobileActiveSection === 'products' ? 'max-h-48' : 'max-h-0'
                } overflow-hidden transition-all duration-300  ease-in-out`}
              >
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    className={`block px-8 py-2 border-b border-gray-900 text-white hover:text-primaryColor ${
                      isActiveLink(product.href) ? 'text-primaryColor' : ''
                    }`}
                  >
                    {product.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="/contact" className="block px-6 py-3 border-b border-gray-900 text-white hover:text-primaryColor">
              Contact Us
            </a>

        
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;