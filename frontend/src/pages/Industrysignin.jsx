import React, { useState } from "react";
import {Link , useNavigate } from "react-router-dom";
import "../styles/IndustryAuth.css";

function Industrysignin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    login: "",
    password: ""
  });

  const updateForm = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.login && form.password) {
      navigate("/industry-dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <div className="logo-container">🌱 Green Kisan</div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login-selection" className="nav-link">Back to Login</Link>
        </nav>
      </header>

      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-header-section">
            <span className="auth-icon">🏭</span>
            <h1>Industry Sign In</h1>
            <p>to continue to Green Kisan Industry Portal</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email or Phone</label>
              <input id="login" type="text" className="form-input" placeholder="Enter your email or phone" required onChange={updateForm} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input id="password" type="password" className="form-input" placeholder="Enter your password" required onChange={updateForm} />
            </div>

            <div className="forgot-password">
              <a className="forgot-link" href="#">Forgot password?</a>
            </div>

            <button className="auth-btn" type="submit">Sign In</button>
          </form>

          <div className="divider">
            <span className="divider-text">or</span>
          </div>

          <div className="auth-links">
             <p>
              Don't have an account?{" "}
              <Link to="/industry-signup" className="auth-link">Sign up</Link>
            </p>
            <Link to="/login-selection" className="back-link">
              ← Back to Login Selection
            </Link>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2023 Green Kisan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Industrysignin;