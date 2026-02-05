import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../ThemeContext";

const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "", label, delay = 0 }) => {
  const { isDark } = useTheme();
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;

      const startTime = Date.now();
      const endValue = parseFloat(end);

      const timer = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3);

        const currentValue = endValue * easeOut;

        // Handle decimals (like 3.7 GPA)
        if (end.toString().includes(".")) {
          setCount(currentValue.toFixed(1));
        } else {
          setCount(Math.floor(currentValue));
        }

        if (progress >= 1) {
          clearInterval(timer);
          setCount(end);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center"
    >
      <div
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <div
        className={`text-sm md:text-base uppercase tracking-wider ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {label}
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;
