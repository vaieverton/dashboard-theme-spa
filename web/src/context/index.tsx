import React from "react";

import { ThemeContext } from './themeContext'
const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeContext>
      <>{children}</>
    </ThemeContext>
  );
};

export default AppProvider;