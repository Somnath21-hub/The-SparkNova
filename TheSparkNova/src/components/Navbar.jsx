import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      <h1 className="text-2xl font-bold text-[#0d2b2e]">TheSparknova</h1>
      <ul className="hidden md:flex space-x-8 font-medium">
        <li className="text-[#0d2b2e] hover:text-[#008080] cursor-pointer">Home</li>
        <li className="hover:text-[#008080] cursor-pointer">About</li>
        <li className="hover:text-[#008080] cursor-pointer">Services</li>
        <li className="hover:text-[#008080] cursor-pointer">Events</li>
        <li className="hover:text-[#008080] cursor-pointer">For Colleges</li>
        <li className="hover:text-[#008080] cursor-pointer">For Students</li>
        <li className="hover:text-[#008080] cursor-pointer">For Investors</li>
        <li className="hover:text-[#008080] cursor-pointer">Resources</li>
        <li className="hover:text-[#008080] cursor-pointer">Contact</li>
      </ul>
      <button className="bg-[#00b3b3] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#008080]">
        Partner With Us
      </button>
    </nav>
  );
};

export default Navbar;
