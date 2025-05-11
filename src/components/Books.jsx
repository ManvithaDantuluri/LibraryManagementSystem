// src/components/Books.jsx
import React, { useState } from 'react';
import './CheckInOutForm.css'; // reuse same styling

const Books = () => {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [language, setLanguage] = useState('');

  const categories = [
    "Fiction", "Non-Fiction", "Science", "Technology", "Mathematics",
    "History", "Biography / Autobiography", "Philosophy", "Psychology", "Self-Help",
    "Religion / Spirituality", "Language & Literature", "Politics", "Art & Photography",
    "Business / Economics", "Health & Medicine", "Engineering", "Environment & Ecology",
    "Law", "Travel"
  ];

  const types = [
    "E-Book", "Hardcover", "Paperback", "Audiobook", "Reference", "Journal", "Magazine", "Thesis"
  ];

  const languages = [
    "English", "Hindi", "French", "German", "Spanish", "Chinese", "Arabic", "Tamil", "Telugu", "Malayalam"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ category, type, language });
    // Add actual search/filter logic here
  };

  return (
    <div className="form-glass">
      <h2>Books</h2>
      <form onSubmit={handleSubmit}>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="input">
          <option value="">-- Select Category --</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>

        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="input">
          <option value="">-- Select Type --</option>
          {types.map((t, idx) => (
            <option key={idx} value={t}>{t}</option>
          ))}
        </select>

        <label>Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="input">
          <option value="">-- Select Language --</option>
          {languages.map((lang, idx) => (
            <option key={idx} value={lang}>{lang}</option>
          ))}
        </select>

        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
};

export default Books;
