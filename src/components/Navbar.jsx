import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./ThemeContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isDark, toggleMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? isDark
                ? "bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/10"
                : "bg-white/80 backdrop-blur-lg border-b border-gray-200"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Name */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className={`font-bold text-xl tracking-tight transition-colors ${
                isDark
                  ? "text-white hover:text-blue-400"
                  : "text-gray-900 hover:text-blue-600"
              }`}
            >
              TB
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    transition-all duration-200
                    ${
                      activeSection === link.href.substring(1)
                        ? isDark
                          ? "text-white bg-white/10"
                          : "text-gray-900 bg-gray-900/10"
                        : isDark
                        ? "text-gray-400 hover:text-white hover:bg-white/5"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }
                  `}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Theme Toggle, Resume Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleMode}
                className={`
                  p-2 rounded-full transition-all duration-200
                  ${
                    isDark
                      ? "text-gray-400 hover:text-white hover:bg-white/10"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }
                `}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <FiSun className="w-5 h-5" />
                ) : (
                  <FiMoon className="w-5 h-5" />
                )}
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden sm:inline-flex items-center gap-2
                  px-4 py-2
                  bg-blue-500 hover:bg-blue-600
                  text-white text-sm font-medium
                  rounded-full
                  transition-all duration-200
                  hover:transform hover:-translate-y-0.5
                "
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 transition-colors ${
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`
              fixed top-16 left-0 right-0 z-40
              backdrop-blur-lg
              md:hidden
              ${
                isDark
                  ? "bg-[#0a0a0a]/95 border-b border-white/10"
                  : "bg-white/95 border-b border-gray-200"
              }
            `}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    block px-4 py-3 rounded-lg text-base font-medium
                    transition-all duration-200
                    ${
                      activeSection === link.href.substring(1)
                        ? isDark
                          ? "text-white bg-white/10"
                          : "text-gray-900 bg-gray-100"
                        : isDark
                        ? "text-gray-400 hover:text-white hover:bg-white/5"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }
                  `}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  mt-4 px-4 py-3
                  bg-blue-500 hover:bg-blue-600
                  text-white font-medium
                  rounded-lg
                  transition-all duration-200
                "
              >
                <FiDownload className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
