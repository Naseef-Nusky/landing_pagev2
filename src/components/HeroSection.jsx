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
      <div className="container mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="">
              <h1 className="font-mont text-[35px] text-white  md:mx-0 flex items-center justify-center text-center leading-relaxed">
              Finding a Trustworthy Private Investigator Might Be More Affordable Than You Expect!
            </h1>
          </div>

          <div className="md:ml-auto w-full p-0">
            <div className="mb-4 text-center">
              <h2 className="text-[25px] text-white mb-4 font-normal">
                Please submit your details below to receive your free quote
              </h2>
              <p className="text-cyan-400 text-[25px] font-normal">
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


