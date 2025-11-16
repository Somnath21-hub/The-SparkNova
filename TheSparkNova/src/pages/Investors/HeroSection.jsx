import { useEffect, useRef } from "react";
import gsap from "gsap";

const FloatingBg = () => {
  const floatRef = useRef(null);

  useEffect(() => {
    gsap.to(floatRef.current, {
      y: 30,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <svg
      ref={floatRef}
      className="absolute right-0 top-[-2rem] w-1/3 md:w-1/4 lg:w-1/5 pointer-events-none opacity-70"
      viewBox="0 0 320 220"
      fill="none"
      style={{ zIndex: 0 }}
    >
      <ellipse cx="220" cy="90" rx="90" ry="40" fill="#A8FCEF" opacity="0.18" />

      <circle
        cx="60"
        cy="60"
        r="30"
        stroke="#00b3b3"
        strokeWidth="2.3"
        fill="none"
        opacity="0.8"
      />
      <circle
        cx="160"
        cy="140"
        r="35"
        stroke="#99dbf5"
        strokeWidth="2.3"
        fill="none"
        opacity="0.6"
      />
      <line
        x1="88"
        y1="68"
        x2="125"
        y2="130"
        stroke="#00b3b3"
        strokeWidth="2"
      />
      <line
        x1="188"
        y1="150"
        x2="250"
        y2="100"
        stroke="#99dbf5"
        strokeWidth="2"
      />
      <circle cx="250" cy="100" r="12" fill="#00b3b3" opacity="0.09" />
      <circle cx="160" cy="140" r="7" fill="#00b3b3" opacity="0.15" />
    </svg>
  );
};

const HeroSection = () => {
  const heroRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.3,
          ease: "back.out(1.7)",
        }
      );
    }
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-cyan-50 via-white to-teal-50 py-20 px-4 overflow-hidden">
      <FloatingBg />

      <div
        ref={heroRef}
        className="max-w-4xl mx-auto text-center transition-all duration-700"
        style={{ opacity: 0, transform: "translateY(30px)" }}
      >
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-[#0d2b2e] mb-6 pt-16 leading-tight z-10">
          Join Our Investor &amp; Mentor Network
          <span className="block mx-auto mt-2 w-40 h-2 rounded-full bg-gradient-to-r from-[#00b3b3] via-cyan-300 to-blue-300 opacity-60" />
        </h1>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          Access curated deal flow from India's emerging startup ecosystem
        </p>
        <div className="flex justify-center">
          <button
            ref={buttonRef}
            className="bg-[#00b3b3] text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-[#00978a] transition-all duration-200"
            style={{ opacity: 0, transform: "scale(0.8)" }}
          >
            Register Your Interest
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
