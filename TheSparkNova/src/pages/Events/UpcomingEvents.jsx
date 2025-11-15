import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const UpcomingEvents = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Ideathon", "Workshop", "Networking"];

  const events = [
    {
      type: "IDEATHON",
      title: "SparkTank 2025 - Register Now",
      description: "Submit your innovative ideas for our flagship competition",
      date: "15 March 2025",
      location: "Pan-India (Online + Regional)",
    },
    {
      type: "WORKSHOP",
      title: "Product Development Workshop",
      description: "Learn MVP development and validation techniques",
      date: "20 February 2025",
      location: "Online",
    },
    {
      type: "NETWORKING",
      title: "Investor Pitch Night",
      description: "Pitch to angel investors and early-stage VCs",
      date: "28 February 2025",
      location: "Bangalore",
    },
  ];

  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((e) => e.type === activeFilter.toUpperCase());

  // Light, compact badge color
  const typeColors = {
    IDEATHON: "bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700",
    WORKSHOP: "bg-gradient-to-r from-cyan-100 to-blue-100 text-blue-700",
    NETWORKING: "bg-gradient-to-r from-blue-100 to-teal-100 text-teal-700",
  };

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-20 px-4 min-h-[90vh]">
      {/* (Background accent shapes can be omitted as needed) */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Upcoming Events
          </h2>
          <p className="text-gray-700 text-lg">
            Join our events and accelerate your startup journey
          </p>
        </div>

        {/* Responsive, minimal-width Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`min-w-[90px] px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200
                ${
                  activeFilter === filter
                    ? "bg-teal-100 text-teal-700 scale-105 border border-teal-300 shadow-sm"
                    : "bg-cyan-50 text-gray-700 hover:bg-teal-50"
                }
              `}
              style={{
                flex: "0 0 auto",
                maxWidth: "180px", // Prevent tabs from getting too wide
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-7 shadow border border-gray-100 hover:border-teal-200 transition duration-200 flex flex-col"
            >
              {/* Type badge */}
              <span
                className={`inline-block w-[45%] px-4 py-1 rounded text-xs font-semibold mb-5 ${
                  typeColors[event.type]
                }`}
              >
                {event.type}
              </span>
              <h3 className="text-lg font-extrabold text-gray-900 mb-2 tracking-tight group-hover:text-teal-700 transition-colors">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{event.description}</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <FaCalendarAlt className="w-4 h-4 text-cyan-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <FaMapMarkerAlt className="w-4 h-4 text-teal-400" />
                  <span>{event.location}</span>
                </div>
              </div>
              <button className="mt-auto w-full bg-gradient-to-r from-teal-700 to-cyan-700 text-white py-2 rounded-lg font-semibold hover:from-teal-900 hover:to-cyan-800 transition-colors shadow">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
