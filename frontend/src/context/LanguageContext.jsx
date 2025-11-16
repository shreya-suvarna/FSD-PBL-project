// src/context/LanguageContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

const translations = {
  en: {
    home: "Home",
    title: "Welcome to Green Kisan",
    subtitle:
      "A platform connecting farmers with industries for sustainable crop residue management",

    dashboard_title: "My Dashboard",
    add_crop_residue: "Add Crop Residue",
    sales: "Sales",
    alerts: "Alerts",
    payments: "Payments",
    govt_schemes: "Government Schemes",
    farmer_illustration_alt: "Farmer illustration",
    aboutUs: "About Us",
settings: "Settings",
login: "Login",
getStarted: "Get Started",
aboutUs: "About Us",
contact: "Contact",
chooseLogin: "Choose Your Login Type",
chooseLoginSubtitle: "Please select whether you are a Farmer or an Industry representative.",
farmerLogin: "Farmer Login",
industryLogin: "Industry Login",
uploadResidue: "Upload crop residue for sale.",
buyResidue: "Purchase crop residue.",


  },

  kn: {
    home: "ಮುಖಪುಟ",
    title: "ಗ್ರೀನ್ ಕಿಸಾನ್‌ಗೆ ಸ್ವಾಗತ",
    subtitle:
      "ಸ್ಥಿರ ಬೆಳೆ ಅವಶೇಷ ನಿರ್ವಹಣೆಗೆ ರೈತರನ್ನು ಕೈಗಾರಿಕೆಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವ ವೇದಿಕೆ",

    dashboard_title: "ನನ್ನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    add_crop_residue: "ಬೆಳೆ ಅವಶೇಷ ಸೇರಿಸಿ",
    sales: "ಮಾರಾಟ",
    alerts: "ಎಚ್ಚರಿಕೆಗಳು",
    payments: "ಪಾವತಿಗಳು",
    govt_schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    farmer_illustration_alt: "ರೈತ ಚಿತ್ರಣ",
    aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
settings: "ಸಂಯೆಾಜನೆಗಳು",
login: "ಲಾಗಿನ್",
getStarted: "ಪ್ರಾರಂಭಿಸಿ",
aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
contact: "ಸಂಪರ್ಕಿಸಿ",
chooseLogin: "ಲಾಗಿನ್ ವಿಧವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
chooseLoginSubtitle: "ದಯವಿಟ್ಟು ನೀವು ರೈತರೇ ಅಥವಾ ಕೈಗಾರಿಕೆಯ ಪ್ರತಿನಿಧಿಯೋ ಆಯ್ಕೆಮಾಡಿ.",
farmerLogin: "ರೈತರ ಲಾಗಿನ್",
industryLogin: "ಕೈಗಾರಿಕಾ ಲಾಗಿನ್",
uploadResidue: "ಮಾರಾಟಕ್ಕಾಗಿ ಬೆಳೆ ಅವಶೇಷಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
buyResidue: "ಬೆಳೆ ಅವಶೇಷಗಳನ್ನು ಖರೀದಿಸಿ.",


  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("language") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("language", language);
    } catch {}
    console.log("[LanguageProvider] language ->", language);
  }, [language]);

  const t = (key) => {
    return translations?.[language]?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};

export default LanguageContext;
