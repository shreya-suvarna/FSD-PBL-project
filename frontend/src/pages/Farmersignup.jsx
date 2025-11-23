import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

import { useLanguage } from "../context/LanguageContext";   // ✅ added

function Farmersignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();       // ✅ added

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, email, password, confirmPassword } = form;

  //   if (!name || !email || !password || !confirmPassword) {
  //     alert(t("fillAllFields") ?? "Please fill in all fields");
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     alert(t("passwordsNotMatch") ?? "Passwords do not match");
  //     return;
  //   }

  //   if (password.length < 6) {
  //     alert(
  //       t("passwordLength") ?? "Password must be at least 6 characters long"
  //     );
  //     return;
  //   }

  //   alert(
  //     t("accountCreated") ??
  //       "Account created successfully! Please sign in."
  //   );
  //   navigate("/farmer-signin");
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const response = await fetch("http://localhost:5000/api/farmer/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      password: form.password,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    // alert("Signup successful!");
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

          {/* Language Dropdown */}
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
            <h1>{t("createAccount") ?? "Create your account"}</h1>
            <p>{t("continueToGreenKisan") ?? "to continue to Green Kisan"}</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t("fullName") ?? "Full name"}</label>
              <input
                type="text"
                className="form-input"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("fullNamePlaceholder") ?? "Enter your full name"}
                required
              />
            </div>

            <div className="form-group">
              <label>{t("emailOrPhone") ?? "Email or phone"}</label>
              <input
                type="text"
                className="form-input"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("emailPlaceholder") ?? "Enter your email or phone"}
                required
              />
            </div>

            <div className="form-group">
              <label>{t("password") ?? "Password"}</label>
              <input
                type="password"
                className="form-input"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder={t("createPassword") ?? "Create a strong password"}
                required
              />
            </div>

            <div className="form-group">
              <label>{t("confirmPassword") ?? "Confirm password"}</label>
              <input
                type="password"
                className="form-input"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder={t("confirmPasswordPlaceholder") ?? "Confirm your password"}
                required
              />
            </div>

            <button type="submit" className="auth-btn">
              {t("createAccountBtn") ?? "Create Account"}
            </button>
          </form>

          <div className="auth-links">
            <p>
              {t("haveAccount") ?? "Already have an account?"}{" "}
              <Link to="/farmer-signin" className="auth-link">
                {t("signIn") ?? "Sign in"}
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

export default Farmersignup;
