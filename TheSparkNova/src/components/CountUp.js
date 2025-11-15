import { useEffect, useRef, useState } from "react";

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
