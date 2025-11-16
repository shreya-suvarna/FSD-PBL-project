import React, { useState } from "react";
import {Link , useNavigate } from "react-router-dom";
import "../styles/IndustryAuth.css";

function Industrysignup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  const updateForm = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }

    alert("Account created successfully!");
    navigate("/industry/signin");
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
            <h1>Create your account</h1>
            <p>to continue to Green Kisan</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Company name</label>
              <input id="companyName" type="text" className="form-input" placeholder="Enter your company name" required onChange={updateForm} />
            </div>

            <div className="form-group">
              <label>Email or phone</label>
              <input id="email" type="text" className="form-input" placeholder="Enter your email" required onChange={updateForm} />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input id="phone" type="tel" className="form-input" placeholder="Enter company phone number" required onChange={updateForm} />
            </div>

            <div className="form-group">
              <label>Company Address</label>
              <input id="address" type="text" className="form-input" placeholder="Enter company address" required onChange={updateForm} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input id="password" type="password" className="form-input" placeholder="Create a strong password" required onChange={updateForm} />
            </div>

            <div className="form-group">
              <label>Confirm password</label>
              <input id="confirmPassword" type="password" className="form-input" placeholder="Confirm your password" required onChange={updateForm} />
            </div>

            <button className="auth-btn" type="submit">Create Account</button>
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
        <p>© 2023 Green Kisan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Industrysignup;