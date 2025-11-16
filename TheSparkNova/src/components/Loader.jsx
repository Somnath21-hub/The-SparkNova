import React, { useEffect, useState } from "react";
import "../loader.css";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1; // speed of % increase
      });
    }, 30); // speed of counting (30ms = smooth fast loading)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="spark-loader-container">
      <div className="spark-outer-ring"></div>
      <div className="spark-inner-ring"></div>

      <h2 className="spark-loader-text">
        Loading <span>{progress}%</span>
      </h2>

      <h3 className="spark-branding">
        The <span>SparkNova</span>
      </h3>
    </div>
  );
};

export default Loader;
