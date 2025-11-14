import React, { useEffect, useRef } from "react";

const SuccessStories = () => {
  const titleRef = useRef(null);
  const storiesRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        if (storiesRef.current) {
          const cards = storiesRef.current.querySelectorAll(".story-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 200);
          });
        }
      }, 300);
    };

    animateSection();
  }, []);

  const stories = [
    {
      quote:
        '"TheSparknova transformed our incubation center from a vision to reality. Their end-to-end support has been invaluable."',
      name: "Dr. Rajesh Kumar",
      role: "Incubation Center Head, NIT Patna",
    },
    {
      quote:
        '"Got seed funding of ₹25L through TheSparknova\'s investor network. Their mentorship was crucial to our success."',
      name: "Priya Sharma",
      role: "Founder, EduTech Startup",
    },
    {
      quote:
        '"The quality of startups from tier 2-3 colleges is impressive. TheSparknova is bridging a critical gap in the ecosystem."',
      name: "Amit Verma",
      role: "Angel Investor",
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Success Stories
          </h2>
          <p className="text-gray-600 text-lg">Hear from our community</p>
        </div>

        {/* Stories Grid */}
        <div ref={storiesRef} className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="story-card bg-gray-50 rounded-xl p-8 transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <p className="text-gray-700 italic leading-relaxed mb-6">
                {story.quote}
              </p>
              <div>
                <p className="font-bold text-gray-900">{story.name}</p>
                <p className="text-sm text-gray-600">{story.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
