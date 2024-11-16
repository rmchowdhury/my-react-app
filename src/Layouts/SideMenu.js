import React, { useEffect, useState } from 'react';
import '../css/SideMenu.css';

const SideMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('/menu.json')
      .then(response => response.json())
      .then(data => setMenuItems(data.data));
  }, []);

  return (
    <div className="side-menu">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;