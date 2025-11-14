import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-[#32808D] font-bold text-lg mb-3">
              TheSparknova
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Empowering Tier 2-3 college incubation centers to build tomorrow's
              startups through comprehensive ecosystem support.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-gray-600 hover:text-[#32808D] transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#32808D] transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#32808D] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#32808D] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#32808D] transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#32808D] transition-colors"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* For */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3">For</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#32808D] transition-colors"
                >
                  Colleges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#32808D] transition-colors"
                >
                  Students
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#32808D] transition-colors"
                >
                  Investors & Mentors
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-600">
                <FaEnvelope className="w-4 h-4" />
                <span>info@thesparknova.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <FaPhone className="w-4 h-4" />
                <span>+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <FaMapMarkerAlt className="w-4 h-4 mt-1" />
                <span>IIT Patna Campus, Bihar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 TheSparknova. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
