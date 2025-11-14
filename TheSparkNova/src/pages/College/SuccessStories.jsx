import { useEffect, useRef } from "react";

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
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Success Stories
          </h2>
          <p className="text-gray-600 text-lg">
            See how partner colleges are transforming their ecosystems
          </p>
        </div>

        {/* Success Metric */}
        <div
          ref={statRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "scale(0.9)" }}
        >
          <div className="text-6xl font-bold text-[#32808D] mb-2">85%</div>
          <p className="text-xl text-gray-700 font-semibold">
            Increase in student startup registrations
          </p>
        </div>

        {/* Testimonial */}
        <div
          ref={quoteRef}
          className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
            "Within 6 months of partnering with TheSparknova, our incubation
            center went from a concept to a fully operational hub. We've already
            incubated 15 startups, with 3 securing seed funding."
          </p>
          <div className="border-t pt-4">
            <p className="font-bold text-gray-900">Dr. Rajesh Kumar</p>
            <p className="text-sm text-gray-600">
              Incubation Center Head, NIT Patna
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
