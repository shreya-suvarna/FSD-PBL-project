// src/pages/AddCropResidue.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddCropResidue.css";

import { useLanguage } from "../context/LanguageContext"; // added for translations

function AddCropResidue() {
  const navigate = useNavigate();
  const { t } = useLanguage(); // added for translations

  const [form, setForm] = useState({
    cropName: "",
    residueType: "",
    quantity: "",
    location: "",
    uploaderName: "",
    uploaderContact: "",
    images: [],
  });

  const [previewImages, setPreviewImages] = useState([]);
  const [history, setHistory] = useState([]);

  // Load history from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cropResidues") || "[]");
    setHistory(stored);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 5) {
      alert(t("max5Images") ?? "❌ Max 5 images allowed");
      e.target.value = "";
      setPreviewImages([]);
      return;
    }

    const validFiles = files.filter(
      (file) => file.type.startsWith("image/") && file.size <= 2 * 1024 * 1024
    );

    if (validFiles.length !== files.length) {
      alert(
        t("imageLimitMsg") ?? "❌ Each image must be <2MB and an image file."
      );
      e.target.value = "";
      setPreviewImages([]);
      return;
    }

    setForm((prev) => ({ ...prev, images: validFiles }));

    const previews = validFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.cropName ||
      !form.residueType ||
      !form.quantity ||
      !form.location ||
      form.images.length === 0
    ) {
      alert(
        t("fillRequiredFields") ??
          "❌ Please fill all required fields and upload at least 1 image."
      );
      return;
    }

    // Convert images to Base64
    const imagePromises = form.images.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        })
    );

    const imagesBase64 = await Promise.all(imagePromises);

    const residueData = {
      ...form,
      uploaderName: form.uploaderName || (t("anonymous") ?? "Anonymous"),
      uploaderContact: form.uploaderContact || (t("notProvided") ?? "Not Provided"),
      images: imagesBase64,
    };

    const existing = JSON.parse(localStorage.getItem("cropResidues") || "[]");
    existing.push(residueData);
    localStorage.setItem("cropResidues", JSON.stringify(existing));

    alert(t("uploadSuccess") ?? "✅ Crop residue uploaded successfully!");
    setForm({
      cropName: "",
      residueType: "",
      quantity: "",
      location: "",
      uploaderName: "",
      uploaderContact: "",
      images: [],
    });
    setPreviewImages([]);
    setHistory(existing);
  };

  const deleteEntry = (index) => {
    const updated = [...history];
    updated.splice(index, 1);
    localStorage.setItem("cropResidues", JSON.stringify(updated));
    setHistory(updated);
  };

  return (
    <div className="add-residue-container">
      <h1 className="add-title">{t("addCropResidue") ?? "Add Crop Residue"}</h1>

      <div className="add-residue-flex">
        {/* Left: Form */}
        <div className="residue-card form-card">
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
              placeholder={t("enterQuantity") ?? "e.g. 50"}
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

            <label>{t("uploaderName") ?? "Uploader Name"}</label>
            <input
              type="text"
              id="uploaderName"
              placeholder={t("enterName") ?? "Your Name"}
              value={form.uploaderName}
              onChange={handleChange}
            />

            <label>{t("uploaderContact") ?? "Uploader Contact"}</label>
            <input
              type="text"
              id="uploaderContact"
              placeholder={t("enterContact") ?? "Phone / Email"}
              value={form.uploaderContact}
              onChange={handleChange}
            />

            <label>{t("uploadPhotos") ?? "Upload Crop Residue Photos"}</label>
            <input type="file" id="residueImage" accept="image/*" multiple onChange={handleFileChange} />

            <div id="previewContainer" className="preview-container">
              {previewImages.map((src, i) => (
                <img key={i} src={src} alt={`${t("preview") ?? "Preview"} ${i}`} className="preview-image" />
              ))}
            </div>

            <button type="submit" className="btn-submit">
              {t("submit") ?? "Submit"}
            </button>
            <button type="button" className="btn-back" onClick={() => navigate("/farmer-dashboard")}>
              {t("backToDashboard") ?? "Back to Dashboard"}
            </button>
          </form>
        </div>

        {/* Right: History */}
        <div className="history-panel">
          <h2>{t("uploadHistory") ?? "Upload History"}</h2>
          <div id="historyContainer">
            {history.length === 0 && <p>{t("noUploads") ?? "No uploads yet."}</p>}
            {history.map((item, index) => (
              <div key={index} className="history-card">
                <div className="history-images">
                  {item.images.map((img, i) => (
                    <img key={i} src={img} alt={t("cropImage") ?? "Crop"} />
                  ))}
                </div>
                <div className="history-info">
                  <p>
                    <strong>{t("crop") ?? "Crop:"}</strong> {item.cropName}
                  </p>
                  <p>
                    <strong>{t("residue") ?? "Residue:"}</strong> {item.residueType}
                  </p>
                  <p>
                    <strong>{t("quantity") ?? "Quantity:"}</strong> {item.quantity} kg
                  </p>
                  <p>
                    <strong>{t("location") ?? "Location:"}</strong> {item.location}
                  </p>
                  <p>
                    <strong>{t("uploader") ?? "Uploader:"}</strong> {item.uploaderName}
                  </p>
                  <p>
                    <strong>{t("contact") ?? "Contact:"}</strong> {item.uploaderContact}
                  </p>
                  <button className="btn-delete" onClick={() => deleteEntry(index)}>
                    {t("delete") ?? "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCropResidue;
