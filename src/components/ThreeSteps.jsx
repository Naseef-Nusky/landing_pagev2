// import React from 'react';

// const ThreeSteps = () => {
//   return (
//     <section
//       className="relative text-white"
//       style={{
//         backgroundImage: "url('https://www.rosewoodinvestigations.info/wp-content/uploads/2023/05/3steps.jpg')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="relative z-10">
//       <div className="w-full bg-[#61c1d6] py-6">
//   <h2
//     style={{ fontFamily: '"Judson", serif', fontWeight: 500 }}
//     className="text-3xl md:text-5xl text-center text-black"
//   >
//     3 Easy Steps
//   </h2>
// </div>
//       </div>
//       <div className="container mx-auto px-4 relative z-10 py-12 md:py-16">
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center justify-center">
//     <div className="space-y-4 flex flex-col items-center justify-center">
//       <h3 className="text-2xl font-semibold">Step 1</h3>
//       <p className="font-sans text-[18px] leading-[30.4px] font-medium text-white/90 text-center">
//         Complete the form above and submit it to receive your free quote. Rest assured, all information you provide will remain completely confidential.
//       </p>
//     </div>
//     <div className="space-y-4 flex flex-col items-center justify-center">
//       <h3 className="text-2xl font-semibold">Step 2</h3>
//       <p className="font-sans text-[18px] leading-[30.4px] font-medium text-white/90 text-center">
//         Consult with our experienced private investigators to explore customized options and choose the solution that aligns with your budget. Whether you’re looking for detectives in the UK cheap private investigators near me, or online private investigators, our team is here to assist.
//       </p>
//     </div>
//     <div className="space-y-4 flex flex-col items-center justify-center">
//       <h3 className="text-2xl font-semibold">Step 3</h3>
//       <p className="font-sans text-[18px] leading-[30.4px] font-medium text-white/90 text-center">
//         All evidence will be sent securely to your preferred contact method.
//       </p>
//     </div>
//   </div>
// </div>
//     </section>
//   );
// };

// export default ThreeSteps;


import React from 'react';
import { FileText, Users, ShieldCheck } from "lucide-react"; // icons

const ThreeSteps = () => {
  return (
    <section
      className="relative text-white"
      style={{
        backgroundImage: "url('https://www.rosewoodinvestigations.info/wp-content/uploads/2023/05/3steps.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="w-full bg-[#61c1d6]/90 py-6">
          <h2
            style={{ fontFamily: '"Judson", serif', fontWeight: 500 }}
            className="text-3xl md:text-5xl text-center text-black"
          >
            3 Easy Steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-[#61c1d6] text-black text-2xl font-bold mb-6">
                1
              </div>
              <FileText className="w-10 h-10 text-[#61c1d6] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Submit Your Request</h3>
              <p className="text-white/90 leading-relaxed">
                Fill out the form above to receive your free quote. Your
                information is 100% confidential.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-[#61c1d6] text-black text-2xl font-bold mb-6">
                2
              </div>
              <Users className="w-10 h-10 text-[#61c1d6] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Consult with Experts</h3>
              <p className="text-white/90 leading-relaxed">
                Speak with our experienced investigators and explore tailored
                solutions that fit your needs and budget.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-[#61c1d6] text-black text-2xl font-bold mb-6">
                3
              </div>
              <ShieldCheck className="w-10 h-10 text-[#61c1d6] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Secure Evidence</h3>
              <p className="text-white/90 leading-relaxed">
                Receive your investigation results and evidence securely through
                your preferred method.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;
