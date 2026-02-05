import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useTheme } from "../ThemeContext";

const gradientMap = {
  "fullstack-1": "from-blue-500/20 to-purple-500/20",
  "ai-saas": "from-green-500/20 to-teal-500/20",
  "data-1": "from-orange-500/20 to-pink-500/20",
  "data-2": "from-red-500/20 to-orange-500/20",
  "fullstack-2": "from-purple-500/20 to-blue-500/20",
  analysis: "from-cyan-500/20 to-blue-500/20",
};

const accentMapDark = {
  "fullstack-1": "group-hover:border-blue-500/40",
  "ai-saas": "group-hover:border-green-500/40",
  "data-1": "group-hover:border-orange-500/40",
  "data-2": "group-hover:border-red-500/40",
  "fullstack-2": "group-hover:border-purple-500/40",
  analysis: "group-hover:border-cyan-500/40",
};

const accentMapLight = {
  "fullstack-1": "group-hover:border-blue-500/60",
  "ai-saas": "group-hover:border-green-500/60",
  "data-1": "group-hover:border-orange-500/60",
  "data-2": "group-hover:border-red-500/60",
  "fullstack-2": "group-hover:border-purple-500/60",
  analysis: "group-hover:border-cyan-500/60",
};

const ProjectCard = ({ project, index = 0 }) => {
  const { isDark } = useTheme();
  const {
    title,
    subtitle,
    description,
    techStack,
    githubLink,
    liveLink,
    gradient = "fullstack-1",
    featured = false,
  } = project;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };

  const accentClass = isDark ? accentMapDark[gradient] : accentMapLight[gradient];

  return (
    <motion.div variants={itemVariants} className="group relative h-full">
      <div
        className={`
          h-full
          backdrop-blur-lg
          rounded-2xl
          overflow-hidden
          transition-all duration-300
          hover:transform hover:-translate-y-1
          ${
            isDark
              ? `bg-white/5 border border-white/10 hover:bg-white/[0.08] ${accentClass}`
              : `bg-white border border-gray-200 shadow-lg hover:shadow-xl ${accentClass}`
          }
          ${featured ? (isDark ? "ring-1 ring-blue-500/30" : "ring-1 ring-blue-500/40") : ""}
        `}
      >
        {/* Gradient Header */}
        <div className={`h-32 bg-gradient-to-br ${gradientMap[gradient]} relative overflow-hidden`}>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-30">
            <div
              className={`absolute top-4 left-4 w-12 h-12 border rounded-lg rotate-12 ${
                isDark ? "border-white/20" : "border-gray-900/20"
              }`}
            />
            <div
              className={`absolute bottom-4 right-4 w-8 h-8 border rounded-full ${
                isDark ? "border-white/20" : "border-gray-900/20"
              }`}
            />
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border rounded-2xl rotate-45 ${
                isDark ? "border-white/10" : "border-gray-900/10"
              }`}
            />
          </div>

          {/* Featured badge */}
          {featured && (
            <div className="absolute top-3 right-3 px-2 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-2">
            <h3 className={`text-xl font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
              {title}
            </h3>
            {subtitle && (
              <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{subtitle}</p>
            )}
          </div>

          <p className={`text-sm mb-4 line-clamp-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.slice(0, 5).map((tech, i) => (
              <span
                key={i}
                className={`px-2 py-1 text-xs rounded-full ${
                  isDark
                    ? "bg-white/5 border border-white/10 text-gray-400"
                    : "bg-gray-100 border border-gray-200 text-gray-600"
                }`}
              >
                {tech}
              </span>
            ))}
            {techStack.length > 5 && (
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  isDark
                    ? "bg-white/5 border border-white/10 text-gray-400"
                    : "bg-gray-100 border border-gray-200 text-gray-600"
                }`}
              >
                +{techStack.length - 5}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-2
                  px-4 py-2
                  rounded-full
                  text-sm
                  transition-all duration-200
                  ${
                    isDark
                      ? "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20"
                      : "bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }
                `}
                aria-label={`View ${title} on GitHub`}
              >
                <FiGithub className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  px-4 py-2
                  bg-blue-500/20
                  border border-blue-500/30
                  rounded-full
                  text-sm text-blue-500
                  hover:bg-blue-500/30 hover:border-blue-500/50
                  transition-all duration-200
                "
                aria-label={`View ${title} live demo`}
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
