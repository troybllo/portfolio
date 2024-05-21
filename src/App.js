import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeContext";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import Links from "./components/Links";
import Conveyor from "./components/Conveyor";

function App() {
  return (
    <div className="Jakarta">
      <ThemeProvider>
        <Navbar />
        <Main />
        <Links />
        <Conveyor />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
