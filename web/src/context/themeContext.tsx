import React, { createContext, useCallback, useState, useContext } from "react";
import { useEffect } from "react";

interface ThemeContextData {
  isDark: boolean;
  setIsDark: any;
  changeTheme: any;
  isToggled: boolean;
  changeToggle: any;
}

const ThemeContextI = createContext<ThemeContextData>({} as ThemeContextData);

const isDarkfromStorage = localStorage.getItem("@Portfolio: theme") === 'dark' ? true : false;

export const ThemeContext: React.FC = ({ children }) => {
  useEffect(() => {
    if (!localStorage.getItem("@Portfolio: theme")) {
      localStorage.setItem("@Portfolio: theme", "dark")
    }
  }, []);

  const [isDark, setIsDark] = useState(isDarkfromStorage);
  const [isToggled, setIsToggled] = useState(true);

  const changeTheme = useCallback(() => {
  localStorage.setItem("@Portfolio: isDark", isDark ? 'light' : 'dark');
    setIsDark(!isDark);
  }, [isDark]);

  const changeToggle = useCallback(() => {
    setIsToggled(!isToggled);
  }, [isToggled]);

  return (
    <ThemeContextI.Provider
      value={{ isDark, setIsDark, changeTheme, isToggled, changeToggle }}
    >
      {children}
    </ThemeContextI.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContextI);

  return context;
}