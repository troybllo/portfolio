import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import theme from "./styles/theme";
import "./App.css";
import "./styles/glassmorphism.css";

// Layout Components
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/layout/SocialSidebar";

// Section Components
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`Jakarta min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#0a0a0a]" : "bg-[#f5f5f5]"
      }`}
    >
      {/* Navigation */}
      <Navbar />

      {/* Social Sidebar */}
      <SocialSidebar />

      {/* Main Content */}
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
