// src/pages/SearchResidue.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "../styles/SearchResidue.css";

function SearchResidue() {
  const [residues, setResidues] = useState([]);
  const [filteredResidues, setFilteredResidues] = useState([]);
  const [cropValue, setCropValue] = useState("");
  const [residueValue, setResidueValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [minQuantity, setMinQuantity] = useState("");

  // Load all residues on mount
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
      <h1>Search Crop Residue</h1>

      {/* Search Form */}
      <div className="search-form">
        <select value={cropValue} onChange={(e) => setCropValue(e.target.value)}>
          <option value="">Select Crop</option>
          <option value="Paddy">Paddy</option>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
          <option value="Maize">Maize</option>
          <option value="Coconut">Coconut</option>
          <option value="Arecanut">Arecanut</option>
          <option value="Other">Other</option>
        </select>

        <select value={residueValue} onChange={(e) => setResidueValue(e.target.value)}>
          <option value="">Select Residue Type</option>
          <option value="Shell">Shell</option>
          <option value="Husk">Husk</option>
          <option value="Leaf">Leaf</option>
          <option value="Straw">Straw</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          placeholder="Location (Village/Town)"
          value={locationValue}
          onChange={(e) => setLocationValue(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min Quantity (kg)"
          value={minQuantity}
          onChange={(e) => setMinQuantity(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Results */}
      <div className="results-grid">
        {filteredResidues.length === 0 ? (
          <p className="no-results">No crop residues available.</p>
        ) : (
          filteredResidues.map((item, index) => (
            <div key={index} className="residue-card">
              <div className="residue-images">
                {item.images.map((img, i) => (
                  <img key={i} src={img} alt="Crop" />
                ))}
              </div>
              <div className="residue-info">
                <p><strong>Crop:</strong> {item.cropName}</p>
                <p><strong>Residue Type:</strong> {item.residueType}</p>
                <p><strong>Quantity:</strong> {item.quantity} kg</p>
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>Uploader:</strong> {item.uploaderName || "Anonymous"}</p>
                <p><strong>Contact:</strong> {item.uploaderContact || "Not Provided"}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchResidue;
