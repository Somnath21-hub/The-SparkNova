import React, { useEffect, useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".contact-card");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, index * 150);
        });
      }
    }, 400);
  }, []);

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Email",
      primary: "helloidea@thesparknova.com",
      secondary: "General inquiries",
    },
    {
      icon: <FaPhone className="w-8 h-8" />,
      title: "Phone",
      primary: "+91-9631410611",
      secondary: "Mon-Fri, 9AM-6PM",
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "Office",
      primary: "IIT Patna Campus",
      secondary: "Bihar, India",
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Response Time",
      primary: "24-48 hours",
      secondary: "Typical response",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-20 px-4 overflow-hidden">
      <div className="absolute -top-14 -left-14 w-40 h-40 bg-gradient-to-br from-cyan-200 to-teal-200 opacity-25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-40 h-40 bg-gradient-to-br from-cyan-100 to-blue-200 opacity-25 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Contact Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-9"
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="contact-card bg-white/90 backdrop-blur-lg rounded-2xl px-7 py-10 text-center shadow-lg border-t-4 border-cyan-100 hover:border-[#00b3b3] hover:shadow-xl transition-all duration-400 group"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#00b3b3] shadow group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0d2b2e] mb-2 tracking-tight">
                {info.title}
              </h3>
              <p className="text-[#32808D] font-semibold mb-1 select-all">
                {info.primary}
              </p>
              <p className="text-gray-500 text-sm">{info.secondary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
