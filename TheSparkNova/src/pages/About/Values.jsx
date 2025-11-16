import { useEffect, useRef } from "react";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineBulb } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import gsap from "gsap";

const Values = () => {
  const valuesRef = useRef(null);

  useEffect(() => {
    if (valuesRef.current) {
      const cards = valuesRef.current.querySelectorAll(".value-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 38, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.17,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const values = [
    {
      icon: (
        <IoMdPeople className="w-8 h-8 group-hover:scale-110 text-[#00b3b3] transition-transform duration-300" />
      ),
      title: "Inclusivity",
      description: "Equal opportunities for all colleges regardless of tier",
      border: "border-cyan-400",
      blob: "from-cyan-100 to-teal-100",
    },
    {
      icon: (
        <BiTargetLock className="w-8 h-8 group-hover:scale-110 text-[#32808D] transition-transform duration-300" />
      ),
      title: "Excellence",
      description: "Best-in-class incubation support and resources",
      border: "border-teal-400",
      blob: "from-teal-100 to-cyan-200",
    },
    {
      icon: (
        <AiOutlineBulb className="w-8 h-8 group-hover:scale-110 text-[#00b3b3] transition-transform duration-300" />
      ),
      title: "Innovation",
      description: "Constantly evolving to meet startup ecosystem needs",
      border: "border-cyan-400",
      blob: "from-cyan-100 to-blue-200",
    },
    {
      icon: (
        <MdOutlineWorkspacePremium className="w-8 h-8 group-hover:scale-110 text-[#32808D] transition-transform duration-300" />
      ),
      title: "Collaboration",
      description:
        "Building strong networks between colleges, startups, and investors",
      border: "border-teal-400",
      blob: "from-teal-100 to-blue-100",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-cyan-100 py-20 px-4 relative overflow-hidden rounded-xl">
      {/* Top blob accent */}
      <div className="absolute -top-16 -left-14 w-44 h-44 bg-gradient-to-br from-cyan-200 to-teal-100 opacity-30 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#0d2b2e] mb-3 drop-shadow">
            Our Values
          </h2>
          <p className="text-gray-600 text-lg">
            The principles that guide everything we do
          </p>
        </div>
        <div
          ref={valuesRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className={`value-card group cursor-pointer bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center border-t-4 ${value.border} transition-all duration-300 hover:shadow-2xl hover:border-[#00b3b3]`}
              style={{ opacity: 0, transform: "translateY(38px)" }}
            >
              {/* Glass bubble with teal/cyan blob */}
              <div
                className={`w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center shadow bg-gradient-to-tr ${value.blob} relative`}
              >
                {value.icon}
                {/* Decorative small accent blob */}
                <span
                  className={`absolute -right-2 bottom-2 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-100 to-teal-200 opacity-50`}
                />
              </div>
              <h3 className="text-lg font-bold text-[#0d2b2e] mb-2 group-hover:text-[#00b3b3] transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom blob accent */}
      <div className="absolute -bottom-12 right-0 w-36 h-36 bg-gradient-to-br from-cyan-100 to-teal-100 opacity-30 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
};

export default Values;
