import React from "react";
import { Link } from "react-router-dom";
import "../styles/GovtSchemes.css"; // You can keep the same CSS file

function GovernmentSchemes() {
  const schemes = [
    {
      title: "🌿 Gobardhan (Galvanizing Organic Bio-Agro Resources Dhan)",
      description: "Supports rural areas in converting cattle dung and other organic waste into compost, biogas, and bio-CNG. Implemented through Swachh Bharat Mission in Karnataka.",
      link: "https://swachhbharatmission.gov.in/GOBARdhan/",
    },
    {
      title: "♻️ Organic & Bio-waste Composting – KVK Dakshina Kannada",
      description: "Supports farmers in converting crop and farm waste into compost and organic fertilizer through training and demonstrations.",
      link: "https://www.kvkdk.org/DCR-SC-SP-Programme.html",
    },
    {
      title: "♻️ Waste Management in Karnataka (Organic & Agricultural Waste)",
      description: "An initiative covering organic/compost waste in Karnataka, highlighting compost generation and farm-waste utilisation practices across the state.",
      link: "https://planning.karnataka.gov.in/storage/pdf-files/Economic%20Survey/Chapter%20Eng%2020.pdf",
    },
    {
      title: "💧 National Bioenergy Mission (NBEM)",
      description: "Encourages bioenergy generation from agricultural residues and waste biomass. Active projects are supported across Karnataka.",
      link: "https://mnre.gov.in/",
    },
    {
      title: "🌱 Karnataka Compost Development Corporation – Farm-Waste Composting Initiative",
      description: "This initiative by the Karnataka Compost Development Corporation (KCDC) converts agri-waste and organic residues into compost, supporting farmers in Karnataka with low-cost organic fertilizer.",
      link: "https://thebetterindia.com/88541/bengaluru-waste-converted-to-compost/",
    },
    {
      title: "🧪 Karnataka State Pollution Control Board – Waste Management Initiatives",
      description: "KSPCB monitors and supports waste management programs across the state, including organic and farm waste utilization.",
      link: "https://www.mospi.gov.in/sites/default/files/main_menu/Seminar/Waste%20management%20in%20Karnataka-KSPCB.pdf",
    },
    {
      title: "💡 Mahatma Gandhi Institute of Rural Energy and Development (MGIRED)",
      description: "Promotes bioenergy projects and rural waste-to-energy systems in Karnataka, focusing on agricultural residues and eco-friendly fuels.",
      link: "https://mgired.karnataka.gov.in/3/bioenergy/en",
    },
    {
      title: "🚜 Bengaluru Urban Agriculture Department – Organic Farming Program",
      description: "Encourages eco-friendly agricultural practices and farm waste composting for farmers in the Bengaluru region.",
      link: "https://bengaluruurban.nic.in/en/departments/agriculture-department/",
    },
    {
      title: "🌻 National Policy for Management of Crop Residues (NPMCR)",
      description: "A national policy guiding Karnataka’s programs to reduce residue burning and promote composting and reuse of crop waste.",
      link: "https://www.agriwelfare.gov.in/Documents/NPMCR_1.pdf",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">🌱 Green Kisan</div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/farmer-dashboard" className="nav-link">My Dashboard</Link>
          <Link to="/alerts" className="nav-link">Alerts</Link>
          <Link to="/payments" className="nav-link">Payments</Link>
          <Link to="/settings" className="nav-link">Settings</Link>
        </nav>
        <div className="auth-controls">
          <div className="lang-dropdown">
            <select id="languageSelector">
              <option value="English">English</option>
              <option value="Kannada">Kannada</option>
            </select>
          </div>
          <Link to="/login-selection" className="logout-btn">Logout</Link>
        </div>
      </header>

      {/* Page Title */}
      <h1 className="dashboard-title">Government Schemes for Farmers</h1>

      {/* Schemes List */}
      <div className="schemes-container">
        {schemes.map((scheme, index) => (
          <div key={index} className="scheme-card">
            <h2>{scheme.title}</h2>
            <p>{scheme.description}</p>
            <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="learn-more-btn">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GovernmentSchemes;
