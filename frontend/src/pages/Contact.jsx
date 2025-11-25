import React from "react";
import { Link } from "react-router-dom"; // ✅ use Link
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="dashboard-container" style={{ minHeight: "80vh" }}>
      <header className="header">
        <div className="logo-container">🌱 Green Kisan</div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>  {/* ✅ changed */}
          <Link to="/about-us" className="nav-link">About Us</Link>  {/* ✅ changed */}
          <Link to="/contact" className="nav-link">Contact</Link>  {/* ✅ changed */}
        </nav>

        <div className="auth-controls">
          <div className="lang-dropdown">
            <select>
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>
        </div>
      </header>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out to us through any of the following:</p>

        <ul>
          <li><strong>Email:</strong> support@greenkisan.com</li>
          <li><strong>Phone:</strong> +91 </li>
          <li><strong>Address:</strong> Green Kisan HQ, Mangalore, Karnataka, India</li>
        </ul>

        <h3>Follow us on Social Media</h3>
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;
