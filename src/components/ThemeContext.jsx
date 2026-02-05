import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check for saved preference or default to dark mode
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  // Set body styles and save preference on theme change
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#0a0a0a" : "#f5f5f5";
    document.body.style.color = isDark ? "#ffffff" : "#1a1a1a";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleMode = () => {
    setIsDark((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
