import React from 'react';

const Card = ({ image, title, children }) => (
  <div className="bg-white shadow-sm">
    <div className="aspect-[3/2] w-full overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="bg-gray-100 px-6 py-8 text-center">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
  <p className="leading-7 text-[#653465]">{children}</p>
    </div>
  </div>
);

const ServicesGrid = () => {
  const img1 = 'https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/1-800x534.jpg';
  const img2 = 'https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/2-800x534.jpg';
  const img3 = 'https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/3-800x534.jpg';
  const img4 = 'https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/4-800x534.jpg';

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card image={img1} title="Covert Surveillance">
            Our team of highly skilled private detectives conducts private surveillance to gather the critical evidence you need. We discreetly capture high-quality photo and video evidence, ensuring your investigation is handled with professionalism.
          </Card>
          <Card image={img2} title="Missing Person Investigation">
            A person is reported missing every 90 seconds in the UK. Our detective services utilize the latest digital and forensic techniques to locate individuals, both nationally and internationally. Whether you need a personal investigator or a digital private investigator, we have the expertise to assist.
          </Card>
          <Card image={img3} title="Fraud Investigation">
            With fraud cases on the rise in the UK, victims lose billions of pounds every year. If you’ve been affected, our investigation agency can help uncover fraudulent activities. We specialize in financial investigations, corporate private investigations, and digital forensic analysis to track down the source of the fraud.
          </Card>
          <Card image={img4} title="Personal Investigations">
            Our private detectives and investigators handle a range of personal investigation services, including background checks, infidelity investigations, and online dating inquiries. If you need to hire a private eye, we provide discreet, thorough investigations tailored to your needs.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;


