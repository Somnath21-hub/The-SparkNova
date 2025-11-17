import React from "react";
import ServiceLeft from "./ServiceLeft";
import ServiceRight from "./ServiceRight";

const ServiceCard = ({ service }) => {
  return (
    <div className="relative flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg ml-1 mr-1 bg-white/95 backdrop-blur border-t-4 border-cyan-100 transition-all hover:border-[#00b3b3] group">
      <div className="md:w-1/3 w-full flex flex-col items-center justify-center p-9 bg-gradient-to-br from-[#00b3b3] via-cyan-100 to-blue-100 relative">
        <div className="w-16 h-16 rounded-full bg-white/90 shadow flex items-center justify-center text-3xl mb-4 border-2 border-[#00b3b3] group-hover:scale-105 transition-transform">
          {service.icon}
        </div>
        <div className="w-full text-center">
          <h3 className="text-xl font-bold text-[#0d2b2e] mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-3">{service.desc}</p>
          <div className="text-xs font-semibold bg-teal-50 text-[#00b3b3] rounded-full px-3 py-1 inline-block mb-1">
            {service.tag}
          </div>
        </div>
      </div>

      <div className="md:w-2/3 w-full p-7 flex flex-col justify-center bg-white/80 border-l-8 border-cyan-50 group-hover:border-[#00b3b3] transition-colors">
        <div className="grid grid-cols-2 gap-6 text-sm">
          <ul className="space-y-2">
            {service.pointsLeft.map((pt, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="text-[#32808D] text-lg font-extrabold mb-1">
                  •
                </span>
                <span className="text-gray-700">{pt}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {service.pointsRight.map((pt, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="text-[#00b3b3] text-lg font-extrabold mb-1">
                  •
                </span>
                <span className="text-gray-700">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
