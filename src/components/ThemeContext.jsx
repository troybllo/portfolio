import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default to dark mode
  const [isDark, setIsDark] = useState(true);

  // Set body background color on mount and theme change
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#0a0a0a" : "#DBC8AC";
    document.body.style.color = isDark ? "#ffffff" : "#37393F";
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
