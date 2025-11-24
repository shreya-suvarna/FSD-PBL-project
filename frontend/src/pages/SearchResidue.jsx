// frontend/src/pages/SearchResidue.jsx



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/SearchResidue.css";

export default function SearchResidue() {
    const navigate = useNavigate();
  
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
      <h1>Search Crop Residues</h1>

      <div className="filters">
        <select id="cropName" onChange={handleChange}>
          <option value="">Crop</option>
          <option value="Paddy">Paddy</option>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
          <option value="Maize">Maize</option>
        </select>

        <select id="residueType" onChange={handleChange}>
          <option value="">Residue</option>
          <option value="Straw">Straw</option>
          <option value="Husk">Husk</option>
          <option value="Leaf">Leaf</option>
        </select>

        <input id="location" type="text" placeholder="Location" onChange={handleChange} />

        <input
          id="minQuantity"
          type="number"
          placeholder="Min Qty"
          onChange={handleChange}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="residue-list">
        {filtered.length === 0 ? (
          <p>No residues found.</p>
        ) : (
          filtered.map((r) => (
            <div className="residue-card" key={r._id}>
              <h3>{r.cropName}</h3>
              <p>Type: {r.residueType}</p>
              <p>Quantity: {r.quantity} kg</p>
              <p>Location: {r.location}</p>
              <p>Uploader: {r.uploaderName}</p>

              <div className="image-row">
                {r.images.map((img, idx) => (
                  <img key={idx} src={img} alt="residue" />
                ))}
              </div>

               <div style={{ marginTop: 8 }}>
                 {/* <Link to="/book-residue" className="login-btn">
                            {/* {t("login") ?? "Login"}   </Link>
                <button onClick={() => navigate(`/book-residue/${r._id}`)}>Book Now</button> */}

                <Link to={`/book-residue/${r._id}`} className="login-btn">
                  Book Now
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
