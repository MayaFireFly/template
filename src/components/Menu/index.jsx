import React, { useEffect, useCallback, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import './Menu.sass';

import { items } from '../../constants';


const Menu = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [itemsRows, setItemsRows] = useState([]); 

  const renderItems = useCallback(() => {
    const rows = [];
    items.map((item, idx) => {
      const isActive = item.path === match.path;
      rows.push(
        <li className = {`menu__item ${isActive ? 'menu__item-active' : ''}`} onClick = {() => history.push(item.path)} key = {idx}>
          {item.title}
        </li>
      );
    });
    return rows;
  }, [match, history]);

  useEffect(() => {
    const rows = renderItems();
    setItemsRows(rows);
  }, [match, renderItems]);

  return(
    <nav className = 'menu'>
      <ul className = 'menu__wrapper'>
        {itemsRows}
      </ul>
    </nav>
  );
};

export default Menu;
