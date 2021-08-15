import React from "react";
import { useTheme } from "../../context/themeContext";
import { InputSwitch } from 'primereact/inputswitch';
import "./styles.css";
import Menu from "../Menu";

const SideBar: React.FC = (toggled) => {
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
