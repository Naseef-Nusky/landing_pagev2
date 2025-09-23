import React from 'react';
import ContactForm from './ContactForm.jsx';

const HeroSection = ({ formData, handleInputChange, handleSubmit, backgroundImageUrl }) => {
  return (
    <section
      className="relative min-h-[50vh] md:min-h-[60vh] text-white flex items-center py-8 md:py-12"
      style={{
        backgroundImage: `url(${backgroundImageUrl || '/hero.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-left max-w-2xl">
              <h1 className="font-libre text-[40px] leading-[60px] md:text-[48px] md:leading-[68px] font-normal capitalize text-white mx-[10%] md:mx-0 flex items-center justify-center text-center">
              Finding a Trustworthy Private Investigator Might Be More Affordable Than You Expect!
            </h1>
          </div>

          <div className="max-w-md md:ml-auto w-full p-0">
            <div className="mb-4 text-center">
              <h2 className="text-2xl md:text-3xl text-white mb-2">
                Please submit your details below to receive your free quote
              </h2>
              <p className="text-cyan-400 text-base md:text-lg font-medium">
                Book your 100% discreet consultation
              </p>
            </div>

            <ContactForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


