import { useTheme } from "./ThemeContext";
import { useRef } from "react";

export default function Footer() {
  const { isDark, toggleMode } = useTheme();

  const butStyle = {
    color: isDark ? "black" : "white",
    backgroundColor: isDark ? "white" : "black",
    position: "fixed",
    bottom: "20px",
    right: "20px",
  };

  const gitStyle = {
    fill: isDark ? "black" : "white",
  };

  const bottomRef = useRef < HTMLDivElement > null;

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div>
        <button
          style={butStyle}
          onClick={scrollToBottom}
          className="rounded-full bg-black p-6 text-white animate-bounce"
        >
          <svg
            style={gitStyle}
            fill="#fff0f0"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
