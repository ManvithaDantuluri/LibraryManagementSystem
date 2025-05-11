// src/components/IssueBook.jsx
import React from 'react';
import './CheckInOutForm.css'; // reuse same styles

const IssueBook = () => {
  return (
    <div className="form-glass">
      <h2>Issue Book</h2>
      <form>
        <label>Issue Book Name:</label>
        <input type="text" placeholder="Enter Book Name" />

        <label>ISBN:</label>
        <input type="text" placeholder="Enter ISBN" />

        <label>Author:</label>
        <input type="text" placeholder="Enter Author Name" />

        <label>Issue Date:</label>
        <input type="date" />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default IssueBook;
