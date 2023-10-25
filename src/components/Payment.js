import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';
import NavBar from './NavBar';

function Payment() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const originalAmount = searchParams.get('amount');
  const selectedPlan = searchParams.get('plan');

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard'); // Default to credit card

  const handlePayment = (e) => {
    e.preventDefault();

    if (paymentMethod === 'creditCard') {
      // Process credit card payment
      alert('Credit Card Payment Successful!');
    } else if (paymentMethod === 'cashOnDelivery') {
      // Handle Cash on Delivery
      alert('Cash on Delivery selected. Payment upon delivery.');
    }
  };

  return (
    <div>  <NavBar/>
    <div className="background-container">
    <div className="payment-container">
    
    
      <h1 className="payment-heading">Payment Page</h1>
      <p>Selected Plan: {selectedPlan}</p>
      <p>Original Amount: ${originalAmount}</p>

      <form className="payment-form" onSubmit={handlePayment}>
        <label htmlFor="cardNumber" className="payment-label">
          Card Number:
        </label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="payment-input"
          required
        />

        <label htmlFor="expiryDate" className="payment-label">
          Expiry Date:
        </label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="payment-input"
          required
        />

        <div className="payment-form-row">
          <div className="payment-input-half">
            <label htmlFor="cvv" className="payment-label">
              CVV:
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              className="payment-input payment-input-cvv"
              required
            />
          </div>
          <div className="payment-input-half">
            <label htmlFor="cardholderName" className="payment-label">
              Cardholder Name:
            </label>
            <input
              type="text"
              id="cardholderName"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              className="payment-input"
              required
            />
          </div>
        </div>

        <label htmlFor="billingAddress" className="payment-label">
          Billing Address:
        </label>
        <input
          type="text"
          id="billingAddress"
          value={billingAddress}
          onChange={(e) => setBillingAddress(e.target.value)}
          className="payment-input"
          required
        />

        <label htmlFor="paymentMethod" className="payment-label">
          Payment Method:
        </label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="payment-input"
        >
          <option value="creditCard">Credit Card</option>
          <option value="cashOnDelivery">Cash on Delivery</option>
        </select>

        <button type="submit" className="payment-button">
          Pay Now
        </button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Payment;
