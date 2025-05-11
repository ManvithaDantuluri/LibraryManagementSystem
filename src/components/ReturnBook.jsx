// src/components/ReturnBook.jsx
import React from 'react';
import './CheckInOutForm.css'; // Reuse same glass styling

const ReturnBook = () => {
  return (
    <div className="form-glass">
      <h2>Return Book</h2>
      <form>
        <label>Date Returned:</label>
        <input type="date" />

        <label>Book Name:</label>
        <input type="text" placeholder="Enter Book Name" />

        <label>Your Name:</label>
        <input type="text" placeholder="Enter Your Name" />

        <label>Email:</label>
        <input type="email" placeholder="Enter Email" />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ReturnBook;
