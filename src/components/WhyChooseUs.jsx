import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center text-gray-700 space-y-6 text-lg leading-8">
              <h2 className="text-4xl text-[#00b9ed] text-center mb-10">
          Why Choose Us?
        </h2>
            <p className='text-[19px] font-medium'>
              At Henderson Thomas Investigations, we specialize in discreet and
              results‑oriented private investigation services, backed by a team of
              highly experienced private detectives with over 25 years of expertise.
              Whether you’re searching for a private investigator near me, need
              phone investigation services, or require a financial investigator UK,
              we provide answers with complete confidentiality.
            </p>
            <p className='text-[19px] font-medium'>
              Our private investigation agency offers a range of services, including
              corporate private investigations, legal investigations, electronic
              harassment investigations, and personal private investigation services.
              We tailor each case to your unique needs, ensuring accurate results
              with professionalism, precision, and care.
            </p>
          </div>
          <div className="w-full h-full lg:pt-20">
            <img
              src="/Why%20Choose%20Us.jpg"
              alt="Digital investigation"
              className="w-full h-full object-cover shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


