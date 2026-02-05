import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useTheme } from "../ThemeContext";

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/troybllo",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/troybello",
    label: "LinkedIn",
  },
  {
    icon: FiMail,
    href: "mailto:troybello25@gmail.com",
    label: "Email",
  },
];

export default function SocialSidebar() {
  const { isDark } = useTheme();

  return (
    <>
      {/* Left Sidebar - Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40"
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
              className={`
                p-2
                hover:transform hover:-translate-y-1
                transition-all duration-200
                ${isDark ? "text-gray-500 hover:text-blue-400" : "text-gray-400 hover:text-blue-600"}
              `}
              aria-label={link.label}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          );
        })}
        <div className={`w-px h-24 ${isDark ? "bg-gray-700" : "bg-gray-300"}`} />
      </motion.div>

      {/* Right Sidebar - Email */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40"
      >
        <a
          href="mailto:troybello25@gmail.com"
          className={`
            text-xs tracking-widest
            transition-colors duration-200
            [writing-mode:vertical-rl]
            ${isDark ? "text-gray-500 hover:text-blue-400" : "text-gray-400 hover:text-blue-600"}
          `}
        >
          troybello25@gmail.com
        </a>
        <div className={`w-px h-24 ${isDark ? "bg-gray-700" : "bg-gray-300"}`} />
      </motion.div>
    </>
  );
}
