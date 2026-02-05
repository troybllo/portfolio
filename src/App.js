import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "./components/ThemeContext";
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

function App() {
  return (
    <div className="Jakarta bg-[#0a0a0a] min-h-screen">
      <ChakraProvider theme={theme}>
        <ThemeProvider>
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
        </ThemeProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
