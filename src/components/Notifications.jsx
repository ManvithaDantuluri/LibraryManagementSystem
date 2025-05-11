// Notifications.jsx
import React, { useEffect, useState } from 'react';
import { Bell } from 'lucide-react'; // Or any icon library
import './Notifications.css'; // Style for dropdown

const Notifications = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    fetch(`/api/notifications/${userId}`)
      .then(res => res.json())
      .then(data => setNotifications(data))
      .catch(err => console.error('Failed to fetch notifications', err));
  }, [userId]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="notification-wrapper">
      <div onClick={toggleDropdown} className="notification-icon">
        <Bell />
        {notifications.some(n => !n.read) && <span className="notification-badge" />}
      </div>
      {dropdownOpen && (
        <div className="notification-dropdown">
          {notifications.length === 0 ? (
            <div className="notification-item">No notifications</div>
          ) : (
            notifications.slice(0, 5).map((n, i) => (
              <div key={i} className="notification-item">
                {n.message}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Notifications;
