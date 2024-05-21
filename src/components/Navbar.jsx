import logo from "../images/Troy Panda (1).svg";
import { useTheme } from "./ThemeContext";
import sidebar from "../images/sidebar.svg";
import "../App.css";

export default function Navbar() {
  const { isDark, toggleMode } = useTheme();

  const switchMode = () => {
    toggleMode();
  };

  let moon = document.getElementById("moon");
  let git = document.getElementById("git");

  const moonHover = () => {
    moon.setAttribute("fill", "black");
  };
  const moonOut = () => {
    moon.setAttribute("fill", "none");
  };

  const containerStyle = {
    color: isDark ? "#757575" : "#37393F",
    fill: isDark ? "gray" : "black",
  };

  const gitStyle = {
    fill: isDark ? "gray" : "black",
  };

  document.body.style.backgroundColor = isDark ? " #161616" : "#DBC8AC";

  return (
    <div
      style={containerStyle}
      className="w-full fixed backdrop-blur-lg z-auto top-0"
    >
      <div className="flex m-0 max-w-full items-center">
        <div className=" flex items-center justify-start ">
          <img className="w-14" src={logo} alt="_" />
        </div>
        <div className="flex justify-between items-center pl-14">
          <a
            className="flex justify-center  hover:text-white pl-20 "
            href="http://www.github.com"
          >
            <svg
              style={gitStyle}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              id="git"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <p className="pl-2">View Source</p>
          </a>
          <div className="absolute right-2 flex justify-between pr-6">
            <button onClick={switchMode} className="pr-10">
              {isDark ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                    id="moon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                </>
              )}
            </button>
            <button>
              <img className="w-8" src={sidebar} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
