import React from 'react';

const ContactForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <div className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name*"
        className="w-full px-3 py-3 text-gray-800 bg-white border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 text-base"
        value={formData.name}
        onChange={handleInputChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full px-3 py-3 text-gray-800 bg-white border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 text-base"
        value={formData.email}
        onChange={handleInputChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number*"
        className="w-full px-3 py-3 text-gray-800 bg-white border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 text-base"
        value={formData.phone}
        onChange={handleInputChange}
      />

      <textarea
        name="message"
        placeholder="Tell us your case"
        rows="4"
        className="w-full px-3 py-3 text-gray-800 bg-white border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 resize-none text-base"
        value={formData.message}
        onChange={handleInputChange}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-[#FF9902] hover:bg-[#FFB84D] text-white font-bold py-3 px-6 rounded-none text-lg transition-all duration-300 shadow-lg transform hover:scale-102"
      >
        Receive Free Quote
      </button>
    </div>
  );
};

export default ContactForm;


