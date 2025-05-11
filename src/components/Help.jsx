import React from 'react';

const Help = () => {
  return (
    <div className="form-glass p-8 text-white overflow-y-auto max-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Help & Support</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🛠️ How to Use the Dashboard</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Check-In/Out:</strong> Enter user and book details, then click <em>Submit</em>.</li>
          <li><strong>Books:</strong> View available books and their status.</li>
          <li><strong>Issue Book:</strong> Assign a book to a user from the available list.</li>
          <li><strong>Reserve Book:</strong> Reserve a book if it is currently checked out.</li>
          <li><strong>Return Book:</strong> Enter Book ID to return a book to the library.</li>
          <li><strong>Search:</strong> Search for books using title, author, or book ID.</li>
          <li><strong>Payment:</strong> Complete payments using PhonePay or Credit/Debit options.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-yellow-300">⚙️ Troubleshooting</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Form not submitting?</strong> Make sure all required fields are filled.</li>
          <li><strong>Book not showing in Issue list?</strong> It may be already issued or reserved.</li>
          <li><strong>Reserve button disabled?</strong> Ensure the book is not already issued or reserved.</li>
          <li><strong>Date issues?</strong> Ensure you're using <em>dd-mm-yyyy</em> format.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-pink-400">📞 Contact Support</h3>
        <p>📧 Email: <a href="mailto:support@librarysystem.com" className="text-blue-400 underline">support@librarysystem.com</a></p>
        <p>📱 Phone: +1 (123) 456-7890</p>
        <p>🕐 Support Hours: Mon–Fri, 9:00 AM – 5:00 PM</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2 text-yellow-200">💡 Quick Tips</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Always search a book before reserving or issuing it.</li>
          <li>Use the sidebar to quickly navigate between sections.</li>
          <li>Click the Logout button in the top-right to exit securely.</li>
        </ul>
      </section>
    </div>
  );
};

export default Help;

