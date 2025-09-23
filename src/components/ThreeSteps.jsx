import React from 'react';

const ThreeSteps = () => {
  return (
    <section
      className="relative text-white"
      style={{
        backgroundImage: "url('https://www.rosewoodinvestigations.info/wp-content/uploads/2023/05/3steps.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10">
      <div className="w-full bg-[#61c1d6] py-6">
  <h2
    style={{ fontFamily: '"Judson", serif', fontWeight: 500 }}
    className="text-3xl md:text-5xl text-center text-black"
  >
    3 Easy Steps
  </h2>
</div>
      </div>
      <div className="container mx-auto px-4 relative z-10 py-12 md:py-16">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center justify-center">
    <div className="space-y-4 flex flex-col items-center justify-center">
      <h3 className="text-2xl font-semibold">Step 1</h3>
      <p className="font-sans text-[18px] leading-[30.4px] font-medium text-white/90 text-center">
        Complete the form above and submit it to receive your free quote. Rest assured, all information you provide will remain completely confidential.
      </p>
    </div>
    <div className="space-y-4 flex flex-col items-center justify-center">
      <h3 className="text-2xl font-semibold">Step 2</h3>
      <p className="font-sans text-[18px] leading-[30.4px] font-medium text-white/90 text-center">
        Consult with our experienced private investigators to explore customized options and choose the solution that aligns with your budget. Whether you’re looking for detectives in the UK cheap private investigators near me, or online private investigators, our team is here to assist.
      </p>
    </div>
    <div className="space-y-4 flex flex-col items-center justify-center">
      <h3 className="text-2xl font-semibold">Step 3</h3>
      <p className="font-sans text-[18px] leading-[30.4px] font-medium text-white/90 text-center">
        All evidence will be sent securely to your preferred contact method.
      </p>
    </div>
  </div>
</div>
    </section>
  );
};

export default ThreeSteps;


