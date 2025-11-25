import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutUs.css"; // assuming you rename aboutus.css to AboutUs.css

function AboutUs() {
  return (
    <div className="dashboard-container" style={{ minHeight: "80vh" }}>
      <header className="header">
        <div className="logo-container">🌱 Green Kisan</div>

        <nav className="nav-links">
          <Link to="/" className="nav-link" data-translate="home">
            Home
          </Link>
          <Link to="/about-us" className="nav-link" data-translate="aboutUs">
            About Us
          </Link>
          <Link to="/contact" className="nav-link" data-translate="contact">
            Contact
          </Link>
        </nav>

        <div className="auth-controls">
          <div className="lang-dropdown" style={{ color: "var(--text-light)" }}>
            <select id="languageSelector">
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>
        </div>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Green Kisan, our mission is to empower farmers with digital tools
          and connect them directly with industries for fair trade,
          transparency, and sustainable growth.
        </p>
      </section>

      <section className="mission">
        <h2>Our Vision</h2>
        <p>
          We envision a future where technology bridges the gap between
          agriculture and industry, ensuring better productivity, fair pricing,
          and eco-friendly practices.
        </p>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Green Kisan was born from a simple idea — to make agriculture smarter
          and more connected. We noticed how farmers often struggle to find
          fair buyers, while industries lack reliable suppliers. Our platform
          solves this by linking them directly with trust and transparency.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
