'use client'
import React from 'react';


const ContactForm = ({ onChange, onSubmit }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg yellow-hover">
      <h3 className="text-2xl font-semibold mb-6">Drop Us a Message</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name*</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none"
            required
            onChange={onChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone No*</label>
          <div className="flex">
            <select
              name="countryCode"
              className="px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-l-lg"
              onChange={onChange}
            >
              <option value="+91">+91</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="tel"
              name="phoneNumber"
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-r-lg focus:outline-none"
              required
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email*</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none"
            required
            onChange={onChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Which Business do you have?*</label>
          <input
            type="text"
            name="business"
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none"
            onChange={onChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location*</label>
          <input
            type="text"
            name="location"
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none"
            required
            onChange={onChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Message*</label>
          <textarea
            name="message"
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none"
            rows="4"
            required
            onChange={onChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Connect With Undual Today
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
