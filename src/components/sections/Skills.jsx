import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import { skillCategories } from "../data/skills-data";

const Skills = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Skills & Technologies
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <div
                className={`h-full p-6 backdrop-blur-lg rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/15"
                    : "bg-white border border-gray-200 shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-mono text-blue-500">{category.icon}</span>
                  <h3
                    className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`
                          inline-flex items-center gap-2
                          px-3 py-2
                          rounded-full
                          text-sm
                          transition-colors duration-200
                          cursor-default
                          ${
                            isDark
                              ? "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20"
                              : "bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                          }
                        `}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
