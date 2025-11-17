import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const menuLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/events", label: "Events" },
  { to: "/investors", label: "Investors" },
  { to: "/resources", label: "Resources" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const toggleDropdown = (e) => {
    if (
      e.type === "click" ||
      (e.type === "keydown" && (e.key === "Enter" || e.key === " "))
    ) {
      setDropdownOpen((v) => !v);
    }
  };

  return (
    <nav className="w-full fixed top-6 left-0 z-50 pointer-events-none px-3 sm:px-6 lg:px-8">
      <div className="relative max-w-6xl mx-auto pointer-events-auto">
        {/* Background */}
        <div className="absolute inset-0 h-20 bg-white/60 border-y border-cyan-200 backdrop-blur-xl shadow-xl rounded-xl pointer-events-none" />
        <div className="relative flex items-center justify-between h-20 px-3 sm:px-6">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#32808D] via-[#45a1ad] to-[#00B3B3] bg-clip-text text-transparent"
          >
            TheSparknova
          </Link>

          <ul className="hidden md:flex gap-6 font-semibold items-center">
            {menuLinks.map((link) => (
              <li key={link.to} className="relative flex items-center">
                <Link
                  to={link.to}
                  className={`px-2 py-2 flex items-center transition group
                    ${
                      location.pathname === link.to
                        ? "text-[#00B3B3]"
                        : "text-[#152F38] hover:text-[#00B3B3]"
                    }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`h-1 w-full block mt-1 rounded transition-all
                      ${
                        location.pathname === link.to
                          ? "bg-gradient-to-r from-cyan-400 to-blue-400 scale-x-100 animate-underline"
                          : "bg-gradient-to-r from-cyan-100 to-blue-100 scale-x-0 group-hover:scale-x-100"
                      }`}
                    style={{ transition: "transform .2s" }}
                  />
                </Link>
              </li>
            ))}

            <li className="relative flex items-center">
              <button
                className={`px-2 py-2 flex items-center transition group
                  ${
                    dropdownOpen
                      ? "text-[#00B3B3]"
                      : "text-[#152F38] hover:text-[#00B3B3]"
                  }`}
                onClick={toggleDropdown}
                onKeyDown={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                tabIndex={0}
                style={{ minWidth: 0 }}
              >
                <span className="flex items-center">
                  Programs
                  <span className="ml-1">▾</span>
                </span>
                <span
                  className={`h-1 w-full block mt-1 rounded transition-all
                    ${
                      dropdownOpen
                        ? "bg-gradient-to-r from-cyan-400 to-blue-400 scale-x-100 animate-underline"
                        : "bg-gradient-to-r from-cyan-100 to-blue-100 scale-x-0 group-hover:scale-x-100"
                    }`}
                  style={{ transition: "transform .2s" }}
                />
              </button>
              {/* Dropdown */}
              <ul
                className={`absolute left-0 top-10 w-52 py-3 bg-white shadow-xl rounded-lg border border-cyan-100 transition-all
                ${
                  dropdownOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <li>
                  <Link
                    to="/students"
                    className="block px-5 py-2 hover:bg-cyan-50"
                  >
                    For Students
                  </Link>
                </li>
                <li>
                  <Link
                    to="/colleges"
                    className="block px-5 py-2 hover:bg-cyan-50"
                  >
                    For Colleges
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <Link
            to="/contact"
            className="hidden md:block bg-gradient-to-r from-[#32808D] to-[#00B3B3]
              text-white px-6 py-2 font-bold rounded-xl shadow-md hover:scale-105 transition"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden z-40 cursor-pointer"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setDropdownOpen(false);
            }}
          >
            {menuOpen ? (
              <HiX className="text-3xl text-[#32808D]" />
            ) : (
              <HiMenu className="text-3xl text-[#32808D]" />
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-white/80 backdrop-blur-xl z-30 px-3">
            <ul className="flex flex-col items-center pt-20 gap-6 text-lg font-semibold">
              {menuLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-2 hover:text-[#00B3B3]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Programs for Mobile */}
              <li>
                <button
                  onClick={toggleDropdown}
                  className="py-2 px-6 bg-white rounded-lg shadow flex items-center"
                >
                  Programs ▾
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 text-center bg-white shadow-xl rounded-lg border border-cyan-100">
                    <li>
                      <Link
                        to="/students"
                        onClick={() => setMenuOpen(false)}
                        className="block px-6 py-2 hover:bg-cyan-50"
                      >
                        For Students
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/colleges"
                        onClick={() => setMenuOpen(false)}
                        className="block px-6 py-2 hover:bg-cyan-50"
                      >
                        For Colleges
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Contact Button (Mobile) */}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="bg-gradient-to-r from-[#32808D] to-[#00B3B3]
                    text-white px-14 py-3 font-bold rounded-xl shadow-xl"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
