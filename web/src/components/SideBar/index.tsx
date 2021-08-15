import React from "react";
import { useTheme } from "../../context/themeContext";
import { InputSwitch } from 'primereact/inputswitch';
import "./styles.css";
import Menu from "../Menu";


/**
 * @description - Sidebar that makes the switch between toggled and untoggled
 * Check the scss to discover the properties 
 */
const SideBar: React.FC = () => {
  const { isToggled, isDark, changeTheme } = useTheme();

  return (
    <div className={`${isToggled ? "toggled" : "untoggled"}`}>
      {isToggled ? (
        <div className="main" style={{
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >

          <p></p>

          <Menu />


          {/**Here the button acess the changeTheme function in the context and changes the theme */}
          <button type="button" onClick={changeTheme} className="row">
            <InputSwitch checked={isDark} onChange={() => { }} />
            <p>Modo escuro</p>
          </button>
        </div>
      ) : null}
    </div>

  );
};

export default SideBar;
