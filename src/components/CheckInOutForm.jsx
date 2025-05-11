import React from 'react';
import './CheckInOutForm.css';

const CheckInOutForm = () => {
  return (
    <div className="form-glass">
      <h2>Check-In/Out</h2>
      <form>
        <label>User ID:</label>
        <input type="text" placeholder="Enter User ID" />

        <label>User Name:</label>
        <input type="text" placeholder="Enter User Name" />

        <label>Book ID:</label>
        <input type="text" placeholder="Enter Book ID" />

        <label>Book Name:</label>
        <input type="text" placeholder="Enter Book Name" />

        <label>Publisher:</label>
        <input type="text" placeholder="Enter Publisher" />

        <label>Date:</label>
        <input type="date" />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default CheckInOutForm;
