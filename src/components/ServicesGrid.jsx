// import React from 'react';

// const Card = ({ image, title, children }) => (
//   <div className="bg-white shadow-sm h-full flex flex-col">
//     <div className="aspect-[3/2] w-full overflow-hidden">
//       <img src={image} alt={title} className="w-full h-full object-cover" />
//     </div>
//     <div className="bg-gray-100 px-6 py-8 text-center flex-1 flex flex-col">
//       <h3 className="text-[30px] font-medium mb-4">{title}</h3>
//       <p
//         style={{ fontFamily: '"Barlow", sans-serif' }}
//         className="leading-7 text-[#653465] flex-1"
//       >
//         {children}
//       </p>
//     </div>
//   </div>
// );

// const ServicesGrid = () => {
//   const img1 = 'https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/1-800x534.jpg';
//   const img2 = 'https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/2-800x534.jpg';
//   const img3 = 'https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/3-800x534.jpg';
//   const img4 = 'https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/4-800x534.jpg';

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
//           <Card image={img1} title="Covert Surveillance">
//             Our team of highly skilled private detectives conducts private surveillance to gather the critical evidence you need. We discreetly capture high-quality photo and video evidence, ensuring your investigation is handled with professionalism.
//           </Card>
//           <Card image={img2} title="Missing Person Investigation">
//             A person is reported missing every 90 seconds in the UK. Our detective services utilize the latest digital and forensic techniques to locate individuals, both nationally and internationally. Whether you need a personal investigator or a digital private investigator, we have the expertise to assist.
//           </Card>
//           <Card image={img3} title="Fraud Investigation">
//             With fraud cases on the rise in the UK, victims lose billions of pounds every year. If you’ve been affected, our investigation agency can help uncover fraudulent activities. We specialize in financial investigations, corporate private investigations, and digital forensic analysis to track down the source of the fraud.
//           </Card>
//           <Card image={img4} title="Personal Investigations">
//             Our private detectives and investigators handle a range of personal investigation services, including background checks, infidelity investigations, and online dating inquiries. If you need to hire a private eye, we provide discreet, thorough investigations tailored to your needs.
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesGrid;

import React from "react";
import { Search, Users, Shield, Briefcase } from "lucide-react";

const ServiceCard = ({ image, title, icon: Icon, children }) => (
  <div className="relative group overflow-hidden rounded-2xl shadow-lg flex flex-col h-[500px]">
    {/* Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Dark Glass Blur for Text */}
    <div className="absolute bottom-0 w-full p-6 bg-black/50 backdrop-blur-md ">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-6 h-6 text-[#00b9ed]" />
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p
        style={{ fontFamily: '"Barlow", sans-serif' }}
        className="text-gray-200 text-base leading-7"
      >
        {children}
      </p>
    </div>
  </div>
);

const ServicesGrid = () => {
  const img1 =
    "https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/1-800x534.jpg";
  const img2 =
    "https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/2-800x534.jpg";
  const img3 =
    "https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/3-800x534.jpg";
  const img4 =
    "https://www.hendersonthomasinvestigations.co.uk/wp-content/uploads/2025/02/4-800x534.jpg";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00b9ed] mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Henderson Thomas Investigations provides discreet, professional, and
            results-driven private investigation services tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ServiceCard image={img1} title="Covert Surveillance" icon={Search}>
            Our highly skilled private detectives conduct discreet surveillance
            operations to collect photo and video evidence. Whether for personal,
            corporate, or legal matters, we ensure complete professionalism and
            confidentiality throughout your case.
          </ServiceCard>

          <ServiceCard
            image={img2}
            title="Missing Person Investigation"
            icon={Users}
          >
            Every 90 seconds, someone is reported missing in the UK. Our
            detectives use advanced digital and forensic techniques to trace
            missing persons locally and internationally, offering peace of mind
            to families and clients worldwide.
          </ServiceCard>

          <ServiceCard
            image={img3}
            title="Fraud Investigation"
            icon={Shield}
          >
            Fraud is on the rise, costing victims billions annually. Our
            investigation team specializes in uncovering fraudulent activities,
            from financial scams to corporate fraud, with cutting-edge forensic
            analysis and deep industry expertise.
          </ServiceCard>

          <ServiceCard
            image={img4}
            title="Personal Investigations"
            icon={Briefcase}
          >
            From background checks and infidelity investigations to online
            dating inquiries, our detectives handle sensitive cases with care
            and discretion, providing you with the truth you deserve.
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
