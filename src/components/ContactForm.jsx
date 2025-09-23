import React, { useState } from 'react';

const ContactForm = ({ formData, handleInputChange, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Please complete this required field.';
    if (!formData.email) newErrors.email = 'Please complete this required field.';
    if (!formData.phone) newErrors.phone = 'Please complete this required field.';
    if (!formData.message) newErrors.message = 'Please complete this required field.';
    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      handleSubmit(e);
    }
  };

  return (
    <form className="space-y-4 w-full" onSubmit={onSubmit} noValidate>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          className="w-full px-3 py-2 text-gray-800 bg-white border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 text-base"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-3 py-2 text-gray-800 bg-white border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 text-base"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number*"
          className="w-full px-3 py-2 text-gray-800 bg-white border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 text-base"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Tell us your case"
          rows="3"
          className="w-full px-3 py-2 text-gray-800 bg-white border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 resize-none text-base"
          value={formData.message}
          onChange={handleInputChange}
        />
        {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
      </div>
      <div className="w-full flex justify-center">
  <button
    type="submit"
    className="bg-[#FF9902] hover:bg-[#FFB84D] text-white font-bold py-2 px-6 rounded-none text-lg transition-all duration-300 shadow-lg transform hover:scale-102"
  >
    Receive Free Quote
  </button>
</div>
    </form>
  );
};

export default ContactForm;