import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const ServiceRight = ({ pointsLeft, pointsRight }) => {
  return (
    <div
      className="
        w-full md:w-[65%]
        p-9 bg-white/90 backdrop-blur
        grid grid-cols-1 md:grid-cols-2 gap-8 border-l-4 border-cyan-100
      "
      style={{ minWidth: 0 }}
    >
      <ul className="space-y-3">
        {pointsLeft.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-700">
            <AiOutlineCheck
              size={21}
              className="text-[#00b3b3] drop-shadow-md mt-1"
            />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
      <ul className="space-y-3">
        {pointsRight.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-700">
            <AiOutlineCheck
              size={21}
              className="text-[#32808D] drop-shadow-md mt-1"
            />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceRight;
