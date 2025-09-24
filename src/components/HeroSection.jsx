// import React from 'react';
// import ContactForm from './ContactForm.jsx';

// const HeroSection = ({ formData, handleInputChange, handleSubmit, backgroundImageUrl }) => {
//   return (
//     <section
//       className="relative min-h-[50vh] md:min-h-[60vh] text-white flex items-center py-8 md:py-12"
//       style={{
//         backgroundImage: `url(${backgroundImageUrl || '/hero.jpg'})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="container mx-auto relative z-10 w-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div className="">
//               <h1 className="font-mont text-[35px] text-white  md:mx-0 flex items-center justify-center text-center leading-relaxed">
//               Finding a Trustworthy Private Investigator Might Be More Affordable Than You Expect!
//             </h1>
//           </div>

//           <div className="md:ml-auto w-full p-0">
//             <div className="mb-4 text-center">
//               <h2 className="text-[25px] text-white mb-4 font-normal">
//                 Please submit your details below to receive your free quote
//               </h2>
//               <p className="text-cyan-400 text-[25px] font-normal">
//                 Book your 100% discreet consultation
//               </p>
//             </div>

//             <ContactForm
//               formData={formData}
//               handleInputChange={handleInputChange}
//               handleSubmit={handleSubmit}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[60vh] flex items-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('https://hendersonthomasinvestigations.co.uk/wp-content/uploads/2023/05/0d6dcfcf-3ee9-40ee-a127-8940497694fc-bg2.original.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main Headline */}
          <h1 className="font-mont text-[2.5rem] text-white md:mx-0 flex items-center justify-center text-center mb-4 max-w-5xl tracking-normal">
            Finding a Trustworthy Private Investigator Might Be More Affordable Than You Expect!
          </h1>

          {/* Supporting Text */}
          <p className="text-white text-lg mb-8 font-normal max-w-2xl">
            We offer a 100% free consultation – with no obligation. Simply complete the questions below or call our office today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-6 pt-10">
            <div>
              <a
                href="tel:07825416466"
                className="flex items-center justify-center bg-[#0047b2] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#00a4d6] transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.7 2.8a2 2 0 01-.45 1.95l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.95-.45l2.8.7A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"
                  />
                </svg>
                078 2541 6466
              </a>
            </div>
            <a
              href="#contact"
              className="flex items-center justify-center bg-white text-[#0047b2] border border-[#0047b2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#e6f4ff] transition-colors"
            >
              CALL US TODAY FOR A <span className="font-bold ml-1">FREE QUOTE</span>
            </a>
          </div>

          {/* Agent Available Now */}
          <div className="flex items-center justify-center">
            <span className="relative flex h-3 w-3 mr-2">
              {/* Blinking circle */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              {/* Solid dot */}
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-200 text-sm">Agent Available Now</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
