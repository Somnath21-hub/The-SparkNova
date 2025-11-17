import React from "react";

const ServiceLeft = ({ icon, title, desc, tag }) => {
  return (
    <div className="relative w-full md:w-[35%] flex flex-col justify-center items-center p-9 bg-gradient-to-br from-[#00b3b3] via-teal-50 to-cyan-50">
      <div className="w-16 h-16 rounded-full bg-white/90 shadow flex items-center justify-center text-4xl mb-6 border-2 border-[#00b3b3]">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[#0d2b2e] text-center mb-3">
        {title}
      </h3>
      <p className="text-gray-700 text-center mb-4">{desc}</p>
      <div className="inline-block mt-2 bg-cyan-50 px-5 py-2 rounded-full shadow text-xs text-[#00b3b3] font-bold border border-[#00b3b3]">
        {tag}
      </div>

      <span className="block mt-5 w-12 h-1 rounded-full bg-gradient-to-r from-[#00b3b3] via-cyan-200 to-blue-300 opacity-50" />
    </div>
  );
};

export default ServiceLeft;
