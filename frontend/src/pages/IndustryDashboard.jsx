//frontend/src/pages/IndustryDashboard.jsx


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/IndustryDashboard.css";
import industryImg from "../assets/industry_illustration.png";

import { useLanguage } from "../context/LanguageContext";   // ✅ added

function IndustryDashboard() {
  const navigate = useNavigate();
  
  const { t, language, setLanguage } = useLanguage();       // ✅ added

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo-container">🌱 {t("title")}</div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">{t("home")}</Link>
          <Link to="#" className="nav-link">{t("alerts")}</Link>
          <Link to="#" className="nav-link">{t("payments")}</Link>
          <Link to="#" className="nav-link">{t("settings") ?? "Settings"}</Link>
        </nav>

        <div className="auth-controls">
           <button className="profile-btn" onClick={() => navigate("/industry-profile")}>👤Profile</button>
          <div className="lang-dropdown">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}     // ✅ works now
            >
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>

          <Link to="/login-selection" className="logout-btn">
            {t("logout") ?? "Logout"}
          </Link>
        </div>
      </header>

      <h1 className="dashboard-title">{t("dashboard_title")}</h1>

      <div className="main-content-dashboard">
        <div className="dashboard-grid">
          <div className="dashboard-card" onClick={() => navigate("/search-residue")}>
            <span className="card-icon">🔍</span>
            <span className="card-text">{t("searchResidue")}</span>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/pre-book")}>
            <span className="card-icon">🗓️</span>
            <span className="card-text">{t("preBook")}</span>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/Alerts")}>
            <span className="card-icon">🔔</span>
            <span className="card-text">{t("alerts")}</span>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/Payments")}>
            <span className="card-icon">💲</span>
            <span className="card-text">{t("payments")}</span>
          </div>

        </div>

        <div className="illustration-area">
          <img src={industryImg} alt={t("industryIllustration") ?? "Industry illustration"} />
        </div>
      </div>
    </div>
  );
}

export default IndustryDashboard;
