// src/pages/SearchResidue.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchResidue.css";

import { useLanguage } from "../context/LanguageContext"; // ✅ added

function SearchResidue() {
  const { t } = useLanguage(); // ✅ added

  const [residues, setResidues] = useState([]);
  const [filteredResidues, setFilteredResidues] = useState([]);
  const [cropValue, setCropValue] = useState("");
  const [residueValue, setResidueValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [minQuantity, setMinQuantity] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cropResidues") || "[]");
    setResidues(data);
    setFilteredResidues(data);
  }, []);

  const handleSearch = () => {
    const filtered = residues.filter((item) => {
      const cropMatch = cropValue ? item.cropName === cropValue : true;
      const residueMatch = residueValue ? item.residueType === residueValue : true;
      const locationMatch = locationValue
        ? item.location.toLowerCase().includes(locationValue.toLowerCase())
        : true;
      const quantityMatch = minQuantity
        ? parseFloat(item.quantity) >= parseFloat(minQuantity)
        : true;

      return cropMatch && residueMatch && locationMatch && quantityMatch;
    });

    setFilteredResidues(filtered);
  };

  return (
    <div className="search-container">
      <h1>{t("searchCropResidue") ?? "Search Crop Residue"}</h1>

      {/* Search Form */}
      <div className="search-form">
        <select value={cropValue} onChange={(e) => setCropValue(e.target.value)}>
          <option value="">{t("selectCrop") ?? "Select Crop"}</option>
          <option value="Paddy">{t("paddy") ?? "Paddy"}</option>
          <option value="Wheat">{t("wheat") ?? "Wheat"}</option>
          <option value="Rice">{t("rice") ?? "Rice"}</option>
          <option value="Maize">{t("maize") ?? "Maize"}</option>
          <option value="Coconut">{t("coconut") ?? "Coconut"}</option>
          <option value="Arecanut">{t("arecanut") ?? "Arecanut"}</option>
          <option value="Other">{t("other") ?? "Other"}</option>
        </select>

        <select value={residueValue} onChange={(e) => setResidueValue(e.target.value)}>
          <option value="">{t("selectResidueType") ?? "Select Residue Type"}</option>
          <option value="Shell">{t("shell") ?? "Shell"}</option>
          <option value="Husk">{t("husk") ?? "Husk"}</option>
          <option value="Leaf">{t("leaf") ?? "Leaf"}</option>
          <option value="Straw">{t("straw") ?? "Straw"}</option>
          <option value="Other">{t("other") ?? "Other"}</option>
        </select>

        <input
          type="text"
          placeholder={t("locationPlaceholder") ?? "Location (Village/Town)"}
          value={locationValue}
          onChange={(e) => setLocationValue(e.target.value)}
        />

        <input
          type="number"
          placeholder={t("minQuantityPlaceholder") ?? "Min Quantity (kg)"}
          value={minQuantity}
          onChange={(e) => setMinQuantity(e.target.value)}
        />

        <button onClick={handleSearch}>{t("search") ?? "Search"}</button>
      </div>

      {/* Results */}
      <div className="results-grid">
        {filteredResidues.length === 0 ? (
          <p className="no-results">
            {t("noResidues") ?? "No crop residues available."}
          </p>
        ) : (
          filteredResidues.map((item, index) => (
            <div key={index} className="residue-card">
              <div className="residue-images">
                {item.images.map((img, i) => (
                  <img key={i} src={img} alt={t("cropImageAlt") ?? "Crop"} />
                ))}
              </div>

              <div className="residue-info">
                <p><strong>{t("cropLabel") ?? "Crop:"}</strong> {item.cropName}</p>
                <p><strong>{t("residueTypeLabel") ?? "Residue Type:"}</strong> {item.residueType}</p>
                <p><strong>{t("quantityLabel") ?? "Quantity:"}</strong> {item.quantity} {t("kg") ?? "kg"}</p>
                <p><strong>{t("locationLabel") ?? "Location:"}</strong> {item.location}</p>
                <p><strong>{t("uploaderLabel") ?? "Uploader:"}</strong> {item.uploaderName || (t("anonymous") ?? "Anonymous")}</p>
                <p><strong>{t("contactLabel") ?? "Contact:"}</strong> {item.uploaderContact || (t("notProvided") ?? "Not Provided")}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchResidue;
