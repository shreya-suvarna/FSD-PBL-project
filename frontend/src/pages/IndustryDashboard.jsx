import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/IndustryDashboard.css";
import industryImg from "../assets/industry_illustration.png";

function IndustryDashboard() {
  const navigate = useNavigate();
  
  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo-container">🌱 Green Kisan</div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="#" className="nav-link">Alerts</Link>
          <Link to="#" className="nav-link">Payments</Link>
          <Link to="#" className="nav-link">Settings</Link>
        </nav>

        <div className="auth-controls">
          <div className="lang-dropdown">
            <select>
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>
          <Link to="/login-selection" className="logout-btn">Logout</Link>
        </div>
      </header>

      <h1 className="dashboard-title">My Dashboard</h1>

      <div className="main-content-dashboard">
        <div className="dashboard-grid">
          <div className="dashboard-card" onClick={() => navigate("/search-residue")}>
            <span className="card-icon">🔍</span>
            <span className="card-text">Search Residue</span>
          </div>
          <div className="dashboard-card" onClick={() => alert("Pre-Book")}>
            <span className="card-icon">🗓️</span>
            <span className="card-text">Pre-Book</span>
          </div>
          <div className="dashboard-card" onClick={() => alert("Alerts")}>
            <span className="card-icon">🔔</span>
            <span className="card-text">Alerts</span>
          </div>
          <div className="dashboard-card" onClick={() => alert("Payments")}>
            <span className="card-icon">💲</span>
            <span className="card-text">Payments</span>
          </div>
        </div>

        <div className="illustration-area">
          <img src={industryImg} alt="Industry illustration" />
        </div>
      </div>
    </div>
  );
}

export default IndustryDashboard;
