import { useEffect, useRef } from "react";
import gsap from "gsap";

const FloatingBg = () => {
  const floatRef = useRef(null);
  useEffect(() => {
    gsap.to(floatRef.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    });
  }, []);
  // Simple abstract SVG for startup/innovation motion
  return (
    <svg
      ref={floatRef}
      className="absolute right-0 top-[-1rem] w-1/3 md:w-1/4 lg:w-1/5 pointer-events-none opacity-60"
      viewBox="0 0 250 120"
      fill="none"
      style={{ zIndex: 0 }}
    >
      <ellipse cx="72" cy="60" rx="52" ry="22" fill="#A8FCEF" opacity="0.21" />
      <ellipse cx="160" cy="60" rx="50" ry="22" fill="#99dbf5" opacity="0.13" />
      <rect
        x="100"
        y="85"
        width="36"
        height="14"
        rx="5"
        fill="#00b3b3"
        opacity="0.19"
      />
    </svg>
  );
};

const HeroSection = () => {
  const heroRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 34 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );
    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.23, ease: "power3.out" }
    );
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.55,
        delay: 0.5,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-cyan-50 via-white to-teal-50 py-20 px-4 overflow-hidden">
      <FloatingBg />
      <div className="max-w-4xl mx-auto text-center transition-all duration-1000">
        <h1
          ref={heroRef}
          className="text-4xl md:text-5xl font-extrabold text-[#0d2b2e] pt-16 mb-4 leading-tight"
          style={{ opacity: 0, transform: "translateY(34px)" }}
        >
          Transform Your College into a Startup Hub
          <span className="block mx-auto mt-2 w-36 h-2 rounded-full bg-gradient-to-r from-[#00b3b3] via-cyan-300 to-blue-300 opacity-40" />
        </h1>
        <p
          ref={descRef}
          className="text-gray-600 text-lg mb-8"
          style={{ opacity: 0, transform: "translateY(22px)" }}
        >
          Complete incubation ecosystem support for tier 2-3 colleges
        </p>
        <div>
          <button
            ref={btnRef}
            className="bg-[#00b3b3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a6d7a] transition-colors"
            style={{ opacity: 0, transform: "scale(0.8)" }}
          >
            Schedule Partnership Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
