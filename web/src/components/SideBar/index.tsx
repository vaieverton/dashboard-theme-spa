import React from "react";
import { useTheme } from "../../context/themeContext";
import { InputSwitch } from 'primereact/inputswitch';
import { PanelMenu } from 'primereact/panelmenu';

import { FaUserAlt } from "react-icons/fa";
import "./styles.css";
import Menu from "../Menu";

const items = [
  {
    label: 'File',
    icon: 'pi pi-fw pi-file',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Bookmark',
            icon: 'pi pi-fw pi-bookmark'
          },
          {
            label: 'Video',
            icon: 'pi pi-fw pi-video'
          }
        ]
      },
    ]
  },
  {
    label: 'Edit',
    icon: 'pi pi-fw pi-pencil',
    items: [
      {
        label: 'Left',
        icon: 'pi pi-fw pi-align-left'
      },
      {
        label: 'Right',
        icon: 'pi pi-fw pi-align-right'
      },
    ]
  },
  {
    label: 'Users',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-user-plus'
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-user-minus'
      },
      {
        label: 'Search',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Filter',
            icon: 'pi pi-fw pi-filter',
            items: [
              {
                label: 'Print',
                icon: 'pi pi-fw pi-print'
              }
            ]
          },
          {
            icon: 'pi pi-fw pi-bars',
            label: 'List'
          }
        ]
      }
    ]
  },

];

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
