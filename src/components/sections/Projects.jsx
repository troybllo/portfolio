import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import ProjectCard from "../ui/ProjectCard";
import { projectsData } from "../data/projects-data";

const Projects = () => {
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

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
          <p className={isDark ? "text-gray-400 max-w-2xl" : "text-gray-600 max-w-2xl"}>
            A selection of projects showcasing my work in software engineering, data engineering,
            and full-stack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View More Link */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <a
            href="https://github.com/troybllo"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex items-center gap-2
              px-6 py-3
              font-medium
              rounded-full
              transition-all duration-300
              hover:transform hover:-translate-y-1
              ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white"
                  : "bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 hover:text-gray-900"
              }
            `}
          >
            View All Projects on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
