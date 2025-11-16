import React, { createContext, useState, useEffect, useContext } from "react";

// --- Translations (same as your old weltranslate.js) ---
const translations = {
  en: {
    home: "Home",
    aboutUs: "About Us",
    alerts: "Alerts",
    settings: "Settings",
    login: "Login",
    title: "Welcome to Green Kisan",
    subtitle: "A platform connecting farmers with industries for sustainable crop residue management",
    getStarted: "Get Started",
    chooseLogin: "Choose Your Login Type",
    farmerLogin: "Farmer Login",
    industryLogin: "Industry Login",
    uploadResidue: "Upload crop residue for sale.",
    buyResidue: "Purchase crop residue.",
    contact: "Contact",
  },
  kn: {
    home: "ಮುಖಪುಟ",
    aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
    alerts: "ಎಚ್ಚರಿಕೆಗಳು",
    settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    login: "ಲಾಗಿನ್",
    title: "ಗ್ರೀನ್ ಕಿಸಾನ್‌ಗೆ ಸ್ವಾಗತ",
    subtitle: "ಸ್ಥಿರ ಬೆಳೆ ಅವಶೇಷ ನಿರ್ವಹಣೆಗೆ ರೈತರನ್ನು ಕೈಗಾರಿಕೆಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವ ವೇದಿಕೆ",
    getStarted: "ಪ್ರಾರಂಭಿಸಿ",
    chooseLogin: "ನಿಮ್ಮ ಲಾಗಿನ್ ಪ್ರಕಾರ ಆಯ್ಕೆಮಾಡಿ",
    farmerLogin: "ರೈತ ಲಾಗಿನ್",
    industryLogin: "ಕೈಗಾರಿಕಾ ಲಾಗಿನ್",
    uploadResidue: "ಮಾರಾಟಕ್ಕಾಗಿ ಬೆಳೆ ಉಳಿಕೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
    buyResidue: "ಬೆಳೆ ಉಳಿಕೆ ಖರೀದಿಸಿ.",
    contact: "ಸಂಪರ್ಕ",
  },
};

// --- Create Context ---
const LanguageContext = createContext();

// --- Provider Component ---
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  // Save language preference
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Translation function
  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// --- Custom Hook for easy use ---
export const useLanguage = () => useContext(LanguageContext);
