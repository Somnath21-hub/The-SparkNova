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

  return (
    <svg
      ref={floatRef}
      className="absolute right-0 top-[-1rem] w-1/3 md:w-1/4 lg:w-1/5 pointer-events-none opacity-60"
      viewBox="0 0 250 120"
      fill="none"
      style={{ zIndex: 0 }}
    >
      <rect
        x="72"
        y="33"
        width="100"
        height="60"
        rx="14"
        fill="#A8FCEF"
        opacity="0.19"
      />
      <rect
        x="137"
        y="60"
        width="34"
        height="16"
        rx="7"
        fill="#99dbf5"
        opacity="0.21"
      />
      +
      <path
        d="M90 65L122 87L154 65"
        stroke="#00b3b3"
        strokeWidth="2.5"
        fill="none"
      />
      <rect
        x="90"
        y="65"
        width="64"
        height="24"
        rx="4"
        stroke="#00b3b3"
        strokeWidth="2"
        fill="white"
        opacity="0.12"
      />
    </svg>
  );
};

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 34 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
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
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-[#0d2b2e] mb-6 pt-16 leading-tight">
          Get in Touch
          <span className="block mx-auto mt-2 w-32 h-2 rounded-full bg-gradient-to-r from-[#00b3b3] via-cyan-300 to-blue-300 opacity-50" />
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          We're here to help you build your startup ecosystem
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
