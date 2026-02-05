import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { useTheme } from "../ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full"
      >
        {/* Location Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full ${
              isDark
                ? "bg-white/5 border border-white/10"
                : "bg-gray-900/5 border border-gray-900/10"
            }`}
          >
            <FiMapPin className="w-4 h-4 text-blue-500" />
            <span className={isDark ? "text-sm text-gray-400" : "text-sm text-gray-600"}>
              Toronto, ON
            </span>
          </div>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          variants={itemVariants}
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-hero font-bold tracking-tight leading-none mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          TROY BELLO
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          variants={lineVariants}
          className="h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-transparent w-48 md:w-64 lg:w-80 mb-6 origin-left"
        />

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
            Software Engineer
          </span>
          <span className={isDark ? "mx-3 text-gray-600" : "mx-3 text-gray-400"}>|</span>
          <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
            Data Engineer
          </span>
        </motion.h2>

        {/* Subtitle Description */}
        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl max-w-2xl mb-12 ${
            isDark ? "text-gray-500" : "text-gray-600"
          }`}
        >
          Building scalable systems and data pipelines that turn complex problems into elegant
          solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="
              inline-flex items-center gap-2
              px-6 py-3
              bg-blue-500 hover:bg-blue-600
              text-white font-medium
              rounded-full
              transition-all duration-300
              hover:transform hover:-translate-y-1
              hover:shadow-lg hover:shadow-blue-500/25
            "
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={`
              inline-flex items-center gap-2
              px-6 py-3
              font-medium
              rounded-full
              transition-all duration-300
              hover:transform hover:-translate-y-1
              ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white"
                  : "bg-gray-900/5 hover:bg-gray-900/10 border border-gray-900/10 hover:border-gray-900/20 text-gray-900"
              }
            `}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className={`w-6 h-10 border-2 rounded-full flex justify-center pt-2 ${
              isDark ? "border-white/20" : "border-gray-900/20"
            }`}
          >
            <motion.div
              className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white/40" : "bg-gray-900/40"}`}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
