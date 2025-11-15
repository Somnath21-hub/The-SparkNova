import { useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaLinkedin, FaInstagram } from "react-icons/fa";

const MapSocial = () => {
  const mapRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.style.opacity = "1";
          mapRef.current.style.transform = "translateX(0)";
        }
      }, 200);

      setTimeout(() => {
        if (socialRef.current) {
          socialRef.current.style.opacity = "1";
          socialRef.current.style.transform = "translateX(0)";
        }
      }, 500);
    };

    animateSection();
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div
            ref={mapRef}
            className="transition-all duration-700"
            style={{ opacity: 0, transform: "translateX(-30px)" }}
          >
            <div className="bg-gray-100 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-[#E8F4F6] rounded-full flex items-center justify-center mb-6 text-[#32808D]">
                <FaMapMarkerAlt className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                IIT Patna Campus, Bihar
              </h3>
              <p className="text-gray-600">Visit us at our office location</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div
            ref={socialRef}
            className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-700"
            style={{ opacity: 0, transform: "translateX(30px)" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
            <div className="space-y-4 mb-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-[#32808D] transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
                <span>TheSparknova on LinkedIn</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-[#32808D] transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
                <span>@thesparknova on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSocial;
