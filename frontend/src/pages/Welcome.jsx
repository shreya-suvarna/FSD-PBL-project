import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Welcome.css"
import farmerImg from "../assets/farmer_illustration.png";

function Welcome() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo-container">🌱 Green Kisan</div>
        <nav className="nav-links">
          <Link to="/" className="nav-link" data-translate="home">Home</Link>
          <Link to="/login-selection" className="nav-link" data-translate="dashboardTitle">My Dashboard</Link>
          <a href="#" className="nav-link" data-translate="aboutUs">About Us</a>
          <a href="#" className="nav-link" data-translate="alerts">Alerts</a>
          <a href="#" className="nav-link" data-translate="settings">Settings</a>
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
          <Link to="/login-selection" className="login-btn" data-translate="login">
            Login
          </Link>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-text">
          <div className="title-container">
          <h1 data-translate="title" className="dashboard-title">
            Welcome to Green Kisan
          </h1>
          </div>
          <p className="subtitle" data-translate="subtitle">
            A platform connecting farmers with industries for sustainable crop residue management
          </p>

        
          <button
            className="get-started-btn"
            data-translate="getStarted"
            onClick={() => navigate("/login-selection")}
          >
            Get Started
          </button>
        </div>

        <div className="illustration-area">
          <img src={farmerImg} alt="Farmer illustration" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
