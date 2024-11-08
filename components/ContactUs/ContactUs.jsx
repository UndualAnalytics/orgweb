'use client';
import React from 'react';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative flex items-center justify-center h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/contactus.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Centered text */}
        <h1 className="relative text-white text-5xl font-bold">Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-900 text-white py-12 px-6 md:px-24 lg:px-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">Get in Touch with Undual <span role="img" aria-label="waving hand">👋</span></h2>
            <p>
              Feel free to connect with us for any of your needs regarding our services. Our support team is ready to solve any of your issues.
              Just push a text to us and we will get back to you immediately.
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">India</h3>
              <p>India, Bangalore 75102423</p>
              <p>Email: <a href="mailto:info@vdigtech.com" className="text-blue-500">info@test</a></p>
              <p>Phone: <a href="tel:+917008166042" className="text-blue-500">+91 99393939999</a></p>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
'use client';
import React from 'react';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* Background Section */}
      <div
        className="relative flex items-center justify-center h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/contactus.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Centered text */}
        <h1 className="relative text-white text-5xl font-bold">Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-900 text-white py-12 px-6 md:px-24 lg:px-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">Get in Touch with Undual <span role="img" aria-label="waving hand">👋</span></h2>
            <p>
              Feel free to connect with us for any of your needs regarding our services. Our support team is ready to solve any of your issues.
              Just push a text to us and we will get back to you immediately.
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">India</h3>
              <p>India, Bangalore 75102423</p>
              <p>Email: <a href="mailto:info@vdigtech.com" className="text-blue-500">info@vdigtech.com</a></p>
              <p>Phone: <a href="tel:+917008166042" className="text-blue-500">+91 7008166042</a></p>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;