import React from "react";
import { useTheme } from "../../context/themeContext";
import { InputSwitch } from 'primereact/inputswitch';

import { FaUserAlt } from "react-icons/fa";
import "./styles.css";

const SideBar: React.FC = (toggled) => {
  const { isToggled, isDark, changeTheme } = useTheme();

  return (
    <div className={`${isToggled ? "toggled" : "untoggled"}`}>
      {isToggled ? (
        <div className="main" style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >

          <FaUserAlt />

          <p>ok</p>

          <div className="row">
            <InputSwitch checked={isDark} onChange={changeTheme} />
            <p>Modo escuro</p>
          </div>
        </div>
      ) : null}
    </div>

  );
};

export default SideBar;
