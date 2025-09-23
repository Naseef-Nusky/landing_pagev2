import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#4c4c4c] py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Company Logo */}
          <div className="mb-8">
            <img
              src="https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/henderson-thomas-investigations-footer-400x95.png"
              alt="Henderson Thomas Investigations"
              className="mx-auto max-w-sm w-full h-auto"
            />
          </div>

          {/* Company Name */}
          <div className="mb-12">
            <h3 className="text-lg font-normal text-[#EDEDED]">
              Henderson Thomas Investigations
            </h3>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 mb-12">
            {/* Phone and Email */}
            <div className="text-[#EDEDED] text-sm">
              <span>Phone: 078 20416406</span><br />
              <span className="mx-2">Email:</span>
              <a href="mailto:private@hendersonthomasinvestigations.com" className="text-[#EDEDED] hover:text-blue-600">
                private@hendersonthomasinvestigations.com
              </a>
            </div>

            {/* Address */}
            <div className="text-[#EDEDED] text-sm">
              1st Floor, 238 Kennington High St, London W8 6SN
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6">
            <p className="text-[#EDEDED] text-sm">
              © Copyright 2025 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
