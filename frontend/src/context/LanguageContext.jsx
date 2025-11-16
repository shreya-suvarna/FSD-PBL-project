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
enterEmailPassword: "Please enter both email and password",
backToLogin: "Back to Login",
farmerSignIn: "Farmer Sign In",
farmerPortalDesc: "to continue to Green Kisan Farmer Portal",
emailOrPhone: "Email or phone",
emailPlaceholder: "Enter your email or phone",
password: "Password",
passwordPlaceholder: "Enter your password",
forgotPassword: "Forgot password?",
signIn: "Sign In",
or: "or",
noAccount: "Don't have an account?",
signUp: "Sign up",
backToLoginSelection: "Back to Login Selection",
allRights: "All rights reserved.",
fillAllFields: "Please fill in all fields",
passwordsNotMatch: "Passwords do not match",
passwordLength: "Password must be at least 6 characters long",
accountCreated: "Account created successfully! Please sign in.",

createAccount: "Create your account",
continueToGreenKisan: "to continue to Green Kisan",

fullName: "Full name",
fullNamePlaceholder: "Enter your full name",

createPassword: "Create a strong password",

confirmPassword: "Confirm password",
confirmPasswordPlaceholder: "Confirm your password",

createAccountBtn: "Create Account",

haveAccount: "Already have an account?",
industrySignIn: "Industry Sign In",
industryPortalDesc: "to continue to Green Kisan Industry Portal",
companyName: "Company name",
companyNamePlaceholder: "Enter your company name",
phoneNumber: "Phone Number",
phonePlaceholder: "Enter company phone number",
companyAddress: "Company Address",
companyAddressPlaceholder: "Enter company address",
enterValidPhone: "Enter a valid 10-digit phone number",
searchResidue: "Search Residue",
preBook: "Pre-Book",
industryIllustration: "Industry illustration",
logout: "Logout"







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
enterEmailPassword: "ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
backToLogin: "ಲಾಗಿನ್‌ಗೆ ಹಿಂತಿರುಗಿ",
farmerSignIn: "ರೈತರ ಲಾಗಿನ್",
farmerPortalDesc: "ಗ್ರೀನ್ ಕಿಸಾನ್ ರೈತ ಪೋರ್ಟಲ್‌ಗೆ ಮುಂದುವರಿಯಿರಿ",
emailOrPhone: "ಇಮೇಲ್ ಅಥವಾ ಫೋನ್",
emailPlaceholder: "ನಿಮ್ಮ ಇಮೇಲ್ ಅಥವಾ ಫೋನ್ ನಮೂದಿಸಿ",
password: "ಪಾಸ್‌ವರ್ಡ್",
passwordPlaceholder: "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
forgotPassword: "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?",
signIn: "ಲಾಗಿನ್ ಮಾಡಿ",
or: "ಅಥವಾ",
noAccount: "ಖಾತೆ ಇಲ್ಲವೇ?",
signUp: "ಖಾತೆ ತೆರೆದುಕೊಳ್ಳಿ",
backToLoginSelection: "ಲಾಗಿನ್ ಆಯ್ಕೆಗೆ ಹಿಂತಿರುಗಿ",
allRights: "ಎಲ್ಲ ಹಕ್ಕುಗಳು ನಿರ್ದಿಷ್ಟವಾಗಿವೆ.",
fillAllFields: "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ತುಂಬಿ",
passwordsNotMatch: "ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ",
passwordLength: "ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ 6 ಅಕ್ಷರಗಳಿರಬೇಕು",
accountCreated: "ಖಾತೆ ಯಶಸ್ವಿಯಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ! ದಯವಿಟ್ಟು ಲಾಗಿನ್ ಮಾಡಿ.",

createAccount: "ನಿಮ್ಮ ಖಾತೆಯನ್ನು ರಚಿಸಿ",
continueToGreenKisan: "ಗ್ರೀನ್ ಕಿಸಾನ್‌ಗೆ ಮುಂದುವರೆಯಿರಿ",

fullName: "ಪೂರ್ಣ ಹೆಸರು",
fullNamePlaceholder: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",

createPassword: "ಬಲವಾದ ಪಾಸ್‌ವರ್ಡ್ ರಚಿಸಿ",

confirmPassword: "ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ",
confirmPasswordPlaceholder: "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ದೃಢೀಕರಿಸಿ",

createAccountBtn: "ಖಾತೆ ರಚಿಸಿ",

haveAccount: "ಖಾತೆ ಇದೆಯೇ?",
industrySignIn: "ಕೈಗಾರಿಕಾ ಲಾಗಿನ್",
industryPortalDesc: "ಗ್ರೀನ್ ಕಿಸಾನ್ ಕೈಗಾರಿಕಾ ಪೋರ್ಟಲ್‌ಗೆ ಮುಂದುವರಿಯಿರಿ",
companyName: "ಕಂಪನಿಯ ಹೆಸರು",
companyNamePlaceholder: "ನಿಮ್ಮ ಕಂಪನಿಯ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
phoneNumber: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
phonePlaceholder: "ಕಂಪನಿಯ ದೂರವಾಣಿ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
companyAddress: "ಕಂಪನಿ ವಿಳಾಸ",
companyAddressPlaceholder: "ಕಂಪನಿ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ",
enterValidPhone: "ದಯವಿಟ್ಟು ಮಾನ್ಯ 10-ಅಂಕಿಯ ಫೋನ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
searchResidue: "ಅವಶೇಷ ಹುಡುಕಿ",
preBook: "ಮುಂಗಡ ಬುಕ್",
industryIllustration: "ಕೈಗಾರಿಕಾ ಚಿತ್ರಣ",
logout: "ಲಾಗ್ ಔಟ್"







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
