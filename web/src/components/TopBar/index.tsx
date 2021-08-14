import React from 'react';
import { useTheme } from '../../context/themeContext';

import './styles.scss';

const TopBar: React.FC = () => {
    const {isToggled, changeToggle} = useTheme();
  return (
      <div className="main-topbar">
          <div>
              <button type="button" onClick={changeToggle}>
              {isToggled ? '<' : '>'}
              </button>
              
          </div>

          <div>
              content right
          </div>
      </div>
  );
}

export default TopBar;