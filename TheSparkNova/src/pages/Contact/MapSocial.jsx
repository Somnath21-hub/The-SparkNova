import { useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaLinkedin, FaInstagram } from "react-icons/fa";

const MapSocial = () => {
  const mapRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.style.opacity = "1";
        mapRef.current.style.transform = "translateY(0)";
      }
    }, 220);
    setTimeout(() => {
      if (socialRef.current) {
        socialRef.current.style.opacity = "1";
        socialRef.current.style.transform = "translateY(0)";
      }
    }, 480);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-20 px-4 overflow-hidden min-h-[520px]">
      <div className="absolute -top-24 left-1/3 w-80 h-44 bg-gradient-to-br from-cyan-100 to-blue-200 opacity-25 rounded-b-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-56 h-36 bg-gradient-to-br from-teal-100 to-cyan-200 opacity-30 rounded-tl-3xl blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 relative z-10">
        <div
          ref={mapRef}
          className="relative w-full lg:w-2/5 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(40px)" }}
        >
          <div className="absolute -top-8 left-10 z-20">
            {/* Angled ribbon */}
            <div className="bg-gradient-to-br from-[#00b3b3] to-cyan-200 text-white font-bold px-7 py-2 rounded-xl transform -skew-x-12 shadow-lg text-lg tracking-wide">
              Visit Us
            </div>
          </div>
          <div className="relative bg-white/95 backdrop-blur-md rounded-3xl px-10 py-16 shadow-2xl border-l-8 border-cyan-200 flex flex-col items-center justify-center mt-8 lg:mt-24 lg:ml-12">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-teal-200 rounded-full flex items-center justify-center mb-6 text-[#00b3b3] shadow-lg">
              <FaMapMarkerAlt className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#0d2b2e] mb-2 text-center">
              IIT Patna Campus, Bihar
            </h3>
            <p className="text-[#32808D] font-semibold text-center mb-1">
              Our Office Location
            </p>
            <p className="text-gray-500 text-sm text-center">
              Visit us for meetings, collaborations or events!
            </p>
          </div>
        </div>

        <div
          ref={socialRef}
          className="relative w-full lg:w-2/5 bg-white/90 backdrop-blur-2xl rounded-3xl px-8 py-12 shadow-2xl border-l-8 border-teal-200 flex flex-col items-center transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(40px)" }}
        >
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex gap-8 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-100 to-teal-200 text-[#00b3b3] group-hover:scale-110 group-hover:shadow-lg transition duration-200 shadow">
                  <FaLinkedin className="w-8 h-8" />
                </span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-cyan-200 text-[#32808D] group-hover:scale-110 group-hover:shadow-lg transition duration-200 shadow">
                  <FaInstagram className="w-8 h-8" />
                </span>
              </a>
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-[#0d2b2e] mb-3 mt-4 text-center">
              Follow Us on Social Media
            </h3>
            <div className="space-y-2 text-center w-full">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-medium text-gray-700 hover:text-[#00b3b3] transition-colors tracking-tight"
              >
                TheSparknova on LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-medium text-gray-700 hover:text-[#32808D] transition-colors tracking-tight"
              >
                @thesparknova on Instagram
              </a>
            </div>
            <span className="block w-16 h-1.5 rounded-full bg-gradient-to-r from-cyan-200 via-[#00b3b3] to-blue-200 opacity-60 mx-auto mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSocial;
