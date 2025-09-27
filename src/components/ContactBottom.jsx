// import React, { useRef, useState } from "react";

// const ContactFormSection = () => {
//   const formRef = useRef();
//   const [errors, setErrors] = useState({});
//   const [isSending, setIsSending] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(formRef.current);
//     const data = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       phone: formData.get("phone"),
//       message: formData.get("message"),
//     };

//     // Validation
//     const newErrors = {};
//     if (!data.name) newErrors.name = "Please complete this required field.";
//     if (!data.email) newErrors.email = "Please complete this required field.";
//     if (!data.phone) newErrors.phone = "Please complete this required field.";
//     if (!data.message) newErrors.message = "Please complete this required field.";

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setErrors({});
//     setIsSending(true);

//     try {
//       const response = await fetch("http://localhost:5000/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert("✅ Message sent successfully!");
//         formRef.current.reset();
//       } else {
//         alert("❌ Failed to send message.");
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("❌ Failed to send message.");
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative py-20 bg-cover bg-center bg-no-repeat flex items-center"
//       style={{ backgroundImage: `url('contact-bottom.jpg')` }}
//     >
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-12">
//             <h2 className="text-3xl text-white mb-6 leading-tight">
//               Please Submit Your Details Below To Receive Your Free Quote
//             </h2>
//             <p className="text-cyan-400 text-xl font-medium">
//               Book your 100% discreet consultation
//             </p>
//           </div>

//           <div className="max-w-2xl mx-auto">
//             <form
//               ref={formRef}
//               onSubmit={handleSubmit}
//               className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
//             >
//               <div className="space-y-5">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg placeholder-white/60 text-lg"
//                 />
//                 {errors.name && (
//                   <div className="text-red-400 text-left text-sm">{errors.name}</div>
//                 )}

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg placeholder-white/60 text-lg"
//                 />
//                 {errors.email && (
//                   <div className="text-red-400 text-left text-sm">{errors.email}</div>
//                 )}

//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number*"
//                   className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg placeholder-white/60 text-lg"
//                 />
//                 {errors.phone && (
//                   <div className="text-red-400 text-left text-sm">{errors.phone}</div>
//                 )}

//                 <textarea
//                   name="message"
//                   placeholder="Tell us your case"
//                   rows="3"
//                   className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg placeholder-white/60 text-lg resize-none"
//                 />
//                 {errors.message && (
//                   <div className="text-red-400 text-left text-sm">{errors.message}</div>
//                 )}

//                 <div className="w-full flex justify-center pt-4">
//                   <button
//                     type="submit"
//                     disabled={isSending}
//                     className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg"
//                   >
//                     {isSending ? "Sending..." : "Receive Free Quote"}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactFormSection;
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactFormSection = () => {
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  // REPLACE THESE WITH YOUR ACTUAL CREDENTIALS
  const EMAILJS_CONFIG = {
    serviceId: "service_z9nrpnh",
    templateId: "template_ito81i4", 
    publicKey: "KMtxeuThzMItKsmDc", 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    // Validation
    const newErrors = {};
    if (!data.name) newErrors.name = "Please complete this required field.";
    if (!data.email) newErrors.email = "Please complete this required field.";
    if (!data.phone) newErrors.phone = "Please complete this required field.";
    if (!data.message) newErrors.message = "Please complete this required field.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          title: `New Quote Request from ${data.name}`,
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          time: new Date().toLocaleString(),
        },
        EMAILJS_CONFIG.publicKey
      );

      if (result.status === 200) {
        alert("✅ Message sent successfully! We'll contact you shortly.");
        formRef.current.reset();
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url('contact-bottom.jpg')` }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl text-white mb-6 leading-tight">
              Please Submit Your Details Below To Receive Your Free Quote
            </h2>
            <p className="text-cyan-400 text-xl font-medium">
              Book your 100% discreet consultation
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg placeholder-white/60 text-lg"
                />
                {errors.name && (
                  <div className="text-red-400 text-left text-sm">{errors.name}</div>
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg placeholder-white/60 text-lg"
                />
                {errors.email && (
                  <div className="text-red-400 text-left text-sm">{errors.email}</div>
                )}

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg placeholder-white/60 text-lg"
                />
                {errors.phone && (
                  <div className="text-red-400 text-left text-sm">{errors.phone}</div>
                )}

                <textarea
                  name="message"
                  placeholder="Tell us your case"
                  rows="3"
                  className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg placeholder-white/60 text-lg resize-none"
                />
                {errors.message && (
                  <div className="text-red-400 text-left text-sm">{errors.message}</div>
                )}

                <div className="w-full flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? "Sending..." : "Receive Free Quote"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;