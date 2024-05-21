import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

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
