import { useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const SuccessStories = () => {
  const titleRef = useRef(null);
  const statRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }
      setTimeout(() => {
        if (statRef.current) {
          statRef.current.style.opacity = "1";
          statRef.current.style.transform = "scale(1)";
        }
      }, 300);

      setTimeout(() => {
        if (quoteRef.current) {
          quoteRef.current.style.opacity = "1";
          quoteRef.current.style.transform = "translateY(0)";
        }
      }, 600);
    };

    animateSection();
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 px-4 overflow-hidden">
      <div className="absolute top-6 left-10 w-36 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 opacity-10 rounded-2xl blur-2xl pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-[#152F38] mb-3">
            Success Stories
          </h2>
          <p className="text-gray-600 text-lg">
            See how partner colleges are transforming their ecosystems
          </p>
        </div>
        {/* Success Metric - Elliptical Pill */}
        <div
          ref={statRef}
          className="flex flex-col items-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "scale(0.9)" }}
        >
          <div
            className="
            bg-gradient-to-br from-cyan-100 via-white to-blue-100
            shadow-xl
            rounded-full
            flex items-center justify-center
            w-60 h-32
            border-[7px] border-white/40
            mb-4
          "
          >
            <span className="text-6xl font-extrabold text-[#32808D] tracking-tighter">
              85%
            </span>
          </div>
          <p className="text-xl text-[#0d2b2e] font-semibold text-center max-w-md">
            Increase in student startup registrations
          </p>
        </div>
        {/* Testimonial Quote */}
        <div
          ref={quoteRef}
          className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl transition-all duration-700 flex flex-col md:flex-row gap-8 items-center border-l-8 border-cyan-100"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <FaQuoteLeft className="w-7 h-7 text-[#32808D]" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-gray-800 italic text-lg leading-relaxed mb-6">
              "Within 6 months of partnering with TheSparknova, our incubation
              center went from a concept to a fully operational hub. We've
              already incubated 15 startups, with 3 securing seed funding."
            </p>
            <div className="border-t pt-4">
              <p className="font-bold text-[#0d2b2e] text-lg">
                Dr. Rajesh Kumar
              </p>
              <p className="text-sm text-gray-600">
                Incubation Center Head, NIT Patna
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-16 bg-gradient-to-br from-blue-100 to-teal-100 opacity-13 rounded-2xl blur-2xl pointer-events-none" />
    </div>
  );
};

export default SuccessStories;
