import { useEffect, useRef } from "react";
import { FaAward, FaCalendarAlt, FaGlobe } from "react-icons/fa";

const Mentor = () => {
  const sectionRef = useRef(null);
  const benefitsRef = useRef(null);
  const expertiseRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (sectionRef.current) {
        sectionRef.current.style.opacity = "1";
        sectionRef.current.style.transform = "translateY(0)";
      }
      setTimeout(() => {
        if (benefitsRef.current) {
          const items = benefitsRef.current.querySelectorAll(".benefit-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, index * 120);
          });
        }
      }, 250);

      setTimeout(() => {
        if (expertiseRef.current) {
          const items =
            expertiseRef.current.querySelectorAll(".expertise-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "scale(1)";
            }, index * 80);
          });
        }
      }, 750);
    };
    animateSection();
  }, []);

  const benefits = [
    {
      icon: <FaCalendarAlt className="w-6 h-6" />,
      title: "Flexible Commitment",
      description: "Set your own volunteering pace",
      gradient: "from-cyan-100 to-blue-100",
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      title: "Meaningful Impact",
      description: "Guide startups to success, directly",
      gradient: "from-teal-100 to-cyan-100",
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Tailored Matching",
      description: "Connect only with relevant teams",
      gradient: "from-blue-100 to-teal-100",
    },
  ];

  const expertiseAreas = [
    "Product Development",
    "Go-to-Market Strategy",
    "Fundraising",
    "Operations & Finance",
    "Technology & Engineering",
    "Sales & Marketing",
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-24 px-4 overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-32 bg-gradient-to-br from-cyan-100 to-blue-100 opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div
          ref={sectionRef}
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#152F38] mb-6">
            Become a Mentor
          </h2>
          <p className="text-lg text-[#32808D] md:text-xl max-w-2xl mx-auto">
            Empower the next generation of founders. Volunteer as little as{" "}
            <span className="font-bold">2 hours monthly</span> to make a lasting
            difference.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="w-full lg:w-7/12 mb-10 lg:mb-0">
            <h3 className="text-2xl font-bold text-[#152F38] mb-7 text-left lg:text-center">
              Mentor Perks
            </h3>
            <div
              ref={benefitsRef}
              className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch"
            >
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`benefit-item bg-gradient-to-br ${benefit.gradient} rounded-2xl shadow-xl px-7 py-8 flex-1 flex flex-col items-center transition-all duration-700`}
                  style={{ opacity: 0, transform: "translateY(30px)" }}
                >
                  <span className="mb-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#32808D] shadow-lg">
                    {benefit.icon}
                  </span>
                  <h4 className="font-semibold text-lg text-[#0d2b2e] mb-2 text-center">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-700 text-sm text-center">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl px-10 py-10 border-l-8 border-teal-200">
              <h3 className="text-2xl font-bold text-[#0d2b2e] mb-6">
                Areas of Expertise
              </h3>
              <div
                ref={expertiseRef}
                className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4"
              >
                {expertiseAreas.map((area, i) => (
                  <div
                    key={i}
                    className="expertise-item flex items-center bg-gradient-to-r from-cyan-50 to-teal-50 px-4 py-2 rounded-xl font-medium text-[#32808D] text-base shadow transition-transform duration-700"
                    style={{ opacity: 0, transform: "scale(0.95)" }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00B3B3] mr-3"></span>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-20 w-40 h-12 bg-gradient-to-br from-teal-100 to-blue-100 opacity-8 rounded-2xl blur-2xl pointer-events-none" />
    </div>
  );
};

export default Mentor;
