import React from 'react';
import './CheckInOutForm.css'; // Reuse your glass style

const About = () => {
  return (
    <div className="form-glass">
      <h2>About This Library Dashboard</h2>
      <p>
        Welcome to your personal Library Management Dashboard. This system is designed to make tracking, issuing, and managing books quick and efficient for both students and staff.
        It simplifies daily library operations, making it easier for librarians and users to interact with the library digitally.
      </p>

      <h3>📚 Key Features</h3>
      <ul>
        <li>🔹 Book Check-In and Check-Out with detailed tracking</li>
        <li>🔹 Easy book issue and return workflow</li>
        <li>🔹 Reservation system for in-demand books</li>
        <li>🔹 Live book search and filtering options</li>
        <li>🔹 Integrated payment interface for fines and fees</li>
        <li>🔹 Clean, modern user interface with a focus on usability</li>
      </ul>

      <h3>💡 Purpose</h3>
      <p>
        This dashboard was developed to address the common challenges faced by traditional library systems. It enables better organization, reduces paperwork, and gives users a self-service option for managing their borrowed materials.
      </p>

      <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
        Built with ❤️ by [Manvitha, Sharanya, Varshini] · 2025 · All rights reserved.
      </p>
    </div>
  );
};

export default About;
