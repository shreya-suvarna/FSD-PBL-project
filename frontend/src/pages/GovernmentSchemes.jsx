import React from "react";
import { Link } from "react-router-dom";
import "../styles/GovtSchemes.css";

import { useLanguage } from "../context/LanguageContext";   // ✅ added

function GovernmentSchemes() {
  const { t, language, setLanguage } = useLanguage();        // ✅ added

  const schemes = [
    {
      title: t("scheme1_title") ?? "🌿 Gobardhan (Galvanizing Organic Bio-Agro Resources Dhan)",
      description:
        t("scheme1_desc") ??
        "Supports rural areas in converting cattle dung and other organic waste into compost, biogas, and bio-CNG. Implemented through Swachh Bharat Mission in Karnataka.",
      link: "https://swachhbharatmission.gov.in/GOBARdhan/",
    },
    {
      title: t("scheme2_title") ?? "♻️ Organic & Bio-waste Composting – KVK Dakshina Kannada",
      description:
        t("scheme2_desc") ??
        "Supports farmers in converting crop and farm waste into compost and organic fertilizer.",
      link: "https://www.kvkdk.org/DCR-SC-SP-Programme.html",
    },
    {
      title: t("scheme3_title") ?? "♻️ Waste Management in Karnataka",
      description:
        t("scheme3_desc") ??
        "Covers organic waste management and composting initiatives across Karnataka.",
      link: "https://planning.karnataka.gov.in/storage/pdf-files/Economic%20Survey/Chapter%20Eng%2020.pdf",
    },
    {
      title: t("scheme4_title") ?? "💧 National Bioenergy Mission (NBEM)",
      description:
        t("scheme4_desc") ??
        "Encourages bioenergy generation from agricultural residues.",
      link: "https://mnre.gov.in/",
    },
    {
      title: t("scheme5_title") ??
        "🌱 Karnataka Compost Development Corporation – Farm-Waste Composting",
      description:
        t("scheme5_desc") ??
        "Converts agri-waste into compost, providing eco-friendly fertilizer.",
      link: "https://thebetterindia.com/88541/bengaluru-waste-converted-to-compost/",
    },
    {
      title: t("scheme6_title") ??
        "🧪 Karnataka State Pollution Control Board – Waste Management",
      description:
        t("scheme6_desc") ??
        "Monitors waste management programs across Karnataka.",
      link: "https://www.mospi.gov.in/sites/default/files/main_menu/Seminar/Waste%20management%20in%20Karnataka-KSPCB.pdf",
    },
    {
      title: t("scheme7_title") ??
        "💡 Mahatma Gandhi Institute of Rural Energy and Development (MGIRED)",
      description:
        t("scheme7_desc") ??
        "Promotes bioenergy projects and waste-to-energy systems.",
      link: "https://mgired.karnataka.gov.in/3/bioenergy/en",
    },
    {
      title: t("scheme8_title") ??
        "🚜 Bengaluru Urban Agriculture Department – Organic Farming Program",
      description:
        t("scheme8_desc") ??
        "Encourages eco-friendly agriculture and composting.",
      link: "https://bengaluruurban.nic.in/en/departments/agriculture-department/",
    },
    {
      title: t("scheme9_title") ?? "🌻 National Policy for Management of Crop Residues (NPMCR)",
      description:
        t("scheme9_desc") ??
        "Policy guiding residue reduction and composting initiatives.",
      link: "https://www.agriwelfare.gov.in/Documents/NPMCR_1.pdf",
    },
  ];

  return (
    <div className="dashboard-container">

      {/* Header */}
      <header className="header">
        <div className="logo-container">🌱 {t("title")}</div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">{t("home")}</Link>
          <Link to="/farmer-dashboard" className="nav-link">
            {t("dashboard_title")}
          </Link>
          <Link to="/alerts" className="nav-link">{t("alerts")}</Link>
          <Link to="/payments" className="nav-link">{t("payments")}</Link>
          <Link to="/settings" className="nav-link">{t("settings") ?? "Settings"}</Link>
        </nav>

        <div className="auth-controls">
          <div className="lang-dropdown">

            {/* Language Select FIXED */}
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>

          </div>

          <Link to="/login-selection" className="logout-btn">
            {t("logout") ?? "Logout"}
          </Link>
        </div>
      </header>

      {/* Page Title */}
      <h1 className="dashboard-title">
        {t("govtSchemesTitle") ?? "Government Schemes for Farmers"}
      </h1>

      {/* Schemes List */}
      <div className="schemes-container">
        {schemes.map((scheme, index) => (
          <div key={index} className="scheme-card">
            <h2>{scheme.title}</h2>
            <p>{scheme.description}</p>

            <a
              href={scheme.link}
              target="_blank"
              rel="noopener noreferrer"
              className="learn-more-btn"
            >
              {t("learnMore") ?? "Learn More"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GovernmentSchemes;
