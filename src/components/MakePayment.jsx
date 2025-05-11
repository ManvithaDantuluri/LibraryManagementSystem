import React, { useState } from "react";

const MakePayment = () => {
  const [method, setMethod] = useState("PhonePay");

  return (
    <div className="payment-box">
      <h2>Make Payments</h2>
      <div>
        <label>
          <input
            type="radio"
            value="PhonePay"
            checked={method === "PhonePay"}
            onChange={() => setMethod("PhonePay")}
          />
          PhonePay
        </label>
        <label>
          <input
            type="radio"
            value="Card"
            checked={method === "Card"}
            onChange={() => setMethod("Card")}
          />
          Credit/Debit Card
        </label>
      </div>

      {method === "PhonePay" ? (
        <>
          <input placeholder="Book ID" />
          <input placeholder="Book Name" />
          <input placeholder="UPI ID" />
          <div style={{ textAlign: "center", color: "#fff" }}>or</div>
          <input placeholder="UPI Number" />
          <input placeholder="Amount" />
        </>
      ) : (
        <>
          <input placeholder="Book ID" />
          <input placeholder="Book Name" />
          <input placeholder="Credit/Debit Card Number" />
          <input placeholder="CVV and Expiry Date" />
          <input placeholder="Amount" />
        </>
      )}

      <div>
        <button>OK</button>
        <button>Back</button>
      </div>
    </div>
  );
};

export default MakePayment;
