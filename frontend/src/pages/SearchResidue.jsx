// frontend/src/pages/SearchResidue.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/SearchResidue.css";

import { useLanguage } from "../context/LanguageContext"; // added for translations

export default function SearchResidue() {
  const navigate = useNavigate();
  const { t } = useLanguage(); // added for translations

  const [residues, setResidues] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [filters, setFilters] = useState({
    cropName: "",
    residueType: "",
    location: "",
    minQuantity: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/residue/all")
      .then((res) => res.json())
      .then((data) => {
        setResidues(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = () => {
    const url = new URL("http://localhost:5000/api/residue/search");

    Object.keys(filters).forEach((key) => {
      if (filters[key]) url.searchParams.append(key, filters[key]);
    });

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFiltered(data));
  };

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.id]: e.target.value });
  };

  return (
    <div className="search-container">
      <h1>{t("searchCropResidues") ?? "Search Crop Residues"}</h1>

      <div className="filters">
        <select id="cropName" onChange={handleChange}>
          <option value="">{t("cropOption") ?? "Crop"}</option>
          <option value="Paddy">{t("paddy") ?? "Paddy"}</option>
          <option value="Wheat">{t("wheat") ?? "Wheat"}</option>
          <option value="Rice">{t("rice") ?? "Rice"}</option>
          <option value="Maize">{t("maize") ?? "Maize"}</option>
        </select>

        <select id="residueType" onChange={handleChange}>
          <option value="">{t("residueOption") ?? "Residue"}</option>
          <option value="Straw">{t("straw") ?? "Straw"}</option>
          <option value="Husk">{t("husk") ?? "Husk"}</option>
          <option value="Leaf">{t("leaf") ?? "Leaf"}</option>
        </select>

        <input
          id="location"
          type="text"
          placeholder={t("locationPlaceholderShort") ?? "Location"}
          onChange={handleChange}
        />

        <input
          id="minQuantity"
          type="number"
          placeholder={t("minQtyPlaceholder") ?? "Min Qty"}
          onChange={handleChange}
        />

        <button onClick={handleSearch}>{t("search") ?? "Search"}</button>
      </div>

      <div className="residue-list">
        {filtered.length === 0 ? (
          <p>{t("noResiduesFound") ?? "No residues found."}</p>
        ) : (
          filtered.map((r) => (
            <div className="residue-card" key={r._id}>
              <h3>{r.cropName}</h3>
              <p>
                {t("typeLabel") ?? "Type"}: {r.residueType}
              </p>
              <p>
                {t("quantityLabel") ?? "Quantity"}: {r.quantity} {t("kg") ?? "kg"}
              </p>
              <p>
                {t("locationLabel") ?? "Location"}: {r.location}
              </p>
              <p>
                {t("uploaderLabel") ?? "Uploader"}: {r.uploaderName}
              </p>

              <div className="image-row">
                {r.images.map((img, idx) => (
                  <img key={idx} src={img} alt={t("residueImageAlt") ?? "residue"} />
                ))}
              </div>

              <div style={{ marginTop: 8 }}>
                <Link to={`/book-residue/${r._id}`} className="login-btn">
                  {t("bookNow") ?? "Book Now"}
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
