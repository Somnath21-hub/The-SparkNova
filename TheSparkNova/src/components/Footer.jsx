import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-white py-16 px-6 overflow-hidden font-inter">
      
      {/* Tech Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#32808D] opacity-[0.15] blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#164046] opacity-[0.15] blur-3xl rounded-full animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          {/* Company Info */}
          <div className="transition-all hover:scale-[1.03]">
            <h3 className="text-[#32808D] font-poppins font-extrabold text-2xl tracking-wide mb-3">
              TheSparknova
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed font-inter mb-4">
              Empowering Tier 2-3 college incubation centers to build tomorrow's
              startups through complete ecosystem support.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-100 hover:bg-[#32808D] hover:text-white transition-all shadow-md"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-gray-100 hover:bg-[#32808D] hover:text-white transition-all shadow-md"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="transition-all hover:scale-[1.03]">
            <h4 className="font-poppins font-semibold text-gray-900 mb-4 text-lg tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-2 text-[15px] font-inter">
              {["About Us", "Services", "Events", "Resources"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#32808D] hover:tracking-wide transition-all font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For */}
          <div className="transition-all hover:scale-[1.03]">
            <h4 className="font-poppins font-semibold text-gray-900 mb-4 text-lg tracking-wide">
              For
            </h4>

            <ul className="space-y-2 text-[15px] font-inter">
              {["Colleges", "Students", "Investors & Mentors"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#32808D] hover:tracking-wide transition-all font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="transition-all hover:scale-[1.03]">
            <h4 className="font-poppins font-semibold text-gray-900 mb-4 text-lg tracking-wide">
              Contact
            </h4>

            <ul className="space-y-3 text-[15px] font-inter">
              <li className="flex items-center gap-3 text-gray-600">
                <FaEnvelope className="w-5 h-5 text-[#32808D]" />
                <span className="font-medium">helloidea@thesparknova.com</span>
              </li>

              <li className="flex items-center gap-3 text-gray-600">
                <FaPhone className="w-5 h-5 text-[#32808D]" />
                <span className="font-medium">+91-9631410611</span>
              </li>

              <li className="flex items-start gap-3 text-gray-600">
                <FaMapMarkerAlt className="w-5 h-5 text-[#32808D] mt-1" />
                <span className="font-medium">IIT Patna Campus, Bihar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-6 text-center">
          <p className="text-gray-600 text-sm font-inter tracking-wide">
            © 2025 TheSparknova. All rights reserved.
          </p>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.22; transform: scale(1.15); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          .font-inter { font-family: 'Inter', sans-serif; }
          .font-poppins { font-family: 'Poppins', sans-serif; }
        `}
      </style>
    </footer>
  );
};

export default Footer;
