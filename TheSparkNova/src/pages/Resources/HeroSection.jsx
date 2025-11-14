import { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = "1";
      heroRef.current.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div
        ref={heroRef}
        className="max-w-4xl mx-auto text-center transition-all duration-1000"
        style={{ opacity: 0, transform: "translateY(30px)" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Resources Hub
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Everything you need to build and grow your startup
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
