import { useEffect, useRef } from "react";
import { FaHandshake, FaUserGraduate, FaNewspaper } from "react-icons/fa";

const iconMap = [
  <FaHandshake className="w-7 h-7 text-white" />,
  <FaUserGraduate className="w-7 h-7 text-white" />,
  <FaNewspaper className="w-7 h-7 text-white" />,
];

const QuickLinks = () => {
  const linksRef = useRef(null);

  useEffect(() => {
    if (linksRef.current) {
      const items = linksRef.current.querySelectorAll(".quick-link-item");
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, index * 130);
      });
    }
  }, []);

  const quickLinks = [
    {
      label: "Partnership Inquiries",
      email: "partnerships@thesparknova.com",
      iconColor: "bg-gradient-to-r from-[#00b3b3] to-cyan-400",
    },
    {
      label: "Student Support",
      email: "students@thesparknova.com",
      iconColor: "bg-gradient-to-r from-blue-500 to-blue-300",
    },
    {
      label: "Press & Media",
      email: "press@thesparknova.com",
      iconColor: "bg-gradient-to-r from-teal-600 to-teal-300",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h3 className="text-3xl font-extrabold text-[#0d2b2e] mb-10 text-center tracking-tight">
          Quick Links
        </h3>
        <div ref={linksRef} className="flex flex-col gap-8">
          {quickLinks.map((link, index) => (
            <div
              key={index}
              className="quick-link-item flex flex-col sm:flex-row items-center justify-between group bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-cyan-100 hover:border-[#00b3b3] transition-all py-5 px-6 sm:px-8"
              style={{ opacity: 0, transform: "translateY(22px)" }}
            >
              <div
                className={`flex items-center gap-4 mb-2 sm:mb-0 px-5 py-3 rounded-full ${link.iconColor} group-hover:scale-105 transition-transform min-w-[220px]`}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black/20">
                  {iconMap[index]}
                </span>
                <span className="text-lg font-semibold text-white drop-shadow-md tracking-tight">
                  {link.label}
                </span>
              </div>
              {/* Right: email with accent underline */}
              <a
                href={`mailto:${link.email}`}
                className="text-[#00b3b3] font-bold underline underline-offset-2 decoration-cyan-300 hover:text-[#32808D] transition-colors break-all text-base ml-0 sm:ml-8"
              >
                {link.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
