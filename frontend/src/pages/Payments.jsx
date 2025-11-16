import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Payments.css";

function Payments() {
  const navigate = useNavigate();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Load payments from localStorage (or API)
    const stored = JSON.parse(localStorage.getItem("payments") || "[]");
    setPayments(stored);
  }, []);

  const markAsReceived = (index) => {
    const updated = [...payments];
    updated[index].status = "Received";
    localStorage.setItem("payments", JSON.stringify(updated));
    setPayments(updated);
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo-container">🌱 Green Kisan</div>
        <nav className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/farmer-dashboard" className="nav-link">My Dashboard</a>
          <a href="/alerts" className="nav-link">Alerts</a>
          <a href="/payments" className="nav-link">Payments</a>
        </nav>
        <div className="auth-controls">
          <select id="languageSelector">
            <option value="English">English</option>
            <option value="Kannada">Kannada</option>
          </select>
          <button className="logout-btn" onClick={() => navigate("/login-selection")}>Logout</button>
        </div>
      </header>

      <h1 className="dashboard-title">Payments</h1>

      <div className="payments-container">
        {payments.length === 0 ? (
          <p>No payments yet.</p>
        ) : (
          payments.map((payment, index) => (
            <div key={index} className="payment-card">
              <p><strong>Crop:</strong> {payment.cropName}</p>
              <p><strong>Quantity:</strong> {payment.quantity} kg</p>
              <p><strong>Amount:</strong> ₹{payment.amount}</p>
              <p><strong>Status:</strong> {payment.status}</p>
              <p><strong>Date:</strong> {payment.date}</p>
              {payment.status !== "Received" && (
                <button onClick={() => markAsReceived(index)} className="btn-mark">
                  Mark as Received
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Payments;
