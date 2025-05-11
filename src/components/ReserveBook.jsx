// src/components/ReserveBook.jsx
import React from 'react';
import './CheckInOutForm.css'; // Reuse glass styling

const ReserveBook = () => {
  return (
    <div className="form-glass">
      <h2>Reserve Book</h2>
      <form>
        <label>Search By:</label>
        <input type="text" placeholder="Enter criteria (e.g., ISBN, Name)" />

        <label>Search:</label>
        <input type="text" placeholder="Enter search value" />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit" style={{ backgroundColor: '#00ffcc' }}>OK</button>
          <button type="button" style={{ backgroundColor: '#e0e0e0' }}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default ReserveBook;
