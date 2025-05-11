// src/components/Sidebar.jsx
import React from 'react';
import { FaCog } from 'react-icons/fa';

const Sidebar = ({ setActiveComponent, activeComponent }) => {
  const menuItems = [
    { key: 'checkinout', label: 'Check-In/Out' },
    { key: 'books', label: 'Books' },
    { key: 'issue', label: 'Issue Book' },
    { key: 'reserve', label: 'Reserve Book' },
    { key: 'return', label: 'Return Book' },
    { key: 'search', label: 'Search' },
    { key: 'payment', label: 'Payment' },
    { key: 'about', label: 'About' },
    { key: 'help', label: 'Help' },
    { key: 'settings', label: <><FaCog style={{ marginRight: '8px' }} />Settings</> },
  ];

  return (
    <div className="sidebar">
      <h3>DASHBOARD</h3>
      <ul>
        {menuItems.map(item => (
          <li
            key={item.key}
            className={activeComponent === item.key ? 'active' : ''}
            onClick={() => setActiveComponent(item.key)}
            style={{ cursor: 'pointer' }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
