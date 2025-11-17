import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import "../styles/Welcome.css";

import "../styles/Welcome.css"
import farmerImg from "../assets/farmer_illustration.png";


function Welcome() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo-container">🌱 {t("title")}</div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">{t("home")}</Link>
          <Link to="/login-selection" className="nav-link">
            {t("dashboard_title")}
          </Link>
          <a href="#" className="nav-link">{t("aboutUs") ?? "About Us"}</a>
          <a href="#" className="nav-link">{t("alerts")}</a>
          <a href="#" className="nav-link">{t("settings") ?? "Settings"}</a>
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
          <Link to="/login-selection" className="login-btn">
            {t("login") ?? "Login"}
          </Link>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-text">
{/* 
          <h1 className="dashboard-title">{t("title")}</h1>

          <p className="subtitle">{t("subtitle")}</p> */}

          <div className="title-container">
          {/* <h1 data-translate="title" className="dashboard-title">
            {t("Welcome to Green Kisan")}
          </h1> */}
            <h1 className="dashboard-title">{t("title")}</h1>
          </div>
          {/* <p className="subtitle" data-translate="subtitle">
            A platform connecting farmers with industries for sustainable crop residue management
          </p> */}
         <p className="subtitle">{t("subtitle")}</p> 

          <button
            className="get-started-btn"
            onClick={() => navigate("/login-selection")}
          >
            {t("getStarted") ?? "Get Started"}
          </button>
        </div>

        <div className="illustration-area">

          <img
            src="/src/assets/farmer_illustration.png"
            alt={t("farmer_illustration_alt")}
          />

          {/* <img src={farmerImg} alt="Farmer illustration" /> */}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
