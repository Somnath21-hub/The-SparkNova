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
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const values = [
    {
      icon: (
        <IoMdPeople className="w-7 h-7 group-hover:scale-125 transition-transform duration-300" />
      ),
      title: "Inclusivity",
      description: "Equal opportunities for all colleges regardless of tier",
      color: "from-pink-200 to-purple-200",
    },
    {
      icon: (
        <BiTargetLock className="w-7 h-7 group-hover:scale-125 transition-transform duration-300" />
      ),
      title: "Excellence",
      description: "Best-in-class incubation support and resources",
      color: "from-blue-100 to-cyan-200",
    },
    {
      icon: (
        <AiOutlineBulb className="w-7 h-7 group-hover:scale-125 transition-transform duration-300" />
      ),
      title: "Innovation",
      description: "Constantly evolving to meet startup ecosystem needs",
      color: "from-yellow-100 to-orange-200",
    },
    {
      icon: (
        <MdOutlineWorkspacePremium className="w-7 h-7 group-hover:scale-125 transition-transform duration-300" />
      ),
      title: "Collaboration",
      description:
        "Building strong networks between colleges, startups, and investors",
      color: "from-emerald-100 to-teal-200",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-20 px-4 relative overflow-hidden rounded-xl">
      {/* Decorative blurred circle */}
      <div className="absolute -top-16 -left-14 w-44 h-44 bg-gradient-to-br from-blue-200 to-purple-200 opacity-30 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 drop-shadow">
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
              className={`value-card group cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border-t-4 border-transparent hover:border-blue-400 transition-all duration-300 hover:shadow-2xl`}
              style={{ opacity: 0, transform: "translateY(40px)" }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center text-[#32808D] bg-gradient-to-tr ${value.color} shadow group-hover:shadow-lg transition-all duration-300`}
              >
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative blurred circle */}
      <div className="absolute -bottom-12 right-0 w-36 h-36 bg-gradient-to-br from-purple-100 to-blue-100 opacity-30 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
};

export default Values;
