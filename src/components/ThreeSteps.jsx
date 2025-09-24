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
      <div className="absolute inset-0 bg-black/30"></div>

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
