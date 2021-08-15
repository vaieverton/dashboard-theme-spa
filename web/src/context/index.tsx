import React from "react";

import { ThemeContext } from './themeContext';

/**
 * @description - Here we can set the contexts created and make them visible to all the components
 */
const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeContext>
      <>{children}</>
    </ThemeContext>
  );
};

export default AppProvider;