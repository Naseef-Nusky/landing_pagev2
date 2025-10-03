import React from "react";
import { Search, Users, Shield, Briefcase } from "lucide-react";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// ServiceCard Component
const ServiceCard = ({ image, title, icon: Icon, description, link }) => (
  <div className="relative group overflow-hidden rounded-2xl shadow-lg flex flex-col h-[450px]">

    {/* Bottom overlay */}
<div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
  {/* Image */}
  <img
    src={image}
    alt={title}
    className="w-full h-40 object-cover"
  />

  {/* Content with blurred background */}
  <div
    className="relative bg-black/50 backdrop-blur-md min-h-[400px] gap-3"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay to darken + blur */}
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

    {/* Actual Content */}
    <div className="relative flex flex-col gap-1 h-full p-6">
      <Icon className="w-6 h-6 text-[#00b9ed]" />
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-gray-200 text-sm leading-6 text-justify">
        {description}
      </p>
    </div>
  </div>
</div>



  </div>
);

// Services Data
const servicesData = [
  {
    id: 1,
    image:
      "/covert.jpg",
    title: "Covert Surveillance",
    icon: Search,
    description:
      "Our expert private investigators carry out discreet surveillance to capture photo and video evidence you can rely on. Whether it’s for legal, personal, or corporate matters, we provide clear, professional results with complete confidentiality.",
    link: "/services/covert",
  },
  {
    id: 2,
    image:
      "/missing.jpg",
    title: "Missing Person Investigation",
    icon: Users,
    description:
      "Every 90 seconds someone goes missing in the UK. Our team uses advanced tracing methods, intelligence databases, and global contacts to locate individuals quickly and effectively — giving you answers and peace of mind.",
    link: "/services/missing",
  },
  {
    id: 3,
    image:
      "/fraud.jpg",
    title: "Fraud Investigation",
    icon: Shield,
    description:
      "Fraud costs UK victims billions each year. We specialise in exposing scams, financial deception, and identity theft, gathering evidence you can act on. Protect yourself with fast, discreet support from our experienced fraud investigators.",
    link: "/services/fraud",
  },
  {
    id: 4,
    image:
      "/personal.jpg",
    title: "Personal Investigations",
    icon: Briefcase,
    description:
      "From background checks and online dating enquiries to infidelity and family matters, our detectives handle sensitive cases with care and discretion. We uncover the truth so you can make informed decisions with confidence.",
    link: "/services/personal",
  },
    {
    id: 5,
    image: "/background.jpg",
    title: "Background Checking Services",
    icon: Briefcase,
    description:
      "We provide thorough background checks for employment, finance, and personal matters. With discreet and accurate verification, our investigators deliver the facts you need to protect your interests and make smart choices.",
    link: "/services/background",
  },
];

// ServicesGrid Component
const ServicesGrid = ({ latestOnly = false }) => {
  // Slice last 3 if latestOnly is true
  const servicesToShow = latestOnly ? servicesData.slice(-3) : servicesData;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0047b2] mb-8">
            Our Professional Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Confidential, professional, and tailored investigation services delivering clear, reliable results.
          </p>
        </div>

        {/* Grid */}
<div className="flex flex-wrap justify-center gap-5 lg:gap-10">
  {servicesToShow.map((service) => (
    <div className="flex-shrink-0 w-[350px]"> {/* fixed width per card */}
      <ServiceCard key={service.id} {...service} />
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default ServicesGrid;
