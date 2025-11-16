import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/FarmerDashboard.css";

function FarmerDashboard() {
  const navigate = useNavigate(); // useNavigate hook

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
          <div
            className="dashboard-card"
            onClick={() => navigate("/add-crop-residue")}
          >
            <span className="card-icon">🌱</span>
            <span className="card-text">Add Crop Residue</span>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/sales")}
          >
            <span className="card-icon">🔔</span>
            <span className="card-text">Sales</span>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/alerts")}
          >
            <span className="card-icon">📢</span>
            <span className="card-text">Alerts</span>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/payments")}
          >
            <span className="card-icon">₹</span>
            <span className="card-text">Payments</span>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/government-schemes")}
          >
            <span className="card-icon">🏛️</span>
            <span className="card-text">Government Schemes</span>
          </div>
        </div>

        <div className="illustration-area">
          <img
            src="/src/assets/farmer_illustration.png"
            alt="Farmer illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;
