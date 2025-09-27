import React from 'react';
const Header = () => {

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Henderson Thomas Investigations"
            className="h-10 md:h-12 w-auto"
          />
        </div>
   
      </div>
    </header>
  );
};

export default Header;
