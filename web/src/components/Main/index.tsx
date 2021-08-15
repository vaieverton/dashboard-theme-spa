import React from 'react';
import { useTheme } from '../../context/themeContext';
import SideBar from '../SideBar';
import TopBar from '../TopBar';

import './styles.scss';

/**
 * @description - This is the main root of the viewable application, it organizes the scructure
 * of the dashboard
 */
const Main: React.FC = ({children}) => {
    const {isDark} = useTheme();

  return (
      <div className={`main ${isDark ? 'dark' : 'light'}`}>
          <SideBar />

          <div className="right-content">
              <TopBar />

              <div className={`content ${isDark ? 'dark-ct' : 'light-ct'}`}>
                  {children}
              </div>
          </div>
      </div>
  );
}

export default Main;