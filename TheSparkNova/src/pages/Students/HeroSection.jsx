import { useEffect, useRef } from "react";
import gsap from "gsap";

const FloatingBg = () => {
  const floatRef = useRef(null);

  useEffect(() => {
    gsap.to(floatRef.current, {
      y: 22,
      repeat: -1,
      yoyo: true,
      duration: 3.2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <svg
      ref={floatRef}
      className="absolute left-0 top-[-2rem] w-1/3 md:w-1/4 pointer-events-none opacity-60"
      viewBox="0 0 220 140"
      fill="none"
      style={{ zIndex: 0 }}
    >
      <ellipse cx="140" cy="70" rx="55" ry="30" fill="#A8FCEF" opacity="0.16" />
      <ellipse cx="70" cy="38" rx="24" ry="24" fill="#00b3b3" opacity="0.09" />
      <ellipse cx="190" cy="34" rx="15" ry="15" fill="#99dbf5" opacity="0.10" />
    </svg>
  );
};

const HeroSection = () => {
  const heroRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 34 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );

    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.25 }
    );

    gsap.fromTo(
      btnRef.current.children,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.14,
        delay: 0.5,
      }
    );

    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.16,
        delay: 0.8,
      }
    );
  }, []);

  const stats = [
    { value: "200+", label: "Student Startups Supported" },
    { value: "₹5Cr+", label: "Funding Secured" },
    { value: "1000+", label: "Student Entrepreneurs" },
  ];

  return (
    <div className="relative bg-gradient-to-b from-cyan-50 via-white to-teal-50 py-20 px-4 overflow-hidden">
      <FloatingBg />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 transition-all duration-1000">
          <h1
            ref={heroRef}
            className="relative text-4xl md:text-5xl font-extrabold text-[#0d2b2e] mb-5 pt-16 leading-tight"
            style={{ opacity: 0, transform: "translateY(34px)" }}
          >
            Start Your Startup Journey
            <span className="block mx-auto mt-2 w-48 h-2 rounded-full bg-gradient-to-r from-[#00b3b3] via-cyan-300 to-blue-300 opacity-50" />
          </h1>
          <p
            ref={descRef}
            className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
            style={{ opacity: 0, transform: "translateY(22px)" }}
          >
            From idea to funded startup - we support you at every stage
          </p>
          <div ref={btnRef} className="flex flex-wrap justify-center gap-4">
            <button
              className="bg-[#00b3b3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#028e8e] transition-colors"
              style={{ opacity: 0, transform: "translateY(18px)" }}
            >
              Register Your Idea
            </button>
            <button
              className="border-2 border-[#00b3b3] text-[#00b3b3] px-8 py-3 rounded-lg font-semibold hover:bg-[#00b3b3] hover:text-white transition-colors"
              style={{ opacity: 0, transform: "translateY(18px)" }}
            >
              Join Events
            </button>
          </div>
        </div>

        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d2b2e] mb-4">
            Your Background Doesn't Define Your Future
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We believe that innovation isn't limited to tier 1 institutions.
            Some of India's most impactful startups have come from tier 2-3
            colleges. With the right support, mentorship, and funding access,
            you can build the next big thing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="stat-card bg-white rounded-xl p-8 text-center shadow-md transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(26px)" }}
            >
              <div className="text-4xl font-bold text-[#00b3b3] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
