import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-600 text-center mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-gray-700 space-y-6 text-lg leading-8">
            <p>
              At Henderson Thomas Investigations, we specialize in discreet and
              results‑oriented private investigation services, backed by a team of
              highly experienced private detectives with over 25 years of expertise.
              Whether you’re searching for a private investigator near me, need
              phone investigation services, or require a financial investigator UK,
              we provide answers with complete confidentiality.
            </p>
            <p>
              Our private investigation agency offers a range of services, including
              corporate private investigations, legal investigations, electronic
              harassment investigations, and personal private investigation services.
              We tailor each case to your unique needs, ensuring accurate results
              with professionalism, precision, and care.
            </p>
          </div>
          <div className="w-full h-full">
            <img
              src="/Why%20Choose%20Us.jpg"
              alt="Digital investigation"
              className="w-full h-full object-cover rounded-md shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


