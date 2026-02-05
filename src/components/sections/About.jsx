import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const About = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Content Card */}
        <motion.div variants={itemVariants}>
          <div
            className={`p-8 md:p-10 backdrop-blur-lg rounded-2xl transition-all duration-300 ${
              isDark
                ? "bg-white/5 border border-white/10"
                : "bg-white border border-gray-200 shadow-lg"
            }`}
          >
            <div
              className={`space-y-6 text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <p>
                I'm a{" "}
                <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                  Software Engineer
                </span>{" "}
                and{" "}
                <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                  Data Engineer
                </span>{" "}
                passionate about building scalable systems that solve real-world problems. With a
                strong foundation in computer science and business from{" "}
                <span className="text-blue-500">Brock University</span>, I bring both technical
                depth and strategic thinking to every project.
              </p>

              <p>
                My expertise spans the full stack, from building responsive React applications to
                designing robust data pipelines with tools like{" "}
                <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                  Apache Spark
                </span>
                ,{" "}
                <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                  Kafka
                </span>
                , and{" "}
                <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                  Airflow
                </span>
                . I'm particularly interested in the intersection of software engineering and data,
                where I can leverage both disciplines to create impactful solutions.
              </p>

              <p>
                Whether it's architecting a real-time trading platform, building AI-powered SaaS
                products, or implementing end-to-end analytics pipelines, I thrive on challenges
                that push the boundaries of what's possible with modern technology.
              </p>
            </div>

            {/* Quick Facts */}
            <div
              className={`mt-8 pt-8 border-t ${isDark ? "border-white/10" : "border-gray-200"}`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className={isDark ? "text-gray-400" : "text-gray-600"}>
                    Open to{" "}
                    <span className={isDark ? "text-white" : "text-gray-900"}>
                      full-time opportunities
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className={isDark ? "text-gray-400" : "text-gray-600"}>
                    Based in{" "}
                    <span className={isDark ? "text-white" : "text-gray-900"}>Toronto, ON</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
