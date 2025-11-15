import React, { useEffect, useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// Component 1: Hero Section with Contact Info Cards

const ContactInfo = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
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
    };

    animateSection();
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
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Contact Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="contact-card bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div className="w-16 h-16 bg-[#E8F4F6] rounded-full flex items-center justify-center mx-auto mb-4 text-[#32808D]">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-800 font-semibold mb-1">{info.primary}</p>
              <p className="text-gray-500 text-sm">{info.secondary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
