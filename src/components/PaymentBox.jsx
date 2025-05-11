import React, { useState } from 'react';
import './CheckInOutForm.css'; // Reuse glass styling

const PaymentBox = () => {
  const [method, setMethod] = useState('PhonePay');

  return (
    <div className="form-glass">
      <h2>Make Payments</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
        <label>
          <input
            type="radio"
            name="payment"
            value="PhonePay"
            checked={method === 'PhonePay'}
            onChange={() => setMethod('PhonePay')}
          />{' '}
          PhonePay
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="Card"
            checked={method === 'Card'}
            onChange={() => setMethod('Card')}
          />{' '}
          Credit/Debit Card
        </label>
      </div>

      <form>
        <label>Book ID:</label>
        <input type="text" placeholder="----------------------------" />

        <label>Book Name:</label>
        <input type="text" placeholder="----------------------------" />

        {method === 'PhonePay' ? (
          <>
            <label>UPI ID:</label>
            <input type="text" placeholder="----------------------------" />

            <p style={{ textAlign: 'center' }}>or</p>

            <label>UPI Number:</label>
            <input type="text" placeholder="----------------------------" />
          </>
        ) : (
          <>
            <label>Credit/Debit Card Number:</label>
            <input type="text" placeholder="----------------------------" />

            <label>CVV and Expiry Date:</label>
            <input type="text" placeholder="----------------------------" />
          </>
        )}

        <label>Amount:</label>
        <input type="text" placeholder="----------------------------" />

        <div className="button-group">
          <button className="ok-button">OK</button>
          <button className="back-button">Back</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentBox;
