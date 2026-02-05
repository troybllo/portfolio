import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const contactLinks = [
    {
      icon: FiMail,
      label: "Email",
      href: "mailto:troybello25@gmail.com",
      display: "troybello25@gmail.com",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/troybello",
      display: "linkedin.com/in/troybello",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/troybllo",
      display: "github.com/troybllo",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Connect
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I'm currently open to full-time opportunities in software engineering and data
            engineering. Feel free to reach out if you'd like to collaborate or just say hello!
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                variants={itemVariants}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`
                  group flex items-center gap-3
                  px-6 py-4
                  backdrop-blur-lg
                  rounded-2xl
                  transition-all duration-300
                  hover:transform hover:-translate-y-1
                  w-full sm:w-auto
                  ${
                    isDark
                      ? "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20"
                      : "bg-white border border-gray-200 text-gray-600 shadow-lg hover:shadow-xl hover:text-gray-900"
                  }
                `}
                aria-label={link.label}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{link.display}</span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          variants={itemVariants}
          className={`mt-20 pt-10 border-t ${isDark ? "border-white/5" : "border-gray-200"}`}
        >
          <p className={isDark ? "text-gray-600 text-sm" : "text-gray-400 text-sm"}>
            Designed & Built by Troy Bello
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
