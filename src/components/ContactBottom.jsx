import React, { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Please complete this required field.';
    if (!formData.email) newErrors.email = 'Please complete this required field.';
    if (!formData.phone) newErrors.phone = 'Please complete this required field.';
    if (!formData.message) newErrors.message = 'Please complete this required field.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url('https://hendersonthomasinvestigations.co.uk/wp-content/uploads/2023/07/contact-bottom.jpg')`
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header Text */}
          <div className="mb-12">
            <h2 className="text-2xl text-white mb-6 leading-tight">
              Please Submit Your Details Below To Receive Your Free Quote
            </h2>
            <p className="text-cyan-400 text-lg md:text-2xl font-medium">
              Book your 100% discreet consultation
            </p>
          </div>

          {/* Contact Form */}
          <div className="mx-auto">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 text-gray-800 bg-white border-0 focus:outline-none focus:ring-0 placeholder-gray-500 text-lg"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <div className="text-red-500 text-left text-sm">{errors.name}</div>}
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 text-gray-800 bg-white border-0 focus:outline-none focus:ring-0 placeholder-gray-500 text-lg"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="text-red-500 text-left text-sm">{errors.email}</div>}
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                className="w-full px-4 py-2 text-gray-800 bg-white border-0 focus:outline-none focus:ring-0 placeholder-gray-500 text-lg"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <div className="text-red-500 text-left text-sm">{errors.phone}</div>}
              
              <textarea
                name="message"
                placeholder="Tell us your case"
                rows="3"
                className="w-full px-4 py-2 text-gray-800 bg-white border-0 focus:outline-none focus:ring-0 placeholder-gray-500 resize-none text-lg"
                value={formData.message}
                onChange={handleInputChange}
              />
              {errors.message && <div className="text-red-500 text-left text-sm">{errors.message}</div>}
              
         <div className="w-full flex justify-center">
  <button
   onClick={handleSubmit}
    className="bg-[#FF9902] hover:bg-[#FFB84D] text-white font-bold py-2 px-6 rounded-none text-lg transition-all duration-300 shadow-lg transform hover:scale-102"
  >
    Receive Free Quote
  </button>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;