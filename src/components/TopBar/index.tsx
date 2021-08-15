import React from 'react';
import { useTheme } from '../../context/themeContext';
import './styles.scss';
import { FaUserAlt, FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const TopBar: React.FC = () => {
    const { changeToggle } = useTheme();

    return (
        <div className="main-topbar">
            <div>
                <button type="button" onClick={changeToggle}>
                    <p><FaBars size={17} /></p>
                </button>

            </div>

            <NavLink to='/user'>
                <FaUserAlt />
            </NavLink>
        </div >
    );
}

export default TopBar;