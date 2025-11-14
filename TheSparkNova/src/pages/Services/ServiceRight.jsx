import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const ServiceRight = ({ pointsLeft, pointsRight }) => {
  return (
    <div
      className="
        w-full md:w-[65%]
        p-8 bg-white
        grid grid-cols-1 md:grid-cols-2
        gap-8
      "
      style={{ minWidth: 0 }}
    >
      <ul className="space-y-3">
        {pointsLeft.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-700">
            <AiOutlineCheck size={18} className="text-[#008080] mt-1" />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>

      <ul className="space-y-3">
        {pointsRight.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-700">
            <AiOutlineCheck size={18} className="text-[#008080] mt-1" />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceRight;
