// src/pages/FarmerDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/FarmerDashboard.css";


function FarmerDashboard() {
  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo-container">🌱 {("title")}</div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">{("home")}</Link>
          {/* <Link to="#" className="nav-link">{t("alerts")}</Link>
          <Link to="#" className="nav-link">{t("payments")}</Link>
          <Link to="#" className="nav-link">{t("settings") ?? "Settings"}</Link> */}
        </nav>

        <div className="auth-controls">
          <div className="lang-dropdown">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>

          <Link to="/login-selection" className="logout-btn">Logout</Link>
        </div>
      </header>

      <h1 className="dashboard-title">{t("dashboard_title")}</h1>

      <div className="main-content-dashboard">
        <div className="dashboard-grid">
          <div className="dashboard-card" onClick={() => alert("Add Crop Residue")}>
            <span className="card-icon">🌱</span>
            <span className="card-text">{t("add_crop_residue")}</span>
          </div>
          <div className="dashboard-card">
            <span className="card-icon">🔔</span>
            <span className="card-text">{t("sales")}</span>
          </div>
          <div className="dashboard-card">
            <span className="card-icon">📢</span>
            <span className="card-text">{t("alerts")}</span>
          </div>
          <div className="dashboard-card">
            <span className="card-icon">₹</span>
            <span className="card-text">{t("payments")}</span>
          </div>
          <div className="dashboard-card" onClick={() => alert("Govt Schemes")}>
            <span className="card-icon">🏛️</span>
            <span className="card-text">{t("govt_schemes")}</span>
          </div>
        </div>

        <div className="illustration-area">
          <img
            src="/src/assets/farmer_illustration.png"
            alt={t("farmer_illustration_alt")}
          />
        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;
