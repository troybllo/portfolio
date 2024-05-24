import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeContext";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import Links from "./components/Links";
import Portfolio from "./components/Portfolio";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="Jakarta">
      <ThemeProvider>
        <Box id="parent" w="100%">
          <Navbar />
          <Main />
          <Links />
          <Portfolio />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
