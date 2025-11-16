import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/IndustryDashboard.css";
import industryImg from "../assets/industry_illustration.png";

function IndustryDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">🌱 Green Kisan</div>

        <nav className="nav-links">
          <span className="nav-link" onClick={() => navigate("/")}>Home</span>
          <span className="nav-link" onClick={() => navigate("/industry-alerts")}>Alerts</span>
          <span className="nav-link" onClick={() => navigate("/industry-payments")}>Payments</span>
          <span className="nav-link" onClick={() => navigate("/industry-settings")}>Settings</span>
        </nav>

        <div className="auth-controls">
          <div className="lang-dropdown">
            <select>
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>
          <span className="logout-btn" onClick={() => navigate("/login-selection")}>Logout</span>
        </div>
      </header>

      {/* Page Title */}
      <h1 className="dashboard-title">Industry Dashboard</h1>

      {/* Main content */}
      <div className="main-content-dashboard">
        <div className="dashboard-grid">
          <div className="dashboard-card" onClick={() => navigate("/search-residue")}>
            <span className="card-icon">🔍</span>
            <span className="card-text">Search Residue</span>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/pre-book")}>
            <span className="card-icon">🗓️</span>
            <span className="card-text">Pre-Book</span>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/industry-alerts")}>
            <span className="card-icon">🔔</span>
            <span className="card-text">Alerts</span>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/industry-payments")}>
            <span className="card-icon">💲</span>
            <span className="card-text">Payments</span>
          </div>
          
        </div>

        {/* Illustration area */}
        <div className="illustration-area">
          <img src={industryImg} alt="Industry illustration" />
        </div>
      </div>
    </div>
  );
}

export default IndustryDashboard;
