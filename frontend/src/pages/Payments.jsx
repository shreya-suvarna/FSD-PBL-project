//frontend/src/pages/Payments.jsx


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Payments.css";

import { useLanguage } from "../context/LanguageContext"; // ✅ added

function Payments() {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage(); // ✅ FIXED

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("payments") || "[]");
    setPayments(stored);
  }, []);

  const markAsReceived = (index) => {
    const updated = [...payments];
    updated[index].status = t("received") ?? "Received";
    localStorage.setItem("payments", JSON.stringify(updated));
    setPayments(updated);
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo-container">🌱 Green Kisan</div>

        <nav className="nav-links">
          <a href="/" className="nav-link">{t("home") ?? "Home"}</a>
          <a href="/farmer-dashboard" className="nav-link">{t("myDashboard") ?? "My Dashboard"}</a>
          <a href="/alerts" className="nav-link">{t("alertsTitle") ?? "Alerts"}</a>
          <a href="/payments" className="nav-link">{t("paymentsTitle") ?? "Payments"}</a>
        </nav>

        <div className="auth-controls">
          {/* ✅ FIXED LANGUAGE DROPDOWN */}
          <select
            id="languageSelector"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="kn">ಕನ್ನಡ</option>
          </select>

          <button
            className="logout-btn"
            onClick={() => navigate("/login-selection")}
          >
            {t("logout") ?? "Logout"}
          </button>
        </div>
      </header>

      <h1 className="dashboard-title">{t("paymentsTitle") ?? "Payments"}</h1>

      <div className="payments-container">
        {payments.length === 0 ? (
          <p>{t("noPayments") ?? "No payments yet."}</p>
        ) : (
          payments.map((payment, index) => (
            <div key={index} className="payment-card">
              <p><strong>{t("crop") ?? "Crop:"}</strong> {payment.cropName}</p>
              <p><strong>{t("quantity") ?? "Quantity:"}</strong> {payment.quantity} kg</p>
              <p><strong>{t("amount") ?? "Amount:"}</strong> ₹{payment.amount}</p>
              <p><strong>{t("status") ?? "Status:"}</strong> {payment.status}</p>
              <p><strong>{t("date") ?? "Date:"}</strong> {payment.date}</p>

              {payment.status !== (t("received") ?? "Received") && (
                <button
                  onClick={() => markAsReceived(index)}
                  className="btn-mark"
                >
                  {t("markReceived") ?? "Mark as Received"}
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
