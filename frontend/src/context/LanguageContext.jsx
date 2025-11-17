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
logout: "Logout",
govtSchemesTitle: "Government Schemes for Farmers",
learnMore: "Learn More",

scheme1_title: "🌿 Gobardhan (Galvanizing Organic Bio-Agro Resources Dhan)",
scheme1_desc: "Supports rural areas in converting organic waste into compost and biogas.",

scheme2_title: "♻️ Organic & Bio-waste Composting – KVK Dakshina Kannada",
scheme2_desc: "Helps farmers convert crop waste into organic fertilizer.",

scheme3_title: "♻️ Waste Management in Karnataka",
scheme3_desc: "Covers composting and organic waste management initiatives.",

scheme4_title: "💧 National Bioenergy Mission (NBEM)",
scheme4_desc: "Promotes bioenergy from agricultural waste.",

scheme5_title: "🌱 Karnataka Compost Development Corporation – Composting",
scheme5_desc: "Converts agricultural waste into compost.",

scheme6_title: "🧪 Karnataka State Pollution Control Board – Waste Initiatives",
scheme6_desc: "Supports waste management programs across Karnataka.",

scheme7_title: "💡 MGIRED – Bioenergy Projects",
scheme7_desc: "Promotes eco-friendly rural energy systems.",

scheme8_title: "🚜 Bengaluru Organic Farming Program",
scheme8_desc: "Encourages organic farming and composting.",

scheme9_title: "🌻 NPMCR – National Crop Residue Policy",
scheme9_desc: "Policy to reduce residue burning and promote composting.",




max5Images: "❌ Max 5 images allowed",
imageLimitMsg: "❌ Each image must be <2MB and an image file.",
fillRequiredFields: "❌ Please fill all required fields and upload at least 1 image.",
uploadSuccess: "✅ Crop residue uploaded successfully!",

addCropResidue: "Add Crop Residue",
cropName: "Crop Name",
selectCrop: "Select Crop",
paddy: "Paddy",
wheat: "Wheat",
rice: "Rice",
maize: "Maize",
coconut: "Coconut",
arecanut: "Arecanut",
other: "Other",

residueType: "Residue Type",
selectType: "Select Type",
straw: "Straw",
husk: "Husk",
leaf: "Leaf",
shell: "Shell",

quantityKg: "Quantity (kg)",
enterQuantity: "e.g. 50",
location: "Location",
enterLocation: "Village / Town",
uploaderName: "Uploader Name",
enterName: "Your Name",
uploaderContact: "Uploader Contact",
enterContact: "Phone / Email",

uploadPhotos: "Upload Crop Residue Photos",
preview: "Preview",

submit: "Submit",
backToDashboard: "Back to Dashboard",

uploadHistory: "Upload History",
noUploads: "No uploads yet.",
cropImage: "Crop",

crop: "Crop:",
residue: "Residue:",
quantity: "Quantity:",
uploader: "Uploader:",
contact: "Contact:",

delete: "Delete",

anonymous: "Anonymous",
notProvided: "Not Provided",
searchCropResidue: "Search Crop Residue",
selectCrop: "Select Crop",
paddy: "Paddy",
wheat: "Wheat",
rice: "Rice",
maize: "Maize",
coconut: "Coconut",
arecanut: "Arecanut",
other: "Other",

selectResidueType: "Select Residue Type",
shell: "Shell",
husk: "Husk",
leaf: "Leaf",
straw: "Straw",

locationPlaceholder: "Location (Village/Town)",
minQuantityPlaceholder: "Min Quantity (kg)",
search: "Search",

noResidues: "No crop residues available.",
cropImageAlt: "Crop",

cropLabel: "Crop:",
residueTypeLabel: "Residue Type:",
quantityLabel: "Quantity:",
locationLabel: "Location:",
uploaderLabel: "Uploader:",
contactLabel: "Contact:",
kg: "kg",

anonymous: "Anonymous",
notProvided: "Not Provided",
prebookTitle: "Pre-Book Crop Residue",

cropName: "Crop Name",
selectCrop: "Select Crop",
paddy: "Paddy",
wheat: "Wheat",
rice: "Rice",
maize: "Maize",
coconut: "Coconut",
arecanut: "Arecanut",
other: "Other",

residueType: "Residue Type",
selectType: "Select Type",
straw: "Straw",
husk: "Husk",
leaf: "Leaf",
shell: "Shell",

quantityKg: "Quantity (kg)",
enterQuantity: "e.g. 100",

location: "Location",
enterLocation: "Village / Town",

industryName: "Industry Name",
enterIndustryName: "Your Industry Name",

industryContact: "Industry Contact",
enterContact: "Phone / Email",

additionalNotes: "Additional Notes",
optionalNotes: "Optional notes",

submit: "Submit",
backToDashboard: "Back to Dashboard",

previousBookings: "Previous Pre-Bookings",
noPrebookings: "No pre-bookings yet.",

crop: "Crop:",
residue: "Residue:",
quantity: "Quantity:",
industry: "Industry:",
locationLabel: "Location:",
contact: "Contact:",
notes: "Notes:",
delete: "Delete",

anonymous: "Anonymous",
notProvided: "Not Provided",

fillRequiredFields: "❌ Please fill all required fields",
prebookSuccess: "✅ Pre-Booking submitted successfully!",

newPreBooking: "New Pre-Booking Request",
wantsPrebook: "wants to pre-book",
of: "of",
from: "from",
alertsTitle: "Alerts",
markAllRead: "Mark all as read",
noAlerts: "No alerts yet.",
paymentsTitle: "Payments",
noPayments: "No payments yet.",
crop: "Crop:",
quantity: "Quantity:",
amount: "Amount:",
status: "Status:",
date: "Date:",
markReceived: "Mark as Received",
received: "Received",
myDashboard: "My Dashboard",
logout: "Logout",










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
logout: "ಲಾಗ್ ಔಟ್",
govtSchemesTitle: "ರೈತರಿಗೆ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",

scheme1_title: "🌿 ಗೊಬರ್ಧನ್ ಯೋಜನೆ",
scheme1_desc: "ಸಸ್ಯಜ ನಿರ್ಜೀವ ಕಸವನ್ನು ಕಂಪೋಸ್ಟ್ ಮತ್ತು ಬಯೋ ಗ್ಯಾಸ್ ಆಗಿ ಪರಿವರ್ತಿಸಲು ಸಹಾಯಿಸುತ್ತದೆ.",

scheme2_title: "♻️ ಸಾವಯವ & ಬಯೋ-ವೆಸ್ಟ್ ಕಂಪೋಸ್ಟಿಂಗ್ – KVK ದಕ್ಷಿಣ ಕನ್ನಡ",
scheme2_desc: "ಬೆಳೆ ಕಸದನ್ನು ಸಾವಯವ ಗೊಬ್ಬರವಾಗಿ ಪರಿವರ್ತಿಸಲು ಸಹಕಾರ.",

scheme3_title: "♻️ ಕರ್ನಾಟಕದಲ್ಲಿ ಕಸದ ನಿರ್ವಹಣೆ",
scheme3_desc: "ಕಂಪೋಸ್ಟಿಂಗ್ ಮತ್ತು ಕಸದ ನಿರ್ವಹಣಾ ಕಾರ್ಯಕ್ರಮಗಳು.",

scheme4_title: "💧 NBEM – ನ್ಯಾಷನಲ್ ಬಯೋಎನರ್ಜಿ ಮಿಷನ್",
scheme4_desc: "ಕೃಷಿ ಅವಶೇಷಗಳಿಂದ ಬಯೋಎನರ್ಜಿ ಉತ್ಪಾದನೆಗೆ ಉತ್ತೇಜನ.",

scheme5_title: "🌱 KCDC – ಫಾರ್ಮ್-ವೆಸ್ಟ್ ಕಾಂಪೋಸ್ಟಿಂಗ್",
scheme5_desc: "ಕೃಷಿ ಕಸದಿಂದ ಕಂಪೋಸ್ಟ್ ತಯಾರಿಕೆ.",

scheme6_title: "🧪 KSPCB – ಕಸದ ನಿರ್ವಹಣಾ ಕಾರ್ಯಕ್ರಮಗಳು",
scheme6_desc: "ಕರ್ನಾಟಕದಲ್ಲಿ ಕಸದ ನಿರ್ವಹಣೆಗೆ ಬೆಂಬಲ.",

scheme7_title: "💡 MGIRED – ಬಯೋಎನರ್ಜಿ ಯೋಜನೆಗಳು",
scheme7_desc: "ಗ್ರಾಮೀಣ ಶಕ್ತಿ ವ್ಯವಸ್ಥೆಗಳಿಗೆ ಉತ್ತೇಜನ.",

scheme8_title: "🚜 ಬೆಂಗಳೂರು ಸಾವಯವ ಕೃಷಿ ಯೋಜನೆ",
scheme8_desc: "ಸಾವಯವ ಕೃಷಿ ಮತ್ತು ಕಂಪೋಸ್ಟ್ ಬಳಕೆಗೆ ಉತ್ತೇಜನ.",

scheme9_title: "🌻 ಬೆಳೆ ಅವಶೇಷ ನಿರ್ವಹಣಾ ರಾಷ್ಟ್ರೀಯ ನೀತಿ (NPMCR)",
scheme9_desc: "ಬೆಳೆ ಅವಶೇಷ ದಹನ ಕಡಿಮೆ ಮಾಡಲು ರಚಿಸಲಾದ ನೀತಿ.",





max5Images: "❌ ಗರಿಷ್ಠ 5 ಚಿತ್ರಗಳು ಮಾತ್ರ ಅನುಮತಿಸಲಾಗಿದೆ",
imageLimitMsg: "❌ ಪ್ರತಿಯೊಂದು ಚಿತ್ರವು <2MB ಆಗಿರಬೇಕು ಮತ್ತು ಚಿತ್ರ ಫೈಲ್ ಆಗಿರಬೇಕು.",
fillRequiredFields: "❌ ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ತುಂಬಿ ಮತ್ತು ಕನಿಷ್ಠ ಒಂದು ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
uploadSuccess: "✅ ಬೆಳೆ ಅವಶೇಷವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ!",

addCropResidue: "ಬೆಳೆ ಅವಶೇಷ ಸೇರಿಸಿ",
cropName: "ಬೆಳೆ ಹೆಸರು",
selectCrop: "ಬೆಳೆ ಆಯ್ಕೆ ಮಾಡಿ",
paddy: "ಅಕ್ಕಿ",
wheat: "ಗೋಧಿ",
rice: "ಅನ್ನ",
maize: "ಮೆಕ್ಕೆಜೋಳ",
coconut: "ತೆಂಗಿನಕಾಯಿ",
arecanut: "ಅಡಿಕೆ",
other: "ಇತರೆ",

residueType: "ಅವಶೇಷದ ಪ್ರಕಾರ",
selectType: "ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡಿ",
straw: "ತುಳ್ಳು",
husk: "ಹುಲ್ಲು",
leaf: "ಎಲೆ",
shell: "ಚಿಪ್ಪು",

quantityKg: "ಪ್ರಮಾಣ (ಕೆಜಿ)",
enterQuantity: "ಉದಾ: 50",
location: "ಸ್ಥಳ",
enterLocation: "ಗ್ರಾಮ / ನಗರ",
uploaderName: "ಅಪ್‌ಲೋಡ್ ಮಾಡಿದವರು",
enterName: "ನಿಮ್ಮ ಹೆಸರು",
uploaderContact: "ಸಂಪರ್ಕ",
enterContact: "ಫೋನ್ / ಇಮೇಲ್",

uploadPhotos: "ಬೆಳೆ ಅವಶೇಷದ ಚಿತ್ರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
preview: "ಮುನ್ನೋಟ",

submit: "ಸಲ್ಲಿಸು",
backToDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",

uploadHistory: "ಅಪ್‌ಲೋಡ್ ಇತಿಹಾಸ",
noUploads: "ಇನ್ನೂ ಯಾವುದೇ ಅಪ್‌ಲೋಡ್ ಇಲ್ಲ.",
cropImage: "ಬೆಳೆ",

crop: "ಬೆಳೆ:",
residue: "ಅವಶೇಷ:",
quantity: "ಪ್ರಮಾಣ:",
uploader: "ಅಪ್‌ಲೋಡ್ ಮಾಡಿದವರು:",
contact: "ಸಂಪರ್ಕ:",

delete: "ಅಳಿಸಿ",

anonymous: "ಅಜ್ಞಾತ",
notProvided: "ನೀಡಲಾಗಿಲ್ಲ",

searchCropResidue: "ಬೆಳೆ ಅವಶೇಷ ಹುಡುಕಿ",
selectCrop: "ಬೆಳೆ ಆಯ್ಕೆ ಮಾಡಿ",
paddy: "ಅಕ್ಕಿ",
wheat: "ಗೋಧಿ",
rice: "ಅನ್ನ",
maize: "ಮೆಕ್ಕೆಜೋಳ",
coconut: "ತೆಂಗಿನಕಾಯಿ",
arecanut: "ಅಡಿಕೆ",
other: "ಇತರೆ",

selectResidueType: "ಅವಶೇಷದ ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡಿ",
shell: "ಚಿಪ್ಪು",
husk: "ಹುಲ್ಲು",
leaf: "ಎಲೆ",
straw: "ತುಳ್ಳು",

locationPlaceholder: "ಸ್ಥಳ (ಗ್ರಾಮ/ಪಟ್ಟಣ)",
minQuantityPlaceholder: "ಕನಿಷ್ಠ ಪ್ರಮಾಣ (ಕೆಜಿ)",
search: "ಹುಡುಕಿ",

noResidues: "ಯಾವುದೇ ಬೆಳೆ ಅವಶೇಷಗಳು ಲಭ್ಯವಿಲ್ಲ.",
cropImageAlt: "ಬೆಳೆ",

cropLabel: "ಬೆಳೆ:",
residueTypeLabel: "ಅವಶೇಷದ ಪ್ರಕಾರ:",
quantityLabel: "ಪ್ರಮಾಣ:",
locationLabel: "ಸ್ಥಳ:",
uploaderLabel: "ಅಪ್‌ಲೋಡ್ ಮಾಡಿದವರು:",
contactLabel: "ಸಂಪರ್ಕ:",
kg: "ಕೆಜಿ",

anonymous: "ಅಜ್ಞಾತ",
notProvided: "ನೀಡಲಾಗಿಲ್ಲ",
prebookTitle: "ಬೆಳೆ ಅವಶೇಷ ಪೂರ್ವ-ಬುಕಿಂಗ್",

cropName: "ಬೆಳೆ ಹೆಸರು",
selectCrop: "ಬೆಳೆ ಆಯ್ಕೆ ಮಾಡಿ",
paddy: "ಅಕ್ಕಿ",
wheat: "ಗೋಧಿ",
rice: "ಅನ್ನ",
maize: "ಮೆಕ್ಕೆಜೋಳ",
coconut: "ತೆಂಗಿನಕಾಯಿ",
arecanut: "ಅಡಿಕೆ",
other: "ಇತರೆ",

residueType: "ಅವಶೇಷದ ಪ್ರಕಾರ",
selectType: "ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡಿ",
straw: "ತುಳ್ಳು",
husk: "ಹುಲ್ಲು",
leaf: "ಎಲೆ",
shell: "ಚಿಪ್ಪು",

quantityKg: "ಪ್ರಮಾಣ (ಕೆಜಿ)",
enterQuantity: "ಉದಾ: 100",

location: "ಸ್ಥಳ",
enterLocation: "ಗ್ರಾಮ / ಪಟ್ಟಣ",

industryName: "ಕೈಗಾರಿಕೆಯ ಹೆಸರು",
enterIndustryName: "ನಿಮ್ಮ ಕೈಗಾರಿಕೆಯ ಹೆಸರು",

industryContact: "ಕೈಗಾರಿಕೆಯ ಸಂಪರ್ಕ",
enterContact: "ಫೋನ್ / ಇಮೇಲ್",

additionalNotes: "ಹೆಚ್ಚುವರಿ ಟಿಪ್ಪಣಿಗಳು",
optionalNotes: "ಐಚ್ಛಿಕ ಟಿಪ್ಪಣಿಗಳು",

submit: "ಸಲ್ಲಿಸು",
backToDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",

previousBookings: "ಹಿಂದಿನ ಪೂರ್ವ-ಬುಕಿಂಗ್‌ಗಳು",
noPrebookings: "ಯಾವುದೇ ಪೂರ್ವ-ಬುಕಿಂಗ್‌ಗಳು ಇಲ್ಲ.",

crop: "ಬೆಳೆ:",
residue: "ಅವಶೇಷ:",
quantity: "ಪ್ರಮಾಣ:",
industry: "ಕೈಗಾರಿಕೆ:",
locationLabel: "ಸ್ಥಳ:",
contact: "ಸಂಪರ್ಕ:",
notes: "ಟಿಪ್ಪಣಿಗಳು:",
delete: "ಅಳಿಸು",

anonymous: "ಅಜ್ಞಾತ",
notProvided: "ನೀಡಲಾಗಿಲ್ಲ",

fillRequiredFields: "❌ ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ತುಂಬಿ",
prebookSuccess: "✅ ಪೂರ್ವ-ಬುಕಿಂಗ್ ಯಶಸ್ವಿಯಾಗಿದೆ!",

newPreBooking: "ಹೊಸ ಪೂರ್ವ-ಬುಕಿಂಗ್ ವಿನಂತಿ",
wantsPrebook: "ಪೂರ್ವ-ಬುಕ್ ಮಾಡಲು ಬಯಸುತ್ತಾರೆ",
of: "ಅನ್ನು",
from: "ಇಂದ",

alertsTitle: "ಎಚ್ಚರಿಕೆಗಳು",
markAllRead: "ಎಲ್ಲವನ್ನೂ ಓದಿದೆ ಎಂದು ಗುರುತಿಸಿ",
noAlerts: "ಯಾವುದೇ ಎಚ್ಚರಿಕೆಗಳು ಇಲ್ಲ.",
paymentsTitle: "ಪಾವತಿಗಳು",
noPayments: "ಇನ್ನೂ ಪಾವತಿಗಳು ಇಲ್ಲ.",
crop: "ಬೆಳೆ:",
quantity: "ಪ್ರಮಾಣ:",
amount: "ಮೊತ್ತ:",
status: "ಸ್ಥಿತಿ:",
date: "ದಿನಾಂಕ:",
markReceived: "ಸ್ವೀಕರಿಸಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ",
received: "ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
myDashboard: "ನನ್ನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
logout: "ಲಾಗ್ ಔಟ್",




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
