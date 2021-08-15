import React from 'react';
import { useTheme } from '../../context/themeContext';
import './styles.scss';
import { FaAngleLeft, FaAngleRight, FaUserAlt } from "react-icons/fa";

const TopBar: React.FC = () => {
    const { isToggled, changeToggle } = useTheme();

    return (
        <div className="main-topbar">
            <div>
                <button type="button" onClick={changeToggle}>
                    <p>{isToggled ? <FaAngleLeft /> : <FaAngleRight />}</p>
                </button>

            </div>

            <div className="row">
                <p>Fazer login</p>
                <FaUserAlt />
            </div>
        </div>
    );
}

export default TopBar;