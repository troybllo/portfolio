import resume from "../images/Troy Olamide Bello Resume copy.pdf";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { isDark, toggleMode } = useTheme();

  const butStyle = {
    color: isDark ? "black" : "white",
    backgroundColor: isDark ? "white" : "black",
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div>
        <button
          style={butStyle}
          className="rounded-full bg-black p-6 text-white animate-bounce"
        >
          <a href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}
