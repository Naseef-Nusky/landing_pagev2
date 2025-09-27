import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Company Logo */}
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Henderson Thomas Investigations"
              className="mx-auto max-w-sm w-full h-auto"
            />
          </div>

          {/* Company Name */}
          <div className="mb-12">
            <h3 className="text-lg font-normal text-black">
              Henderson Thomas Investigations
            </h3>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 mb-12">
            {/* Phone and Email */}
            <div className="text-black text-[12px]">
              <span>Phone: 078 20416406</span><br />
              <span className="mx-2">Email:</span>
              <a href="mailto:private@hendersonthomasinvestigations.com" className="text-black hover:text-blue-600">
                private@hendersonthomasinvestigations.com
              </a>
            </div>

            {/* Address */}
            <div className="text-black text-[12px]">
              1st Floor, 238 Kennington High St, London W8 6SN
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-2">
            <p className="text-black text-[12px]">
              © Copyright 2025 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
