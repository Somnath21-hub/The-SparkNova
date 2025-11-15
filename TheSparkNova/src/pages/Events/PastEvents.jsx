import { useEffect, useRef, useState } from "react";
import {
  FaRegCalendarCheck,
  FaUsers,
  FaUniversity,
  FaRupeeSign,
} from "react-icons/fa";

function CountUp({ end, duration = 1.5 }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Extract numeric and postfix
  const parseNumeric = (str) => {
    const matches = str.match(/[\d.,]+/);
    if (!matches) return 0;
    return Number(matches[0].replace(/,/g, ""));
  };
  const target = parseNumeric(end);
  const postfix = end.replace(String(target), "");

  useEffect(() => {
    // Setup intersection observer
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.6 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const frameDuration = 30;
    const totalFrames = Math.round((duration * 1000) / frameDuration);

    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      setValue(Math.round(target * progress));
      if (frame === totalFrames) {
        clearInterval(counter);
        setValue(target);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {started ? value.toLocaleString() : "0"}
      {postfix}
    </span>
  );
}

const stats = [
  {
    value: "100+",
    label: "Events Conducted",
    icon: <FaRegCalendarCheck className="text-blue-400 w-6 h-6" />,
  },
  {
    value: "5000+",
    label: "Participants",
    icon: <FaUsers className="text-emerald-400 w-6 h-6" />,
  },
  {
    value: "50+",
    label: "Partner Colleges",
    icon: <FaUniversity className="text-purple-400 w-6 h-6" />,
  },
  {
    value: "₹5Cr+",
    label: "Funding Facilitated",
    icon: <FaRupeeSign className="text-amber-400 w-6 h-6" />,
  },
];

const PastEvents = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 drop-shadow">
            Past Events Highlights
          </h2>
          <p className="text-gray-700 text-lg">
            See the impact we've created together
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center shadow-md border-t-4 border-transparent hover:border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-gradient-to-tr from-blue-100 to-teal-100 group-hover:scale-105 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#32808D] mb-2 group-hover:text-blue-600 transition-colors">
                <CountUp end={stat.value} />
              </div>
              <div className="text-gray-700 text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
