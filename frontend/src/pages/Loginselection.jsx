import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Loginselection.css";

export default function LoginSelection() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo-container">🌱 {t("title")}</div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">{t("home")}</Link>
          <a href="#" className="nav-link">{t("aboutUs") ?? "About Us"}</a>
          <a href="#" className="nav-link">{t("contact") ?? "Contact"}</a>
        </nav>

        <div className="auth-controls">
          <div className="lang-dropdown">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>
        </div>
      </header>


      {/* <h1 className="dashboard-title">
        {t("chooseLogin") ?? "Choose Your Login Type"}
      </h1>

      <p className="subtitle">
        {t("chooseLoginSubtitle") ??
          "Please select whether you are a Farmer or an Industry representative."}
      </p> */}

<div className="title-container">
      <h1 className="dashboard-title" data-translate="chooseLogin">Choose Your Login Type</h1>
      </div>
      <p className="subtitle" data-translate="subtitle">
        Please select whether you are a Farmer or an Industry representative.

      </p>

      <div className="login-cards">
        <Link to="/farmer-signin" className="login-card">
          <span className="card-icon">🧑‍🌾</span>
          <span className="card-title">{t("farmerLogin")}</span>
          <p className="card-description">
            {t("uploadResidue") ?? "Upload crop residue for sale."}
          </p>
        </Link>

        <Link to="/industry-signin" className="login-card">
          <span className="card-icon">🏭</span>
          <span className="card-title">{t("industryLogin")}</span>
          <p className="card-description">
            {t("buyResidue") ?? "Purchase crop residue."}
          </p>
        </Link>
      </div>
    </div>
  );
}
