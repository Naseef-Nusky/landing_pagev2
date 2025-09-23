import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/henderson-thomas-investigations.png"
              alt="Henderson Thomas Investigations"
              className="h-12 w-auto"
            />
          </div>

          {/* Buttons Section */}
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
              078 25416466
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
              CALL US TODAY FOR A FREE QUOTE
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Logo - Centered on mobile */}
          <div className="flex justify-center mb-4">
            <img
              src="https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/henderson-thomas-investigations.png"
              alt="Henderson Thomas Investigations"
              className="h-10 w-auto"
            />
          </div>

          {/* Buttons - Stacked on mobile */}
          <div className="flex flex-col space-y-3">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors w-full">
              078 25416466
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors w-full">
              CALL US TODAY FOR A FREE QUOTE
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;