import React, { createContext, useCallback, useState, useContext } from "react";
import { useEffect } from "react";

interface ThemeContextData {
  isDark: boolean;
  changeTheme: any;
  isToggled: boolean;
  changeToggle: any;
}

const ThemeContextI = createContext<ThemeContextData>({} as ThemeContextData);

const isDarkfromStorage = localStorage.getItem("theme") === 'dark' ? true : false;

/**
 * @description - Here is declared the isDark state, that is used to handle the current
 * theme that the app is in. We also use localStorage to maintain the last theme that
 * the user selected
 */
export const ThemeContext: React.FC = ({ children }) => {
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark")
    }
  }, []);

  // Main states in the application, passed to all components 
  const [isDark, setIsDark] = useState(isDarkfromStorage);
  const [isToggled, setIsToggled] = useState(true);

  // Funcions that handle the state change 
  const changeTheme = useCallback(() => {
  localStorage.setItem("theme", isDark ? 'light' : 'dark');
    setIsDark(!isDark);
  }, [isDark]);

  const changeToggle = useCallback(() => {
    setIsToggled(!isToggled);
  }, [isToggled]);

  return (
    <ThemeContextI.Provider
      value={{ isDark, changeTheme, isToggled, changeToggle }}
    >
      {children}
    </ThemeContextI.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContextI);

  return context;
}