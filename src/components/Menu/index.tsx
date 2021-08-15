import React from 'react';
import { NavLink } from 'react-router-dom';
import IMenu from '../../models/IMenu.';

import './styles.scss';

const MenuItem = (props: {data: IMenu}) => {
    const {data} = props;

    return (
        <NavLink to={data.url} className="menu-item">
            {data.label}
        </NavLink>
    )
}

const Data: IMenu[] = [
    {label: 'HOME', url: '/'},
    {label: 'Página 1', url: '/page-1'},
    {label: 'Página 2', url: 'page-2'}
    
]

/**
 * @description - Menu component to render all the pages in the application 
 */
const Menu: React.FC = () => {
  return (
      <div className="menu">
          {Data.map((item) => <MenuItem data={item} />)}
      </div>
  );
}

export default Menu;