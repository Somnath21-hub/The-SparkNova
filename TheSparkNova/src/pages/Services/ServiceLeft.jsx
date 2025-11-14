import React from "react";

const ServiceLeft = ({ icon, title, desc, tag }) => {
  return (
    <div className="w-full md:w-[35%] bg-[#f3fafa] p-8 flex flex-col justify-center">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-2xl font-semibold text-[#0d2b2e]">{title}</h3>

      <p className="text-gray-600 mt-2">{desc}</p>

      <div className="inline-block mt-4 bg-white px-4 py-2 rounded-lg shadow text-sm text-gray-700">
        {tag}
      </div>
    </div>
  );
};

export default ServiceLeft;
