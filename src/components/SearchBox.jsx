// src/components/SearchBox.jsx
import React from 'react';
import './CheckInOutForm.css'; // Reuse the same styling

const SearchBox = () => {
  return (
    <div className="form-glass">
      <h2>Explore Books</h2>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBox;
