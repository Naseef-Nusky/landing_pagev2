import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger and close icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/henderson-thomas-investigations.png"
            alt="Henderson Thomas Investigations"
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium">
          <a href="#" className="text-gray-700 hover:text-[#0047b2] transition-colors font-medium">HOME</a>
          <a href="#services" className="text-gray-700 hover:text-[#0047b2] transition-colors font-medium">OUR SERVICES</a>
          <a href="#about" className="text-gray-700 hover:text-[#0047b2] transition-colors font-medium">ABOUT</a>
          <a href="#contact" className="text-gray-700 hover:text-[#0047b2] transition-colors font-medium">CONTACT</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 py-4 text-sm font-medium">
            <a
              href="#"
              className="text-gray-700 hover:text-[#0047b2] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#0047b2] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              OUR SERVICES
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#0047b2] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#0047b2] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
