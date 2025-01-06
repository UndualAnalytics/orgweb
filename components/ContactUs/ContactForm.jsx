"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
  // Single state for all form fields
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phoneNumber: '',
    email: '',
    business: '',
    location: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      toast("We will reach you shortly")
      setFormData({ // Reset form data after successful submission
        name: '',
        countryCode: '+91',
        phoneNumber: '',
        email: '',
        business: '',
        location: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      alert('Form submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg yellow-hover">
      <h3 className="text-2xl font-semibold mb-6">Drop Us a Message</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone No*</label>
          <div className="flex">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-l-lg"
            >
              <option value="+91">+91</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-r-lg focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Which Business do you have?*</label>
          <input
            type="text"
            name="business"
            value={formData.business}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location*</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Message*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full  bg-primaryColor text-black font-semibold py-3 rounded-lg transition duration-200"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Connect With Undual Today'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
