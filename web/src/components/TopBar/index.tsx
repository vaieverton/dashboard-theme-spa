import React from 'react';
import { useTheme } from '../../context/themeContext';

import './styles.scss';

const TopBar: React.FC = () => {
    const { isToggled, changeToggle, isDark } = useTheme();

    return (
        <div className="main-topbar" style={isDark ? {background: "#1a1a1a", transition: '0.5s'} : {background: "#acacac"}}>
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