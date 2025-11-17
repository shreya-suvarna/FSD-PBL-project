// src/pages/PreBook.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PreBook.css";

import { useLanguage } from "../context/LanguageContext"; // ✅ added

function PreBook() {
  const navigate = useNavigate();
  const { t } = useLanguage(); // ✅ added

  const [form, setForm] = useState({
    cropName: "",
    residueType: "",
    quantity: "",
    location: "",
    industryName: "",
    industryContact: "",
    notes: "",
  });

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("preBookings") || "[]");
    setHistory(stored);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.cropName || !form.residueType || !form.quantity || !form.location || !form.industryName) {
      alert(t("fillRequiredFields") ?? "❌ Please fill all required fields");
      return;
    }

    const bookingData = {
      ...form,
      industryContact: form.industryContact || (t("notProvided") ?? "Not Provided"),
      timestamp: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("preBookings") || "[]");
    existing.push(bookingData);
    localStorage.setItem("preBookings", JSON.stringify(existing));
    setHistory(existing);

    const alerts = JSON.parse(localStorage.getItem("alerts") || "[]");

    alerts.push({
      title: t("newPreBooking") ?? "New Pre-Booking Request",
      message:
        `${form.industryName} ` +
        (t("wantsPrebook") ?? "wants to pre-book") +
        ` ${form.quantity} kg ` +
        `${t("of") ?? "of"} ${form.cropName} (${form.residueType}) ` +
        `${t("from") ?? "from"} ${form.location}.`,
      read: false,
      date: new Date().toLocaleString(),
    });

    localStorage.setItem("alerts", JSON.stringify(alerts));

    alert(t("prebookSuccess") ?? "✅ Pre-Booking submitted successfully!");

    setForm({
      cropName: "",
      residueType: "",
      quantity: "",
      location: "",
      industryName: "",
      industryContact: "",
      notes: "",
    });
  };

  const deleteEntry = (index) => {
    const updated = [...history];
    updated.splice(index, 1);
    localStorage.setItem("preBookings", JSON.stringify(updated));
    setHistory(updated);
  };

  return (
    <div className="prebook-container">
      <h1 className="prebook-title">{t("prebookTitle") ?? "Pre-Book Crop Residue"}</h1>

      <div className="prebook-flex">
        {/* Form */}
        <div className="prebook-card">
          <form onSubmit={handleSubmit}>
            <label>{t("cropName") ?? "Crop Name"}</label>
            <select id="cropName" value={form.cropName} onChange={handleChange} required>
              <option value="">{t("selectCrop") ?? "Select Crop"}</option>
              <option value="Paddy">{t("paddy") ?? "Paddy"}</option>
              <option value="Wheat">{t("wheat") ?? "Wheat"}</option>
              <option value="Rice">{t("rice") ?? "Rice"}</option>
              <option value="Maize">{t("maize") ?? "Maize"}</option>
              <option value="Coconut">{t("coconut") ?? "Coconut"}</option>
              <option value="Arecanut">{t("arecanut") ?? "Arecanut"}</option>
              <option value="Other">{t("other") ?? "Other"}</option>
            </select>

            <label>{t("residueType") ?? "Residue Type"}</label>
            <select id="residueType" value={form.residueType} onChange={handleChange} required>
              <option value="">{t("selectType") ?? "Select Type"}</option>
              <option value="Straw">{t("straw") ?? "Straw"}</option>
              <option value="Husk">{t("husk") ?? "Husk"}</option>
              <option value="Leaf">{t("leaf") ?? "Leaf"}</option>
              <option value="Shell">{t("shell") ?? "Shell"}</option>
              <option value="Other">{t("other") ?? "Other"}</option>
            </select>

            <label>{t("quantityKg") ?? "Quantity (kg)"}</label>
            <input
              type="number"
              id="quantity"
              placeholder={t("enterQuantity") ?? "e.g. 100"}
              value={form.quantity}
              onChange={handleChange}
              required
            />

            <label>{t("location") ?? "Location"}</label>
            <input
              type="text"
              id="location"
              placeholder={t("enterLocation") ?? "Village / Town"}
              value={form.location}
              onChange={handleChange}
              required
            />

            <label>{t("industryName") ?? "Industry Name"}</label>
            <input
              type="text"
              id="industryName"
              placeholder={t("enterIndustryName") ?? "Your Industry Name"}
              value={form.industryName}
              onChange={handleChange}
              required
            />

            <label>{t("industryContact") ?? "Industry Contact"}</label>
            <input
              type="text"
              id="industryContact"
              placeholder={t("enterContact") ?? "Phone / Email"}
              value={form.industryContact}
              onChange={handleChange}
            />

            <label>{t("additionalNotes") ?? "Additional Notes"}</label>
            <textarea
              id="notes"
              placeholder={t("optionalNotes") ?? "Optional notes"}
              value={form.notes}
              onChange={handleChange}
              rows="3"
            ></textarea>

            <button type="submit" className="btn-submit">{t("submit") ?? "Submit"}</button>
            <button
              type="button"
              className="btn-back"
              onClick={() => navigate("/industry-dashboard")}
            >
              {t("backToDashboard") ?? "Back to Dashboard"}
            </button>
          </form>
        </div>

        {/* History */}
        <div className="history-panel">
          <h2>{t("previousBookings") ?? "Previous Pre-Bookings"}</h2>

          {history.length === 0 && <p>{t("noPrebookings") ?? "No pre-bookings yet."}</p>}

          {history.map((item, index) => (
            <div key={index} className="history-card">
              <p><strong>{t("crop") ?? "Crop:"}</strong> {item.cropName}</p>
              <p><strong>{t("residue") ?? "Residue:"}</strong> {item.residueType}</p>
              <p><strong>{t("quantity") ?? "Quantity:"}</strong> {item.quantity} kg</p>
              <p><strong>{t("location") ?? "Location:"}</strong> {item.location}</p>
              <p><strong>{t("industry") ?? "Industry:"}</strong> {item.industryName}</p>
              <p><strong>{t("contact") ?? "Contact:"}</strong> {item.industryContact}</p>
              {item.notes && (
                <p><strong>{t("notes") ?? "Notes:"}</strong> {item.notes}</p>
              )}

              <button className="btn-delete" onClick={() => deleteEntry(index)}>
                {t("delete") ?? "Delete"}
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default PreBook;
