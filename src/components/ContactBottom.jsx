import React, { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <p className="text-cyan-400 text-lg md:text-xl font-medium">
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
                className="w-full px-4 py-4 text-gray-800 bg-white border-0 focus:outline-none focus:ring-0 placeholder-gray-500 text-lg"
                value={formData.name}
                onChange={handleInputChange}
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-4 text-gray-800 bg-white border-0 focus:outline-none focus:ring-0 placeholder-gray-500 text-lg"
                value={formData.email}
                onChange={handleInputChange}
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                className="w-full px-4 py-4 text-gray-800 bg-white border-0 focus:outline-none focus:ring-0 placeholder-gray-500 text-lg"
                value={formData.phone}
                onChange={handleInputChange}
              />
              
              <textarea
                name="message"
                placeholder="Tell us your case"
                rows="5"
                className="w-full px-4 py-4 text-gray-800 bg-white border-0 focus:outline-none focus:ring-0 placeholder-gray-500 resize-none text-lg"
                value={formData.message}
                onChange={handleInputChange}
              />
              
              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 text-xl transition-all duration-300 shadow-lg"
              >
                Receive Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;