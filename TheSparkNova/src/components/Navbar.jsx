import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 shadow-sm bg-white relative">
      <h1 className="text-2xl font-bold text-[#32808D]">
        <Link to="/">TheSparknova</Link>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 font-medium items-center">
        <li>
          <Link to="/about" className="hover:text-[#32808D]">
            About
          </Link>
        </li>

        <li>
          <Link to="/services" className="hover:text-[#32808D]">
            Services
          </Link>
        </li>

        <li>
          <Link to="/events" className="hover:text-[#32808D]">
            Events
          </Link>
        </li>

        <li>
          <Link to="/investors" className="hover:text-[#32808D]">
            Investors
          </Link>
        </li>
        {/* Programs Dropdown - Desktop */}
        <li className="relative group cursor-pointer">
          <span className="hover:text-[#32808D] flex items-center">
            Programs ▾
          </span>

          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
            <li>
              <Link
                to="/students"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                For Students
              </Link>
            </li>

            <li>
              <Link
                to="/colleges"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                For Colleges
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/resources" className="hover:text-[#32808D]">
            Resources
          </Link>
        </li>
      </ul>

      {/* Contact Button */}
      <Link
        to="/contact"
        className="hidden md:block bg-[#32808D] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#32808D] transition"
      >
        Contact Us
      </Link>

      {/* Mobile Hamburger */}
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <HiX className="text-3xl text-[#0d2b2e]" />
        ) : (
          <HiMenu className="text-3xl text-[#0d2b2e]" />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md py-6 flex flex-col items-center space-y-6 md:hidden z-20">
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          {/* Mobile Dropdown */}
          <li className="flex flex-col items-center">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="font-medium"
            >
              Programs ▾
            </button>

            {dropdownOpen && (
              <ul className="mt-2 bg-gray-50 rounded-md w-40 text-center shadow">
                <li className="py-2 border-b">
                  <Link to="/students" onClick={() => setMenuOpen(false)}>
                    For Students
                  </Link>
                </li>

                <li className="py-2">
                  <Link to="/colleges" onClick={() => setMenuOpen(false)}>
                    For Colleges
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>

          <li>
            <Link to="/events" onClick={() => setMenuOpen(false)}>
              Events
            </Link>
          </li>

          <li>
            <Link to="/investors" onClick={() => setMenuOpen(false)}>
              Investors
            </Link>
          </li>

          <li>
            <Link to="/resources" onClick={() => setMenuOpen(false)}>
              Resources
            </Link>
          </li>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#32808D] text-white px-4 py-2 rounded-md font-semibold"
          >
            Contact Us
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
