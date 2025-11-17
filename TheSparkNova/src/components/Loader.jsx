import React, { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/4 top-32 w-80 h-72 bg-gradient-to-r from-[#00b3b3cc] via-[#86fbfb88] to-[#a3d6ff88] rounded-full blur-3xl animate-bgfloat" />
        <div className="absolute right-1/5 bottom-20 w-64 h-60 bg-gradient-to-l from-[#45a1ad99] via-[#fffbeabb] to-[#c1fff8cc] rounded-full blur-2xl animate-bgfloat-alt" />
      </div>
      {/* Spark particles */}
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className={`absolute z-[1] block w-3 h-3 rounded-full bg-gradient-to-br from-[#00b3b3] to-[#45a1ad] opacity-80 animate-spark${
            i + 1
          }`}
        />
      ))}
      {/* Loader card */}
      <div className="relative w-80 h-80 bg-white/60 rounded-3xl shadow-2xl border border-cyan-200 backdrop-blur-lg flex items-center justify-center">
        {/* Overlapping animated rings (svg, not concentric) */}
        <svg
          className="absolute left-8 top-14 z-20 animate-ringfloat"
          width="120"
          height="120"
        >
          <ellipse
            cx="60"
            cy="48"
            rx="43"
            ry="24"
            stroke="url(#grad1)"
            strokeWidth="10"
            fill="none"
            opacity="0.95"
          />
          <defs>
            <linearGradient
              id="grad1"
              x1="0"
              y1="0"
              x2="120"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00b3b3" />
              <stop offset="1" stopColor="#45a1ad" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute right-10 bottom-12 z-20 animate-ringfloat-alt"
          width="90"
          height="90"
        >
          <ellipse
            cx="45"
            cy="55"
            rx="27"
            ry="17"
            stroke="url(#grad2)"
            strokeWidth="8"
            fill="none"
            opacity="0.8"
          />
          <defs>
            <linearGradient
              id="grad2"
              x1="0"
              y1="0"
              x2="90"
              y2="90"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#c1fff8" />
              <stop offset="1" stopColor="#00b3b3" />
            </linearGradient>
          </defs>
        </svg>
        {/* Glowy animated dot at intersection for flair */}
        <span className="absolute left-1/2 top-1/2 -translate-x-5 -translate-y-4 w-4 h-4 rounded-full bg-gradient-to-br from-[#00b3b3] to-cyan-300 blur-md animate-pulse" />

        {/* Progress number, now NO BACKGROUND, just stylish text */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold bg-gradient-to-r from-[#00b3b3] via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight select-none z-30">
          {progress}%
        </span>
        {/* Text and branding below */}
        <div className="flex flex-col items-center justify-center absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b2e] bg-gradient-to-r from-[#00b3b3] via-cyan-600 to-blue-400 bg-clip-text text-transparent animate-pulse tracking-wide mb-2 drop-shadow">
            Loading...
          </h2>
          <h3 className="text-base font-extrabold tracking-wide text-[#0d2b2e] drop-shadow">
            The{" "}
            <span className="text-[#00b3b3] bg-clip-text bg-gradient-to-r from-[#00b3b3] to-[#32808D] text-transparent">
              SparkNova
            </span>
          </h3>
        </div>
      </div>
      {/* Custom unique animations */}
      <style>{`
        /* Background blob floating */
        @keyframes bgfloat {
          0%, 100% { transform: translateY(0) scale(1);}
          45% { transform: translateY(-18px) scale(1.06);}
          75% { transform: translateY(24px) scale(1.09);}
        }
        @keyframes bgfloat-alt {
          0%, 100% { transform: translateX(0) scale(1);}
          33% { transform: translateX(-22px) scale(1.07);}
          80% { transform: translateX(10px) scale(1.13);}
        }
        .animate-bgfloat { animation: bgfloat 4.3s ease-in-out infinite;}
        .animate-bgfloat-alt { animation: bgfloat-alt 6s ease-in-out infinite;}
        /* Ring float */
        @keyframes ringfloat {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-9px);}
        }
        @keyframes ringfloat-alt {
          0%, 100% { transform: translateY(0);}
          44% { transform: translateY(11px);}
        }
        .animate-ringfloat { animation: ringfloat 2.8s ease-in-out infinite;}
        .animate-ringfloat-alt { animation: ringfloat-alt 3.4s ease-in-out infinite;}
        /* Spark particles fly in/out for a whimsical effect */
        @keyframes spark1 { 0%,100% {opacity:0;} 11% {opacity:1;top:12%;left:22%;} 53% {opacity:1;top:16%;left:32%;} }
        @keyframes spark2 { 0%,100% {opacity:0;} 21% {opacity:.8;top:74%;left:86%;} 65% {opacity:.3;top:76%;left:68%;}}
        @keyframes spark3 { 0%,100% {opacity:0;} 31% {opacity:.8;top:54%;left:41%;} 77% {opacity:1;top:49%;left:53%;} }
        @keyframes spark4 { 0%,100% {opacity:0;} 9% {opacity:.8;top:40%;left:76%;} 50% {opacity:1;top:33%;left:57%;} }
        @keyframes spark5 { 0%,100% {opacity:0;} 18% {opacity:1;top:62%;left:44%;} 82% {opacity:.6;top:69%;left:39%;} }
        @keyframes spark6 { 0%,100% {opacity:0;} 38% {opacity:.7;top:32%;left:17%;} 59% {opacity:.3;top:23%;left:23%;} }
        .animate-spark1 { animation: spark1 2.7s cubic-bezier(.22,1,.42,1) infinite;}
        .animate-spark2 { animation: spark2 2.1s ease-in infinite;}
        .animate-spark3 { animation: spark3 2.6s ease-in-out infinite;}
        .animate-spark4 { animation: spark4 1.9s ease-in infinite;}
        .animate-spark5 { animation: spark5 3.2s ease-in infinite;}
        .animate-spark6 { animation: spark6 2.8s ease-in infinite;}
      `}</style>
    </div>
  );
};

export default Loader;
