import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Farmersignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    alert("Account created successfully! Please sign in.");
    navigate("/farmer-signin");
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
            <h1>Create your account</h1>
            <p>to continue to Green Kisan</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full name</label>
              <input
                type="text"
                className="form-input"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email or phone</label>
              <input
                type="text"
                className="form-input"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email or phone"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-input"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm password</label>
              <input
                type="password"
                className="form-input"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>

            <button type="submit" className="auth-btn">Create Account</button>
          </form>

          <div className="auth-links">
            <p>
              Already have an account?{" "}
              <Link to="/farmer-signin" className="auth-link">Sign in</Link>
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

export default Farmersignup;
