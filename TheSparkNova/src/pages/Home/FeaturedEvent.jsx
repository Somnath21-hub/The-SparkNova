import React, { useEffect, useRef } from "react";

const FeaturedEvent = () => {
  const titleRef = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        if (eventsRef.current) {
          const cards = eventsRef.current.querySelectorAll(".event-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 150);
          });
        }
      }, 300);
    };

    animateSection();
  }, []);

  const events = [
    {
      tag: "Competition",
      title: "SparkTank Ideathon",
      description:
        "Pan-India innovation challenge for tier 2-3 college students",
      date: "March 2025",
      tagColor: "bg-[#32808D] text-white",
    },
    {
      tag: "Workshop",
      title: "Founder's Bootcamp",
      description: "3-day intensive program for aspiring entrepreneurs",
      date: "April 2025",
      tagColor: "bg-[#32808D] text-white",
    },
    {
      tag: "Networking",
      title: "Investor Connect Series",
      description: "Monthly pitch sessions with angel investors and VCs",
      date: "Ongoing",
      tagColor: "bg-[#32808D] text-white",
    },
    {
      tag: "Workshop",
      title: "Skill Sprint Workshops",
      description: "Weekly sessions on product development, marketing, finance",
      date: "Weekly",
      tagColor: "bg-[#32808D] text-white",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Featured Events
          </h2>
          <p className="text-gray-600 text-lg">
            Join our ecosystem of innovation and growth
          </p>
        </div>

        <div
          ref={eventsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="event-card bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div
                className={`inline-block px-3 py-1 rounded text-xs font-semibold mb-4 ${event.tagColor}`}
              >
                {event.tag}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {event.description}
              </p>
              <p className="text-[#32808D] font-semibold text-sm">
                {event.date}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-[#32808D] text-[#32808D] px-8 py-3 rounded-lg font-semibold hover:bg-[#32808D] hover:text-white transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvent;
