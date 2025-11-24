//frontend/src/pages/Farmersignin.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

import { useLanguage } from "../context/LanguageContext";   // ✅ added

function Farmersignin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { t, language, setLanguage } = useLanguage();       // ✅ added

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!email || !password) {
  //     alert(t("enterEmailPassword") ?? "Please enter both email and password");
  //     return;
  //   }

  //   navigate("/farmer-dashboard");
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/api/farmer/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("token", data.token);
    // alert("Login successful!");
      localStorage.setItem("farmerId", data.farmer._id); // store farmerId
  localStorage.setItem("farmerName", data.farmer.name);
    navigate("/farmer-dashboard");
  } else {
    alert(data.message);
  }
};


  return (
    <div className="auth-container">
      <header className="auth-header">
        <div className="logo-container">🌱 {t("title")}</div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">{t("home")}</Link>
          <Link to="/login-selection" className="nav-link">
            {t("backToLogin") ?? "Back to Login"}
          </Link>

          {/* language dropdown added inside header */}
          <div className="lang-dropdown" style={{ marginLeft: "20px" }}>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>
        </nav>
      </header>

      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-header-section">
            <span className="auth-icon">🧑‍🌾</span>
            <h1>{t("farmerSignIn") ?? "Farmer Sign In"}</h1>
            <p>
              {t("farmerPortalDesc") ??
                "to continue to Green Kisan Farmer Portal"}
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t("emailOrPhone") ?? "Email or phone"}</label>
              <input
                type="text"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder") ?? "Enter your email or phone"}
                required
              />
            </div>

            <div className="form-group">
              <label>{t("password") ?? "Password"}</label>
              <input
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("passwordPlaceholder") ?? "Enter your password"}
                required
              />
            </div>

            <div className="forgot-password">
              <Link to="#" className="forgot-link">
                {t("forgotPassword") ?? "Forgot password?"}
              </Link>
            </div>

            <button type="submit" className="auth-btn">
              {t("signIn") ?? "Sign In"}
            </button>
          </form>

          <div className="divider">
            <span className="divider-text">{t("or") ?? "or"}</span>
          </div>

          <div className="auth-links">
            <p>
              {t("noAccount") ?? "Don't have an account?"}{" "}
              <Link to="/farmer-signup" className="auth-link">
                {t("signUp") ?? "Sign up"}
              </Link>
            </p>
            <Link to="/login-selection" className="back-link">
              ← {t("backToLoginSelection") ?? "Back to Login Selection"}
            </Link>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2025 Green Kisan. {t("allRights") ?? "All rights reserved."}</p>
      </footer>
    </div>
  );
}

export default Farmersignin;
