// AuthWrapper.jsx
import React from 'react';
import backgroundImage from './background.jpg'; // use your image path

const AuthWrapper = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default AuthWrapper;
