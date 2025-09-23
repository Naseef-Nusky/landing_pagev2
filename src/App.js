import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import ThreeSteps from './components/ThreeSteps.jsx';
import ServicesGrid from './components/ServicesGrid.jsx';
import AccordionFAQ from './components/AccordionFAQ.jsx';
import TestimonialSlider from './components/TestimonialSlider.jsx';
import ContactFormSection from './components/ContactBottom.jsx';
import Footer from './components/Footer.jsx';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault?.();
    console.log('Form submitted:', formData);
    // TODO: send to API or email service
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />
      <main className="">
        <HeroSection
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          backgroundImageUrl={"https://hendersonthomasinvestigations.co.uk/wp-content/uploads/2023/05/0d6dcfcf-3ee9-40ee-a127-8940497694fc-bg2.original.jpg"}
        />
        <WhyChooseUs />
        <ThreeSteps />
        <ServicesGrid />
        <AccordionFAQ />
        <TestimonialSlider />
        <ContactFormSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
