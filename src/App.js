import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeContext";
import Main from "./components/Main";
import "./App.css";
import Links from "./components/Links";
import Portfolio from "./components/Portfolio";
import { Box } from "@chakra-ui/react";
import "../src/styles/carousel.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";

function App() {
  return (
    <div className="Jakarta">
      <ChakraProvider theme={theme}>
        <ThemeProvider>
          <Navbar />
          <Main />
          <Links />
          <Portfolio />
        </ThemeProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
