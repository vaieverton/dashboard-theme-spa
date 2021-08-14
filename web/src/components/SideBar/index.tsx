import React, { useState } from "react";
import { useTheme } from "../../context/themeContext";
import {InputSwitch} from 'primereact/inputswitch';

import "./styles.css";

const SideBar: React.FC = (toggled) => {
  const {isToggled, isDark, changeTheme} = useTheme();

  return (
    <div className={`main-sidebar ${isToggled ? "toggled" : "untoggled"}`}>
      <InputSwitch checked={isDark} onChange={changeTheme} />
    </div>
  );
};

export default SideBar;
