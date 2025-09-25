// src/pages/ContactPage.jsx
import React from "react";
import ContactFormSection from "../components/ContactBottom";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-24">
      {/* Page Header */}
      <section>

                <div className="text-center mb-14 max-w-3xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-bold text-[#0047b2] mb-4">
    Contact Us
  </h2>
  <p className="text-lg md:text-xl text-gray-700">
             Get in touch with Henderson Thomas Investigations.  
            Our team is ready to provide you with discreet, professional,  
            and reliable assistance — tailored to your case.
  </p>
</div>

      </section>

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Optional Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#0047b2] mb-3">
              Call Us
            </h3>
            <p className="text-gray-700 text-lg">+44 123 456 789</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#0047b2] mb-3">
              Email Us
            </h3>
            <p className="text-gray-700 text-lg">info@hendersonthomas.com</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#0047b2] mb-3">
              Visit Us
            </h3>
            <p className="text-gray-700 text-lg">
              123 London Street, United Kingdom
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
