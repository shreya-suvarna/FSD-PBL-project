import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css"; 

function Farmersignin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    // In real app, you’d validate credentials
    navigate("/farmer-dashboard"); // ✅ redirect to dashboard
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
            <span className="auth-icon">🧑‍🌾</span>
            <h1>Farmer Sign In</h1>
            <p>to continue to Green Kisan Farmer Portal</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email or phone</label>
              <input
                type="text"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email or phone"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="forgot-password">
              <Link to="#" className="forgot-link">Forgot password?</Link>
            </div>

            <button type="submit" className="auth-btn">Sign In</button>
          </form>

          <div className="divider">
            <span className="divider-text">or</span>
          </div>

          <div className="auth-links">
            <p>
              Don't have an account?{" "}
              <Link to="/farmer-signup" className="auth-link">Sign up</Link>
            </p>
            <Link to="/login-selection" className="back-link">
              ← Back to Login Selection
            </Link>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2025 Green Kisan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Farmersignin;