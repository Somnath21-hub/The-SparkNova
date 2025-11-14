import React from "react";
import { Link } from "react-router-dom";

const GetStarted = ({ heading, para, btn1, btn2 }) => {
  return (
    <div className="w-full bg-[#2e7b86] py-20 mt-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-white text-3xl md:text-4xl font-bold">{heading}</h2>

        <p className="text-white/90 mt-4 text-lg">{para}</p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link to="/contact">
            <button className="bg-white text-[#2e7b86] font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
              {btn1}
            </button>
          </Link>

          <Link to="/plans">
            <button className="border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-[#2e7b86] transition">
              {btn2}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
