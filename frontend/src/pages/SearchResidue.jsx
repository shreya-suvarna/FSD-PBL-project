// // // // // src/pages/SearchResidue.jsx
// // // // import React, { useState, useEffect } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import "../styles/SearchResidue.css";

// // // // import { useLanguage } from "../context/LanguageContext"; // ✅ added

// // // // function SearchResidue() {
// // // //   const { t } = useLanguage(); // ✅ added

// // // //   const [residues, setResidues] = useState([]);
// // // //   const [filteredResidues, setFilteredResidues] = useState([]);
// // // //   const [cropValue, setCropValue] = useState("");
// // // //   const [residueValue, setResidueValue] = useState("");
// // // //   const [locationValue, setLocationValue] = useState("");
// // // //   const [minQuantity, setMinQuantity] = useState("");

// // // //   useEffect(() => {
// // // //     const data = JSON.parse(localStorage.getItem("cropResidues") || "[]");
// // // //     setResidues(data);
// // // //     setFilteredResidues(data);
// // // //   }, []);

// // // //   const handleSearch = () => {
// // // //     const filtered = residues.filter((item) => {
// // // //       const cropMatch = cropValue ? item.cropName === cropValue : true;
// // // //       const residueMatch = residueValue ? item.residueType === residueValue : true;
// // // //       const locationMatch = locationValue
// // // //         ? item.location.toLowerCase().includes(locationValue.toLowerCase())
// // // //         : true;
// // // //       const quantityMatch = minQuantity
// // // //         ? parseFloat(item.quantity) >= parseFloat(minQuantity)
// // // //         : true;

// // // //       return cropMatch && residueMatch && locationMatch && quantityMatch;
// // // //     });

// // // //     setFilteredResidues(filtered);
// // // //   };

// // // //   return (
// // // //     <div className="search-container">
// // // //       <h1>{t("searchCropResidue") ?? "Search Crop Residue"}</h1>

// // // //       {/* Search Form */}
// // // //       <div className="search-form">
// // // //         <select value={cropValue} onChange={(e) => setCropValue(e.target.value)}>
// // // //           <option value="">{t("selectCrop") ?? "Select Crop"}</option>
// // // //           <option value="Paddy">{t("paddy") ?? "Paddy"}</option>
// // // //           <option value="Wheat">{t("wheat") ?? "Wheat"}</option>
// // // //           <option value="Rice">{t("rice") ?? "Rice"}</option>
// // // //           <option value="Maize">{t("maize") ?? "Maize"}</option>
// // // //           <option value="Coconut">{t("coconut") ?? "Coconut"}</option>
// // // //           <option value="Arecanut">{t("arecanut") ?? "Arecanut"}</option>
// // // //           <option value="Other">{t("other") ?? "Other"}</option>
// // // //         </select>

// // // //         <select value={residueValue} onChange={(e) => setResidueValue(e.target.value)}>
// // // //           <option value="">{t("selectResidueType") ?? "Select Residue Type"}</option>
// // // //           <option value="Shell">{t("shell") ?? "Shell"}</option>
// // // //           <option value="Husk">{t("husk") ?? "Husk"}</option>
// // // //           <option value="Leaf">{t("leaf") ?? "Leaf"}</option>
// // // //           <option value="Straw">{t("straw") ?? "Straw"}</option>
// // // //           <option value="Other">{t("other") ?? "Other"}</option>
// // // //         </select>

// // // //         <input
// // // //           type="text"
// // // //           placeholder={t("locationPlaceholder") ?? "Location (Village/Town)"}
// // // //           value={locationValue}
// // // //           onChange={(e) => setLocationValue(e.target.value)}
// // // //         />

// // // //         <input
// // // //           type="number"
// // // //           placeholder={t("minQuantityPlaceholder") ?? "Min Quantity (kg)"}
// // // //           value={minQuantity}
// // // //           onChange={(e) => setMinQuantity(e.target.value)}
// // // //         />

// // // //         <button onClick={handleSearch}>{t("search") ?? "Search"}</button>
// // // //       </div>

// // // //       {/* Results */}
// // // //       <div className="results-grid">
// // // //         {filteredResidues.length === 0 ? (
// // // //           <p className="no-results">
// // // //             {t("noResidues") ?? "No crop residues available."}
// // // //           </p>
// // // //         ) : (
// // // //           filteredResidues.map((item, index) => (
// // // //             <div key={index} className="residue-card">
// // // //               <div className="residue-images">
// // // //                 {item.images.map((img, i) => (
// // // //                   <img key={i} src={img} alt={t("cropImageAlt") ?? "Crop"} />
// // // //                 ))}
// // // //               </div>

// // // //               <div className="residue-info">
// // // //                 <p><strong>{t("cropLabel") ?? "Crop:"}</strong> {item.cropName}</p>
// // // //                 <p><strong>{t("residueTypeLabel") ?? "Residue Type:"}</strong> {item.residueType}</p>
// // // //                 <p><strong>{t("quantityLabel") ?? "Quantity:"}</strong> {item.quantity} {t("kg") ?? "kg"}</p>
// // // //                 <p><strong>{t("locationLabel") ?? "Location:"}</strong> {item.location}</p>
// // // //                 <p><strong>{t("uploaderLabel") ?? "Uploader:"}</strong> {item.uploaderName || (t("anonymous") ?? "Anonymous")}</p>
// // // //                 <p><strong>{t("contactLabel") ?? "Contact:"}</strong> {item.uploaderContact || (t("notProvided") ?? "Not Provided")}</p>
// // // //               </div>
// // // //             </div>
// // // //           ))
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default SearchResidue;


// // // import React, { useState, useEffect } from "react";

// // // export default function SearchResidue() {
// // //   const [residues, setResidues] = useState([]);
// // //   const [filteredResidues, setFilteredResidues] = useState([]);

// // //   const [cropName, setCropName] = useState("");
// // //   const [residueType, setResidueType] = useState("");
// // //   const [location, setLocation] = useState("");
// // //   const [minQuantity, setMinQuantity] = useState("");

// // //   // Fetch all residues
// // //   useEffect(() => {
// // //     fetch("http://localhost:5000/api/residue/all")
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         setResidues(data);
// // //         setFilteredResidues(data);
// // //       });
// // //   }, []);

// // //   const handleSearch = () => {
// // //     const url = new URL("http://localhost:5000/api/residue/search");

// // //     if (cropName) url.searchParams.append("cropName", cropName);
// // //     if (residueType) url.searchParams.append("residueType", residueType);
// // //     if (location) url.searchParams.append("location", location);
// // //     if (minQuantity) url.searchParams.append("minQuantity", minQuantity);

// // //     fetch(url)
// // //       .then((res) => res.json())
// // //       .then((data) => setFilteredResidues(data));
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Search Crop Residues</h2>

// // //       <div className="filters">
// // //         <input
// // //           type="text"
// // //           placeholder="Crop Name"
// // //           value={cropName}
// // //           onChange={(e) => setCropName(e.target.value)}
// // //         />

// // //         <input
// // //           type="text"
// // //           placeholder="Residue Type"
// // //           value={residueType}
// // //           onChange={(e) => setResidueType(e.target.value)}
// // //         />

// // //         <input
// // //           type="text"
// // //           placeholder="Location"
// // //           value={location}
// // //           onChange={(e) => setLocation(e.target.value)}
// // //         />

// // //         <input
// // //           type="number"
// // //           placeholder="Minimum Quantity"
// // //           value={minQuantity}
// // //           onChange={(e) => setMinQuantity(e.target.value)}
// // //         />

// // //         <button onClick={handleSearch}>Search</button>
// // //       </div>

// // //       <div className="residues-list">
// // //         {filteredResidues.map((r) => (
// // //           <div key={r._id} className="residue-card">
// // //             <h3>{r.cropName}</h3>
// // //             <p>Residue Type: {r.residueType}</p>
// // //             <p>Quantity: {r.quantity} kg</p>
// // //             <p>Location: {r.location}</p>
// // //             <p>Uploaded By: {r.uploaderName}</p>
// // //             <p>Contact: {r.uploaderContact}</p>

// // //             <div className="images-row">
// // //               {r.images.map((img, index) => (
// // //                 <img key={index} src={img} alt="residue" width="120" />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useEffect } from "react";

// // export default function SearchResidue() {
// //   const [residues, setResidues] = useState([]);
// //   const [filteredResidues, setFilteredResidues] = useState([]);

// //   const [cropName, setCropName] = useState("");
// //   const [residueType, setResidueType] = useState("");
// //   const [location, setLocation] = useState("");
// //   const [minQuantity, setMinQuantity] = useState("");

// //   // Fetch all residues
// //   useEffect(() => {
// //     fetch("http://localhost:5000/api/residue/all")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setResidues(data);
// //         setFilteredResidues(data);
// //       });
// //   }, []);

// //   const handleSearch = () => {
// //     const url = new URL("http://localhost:5000/api/residue/search");

// //     if (cropName) url.searchParams.append("cropName", cropName);
// //     if (residueType) url.searchParams.append("residueType", residueType);
// //     if (location) url.searchParams.append("location", location);
// //     if (minQuantity) url.searchParams.append("minQuantity", minQuantity);

// //     alert(
// //       "search"
// //     );

// //     fetch(url)
// //       .then((res) => res.json())
// //       .then((data) => setFilteredResidues(data));
// //   };

// //   return (
// //     <div>
// //       <h2>Search Crop Residues</h2>

// //       <div className="filters">
// //         <input
// //           type="text"
// //           placeholder="Crop Name"
// //           value={cropName}
// //           onChange={(e) => setCropName(e.target.value)}
// //         />

// //         <input
// //           type="text"
// //           placeholder="Residue Type"
// //           value={residueType}
// //           onChange={(e) => setResidueType(e.target.value)}
// //         />

// //         <input
// //           type="text"
// //           placeholder="Location"
// //           value={location}
// //           onChange={(e) => setLocation(e.target.value)}
// //         />

// //         <input
// //           type="number"
// //           placeholder="Minimum Quantity"
// //           value={minQuantity}
// //           onChange={(e) => setMinQuantity(e.target.value)}
// //         />

// //         <button onClick={handleSearch}>Search</button>
// //       </div>

// //       <div className="residues-list">
// //         {filteredResidues.map((r) => (
// //           <div key={r._id} className="residue-card">
// //             <h3>{r.cropName}</h3>
// //             <p>Residue Type: {r.residueType}</p>
// //             <p>Quantity: {r.quantity} kg</p>
// //             <p>Location: {r.location}</p>
// //             <p>Uploaded By: {r.uploaderName}</p>
// //             <p>Contact: {r.uploaderContact}</p>

// //             <div className="images-row">
// //               {r.images.map((img, index) => (
// //                 <img key={index} src={img} alt="residue" width="120" />
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from "react";

// export default function SearchResidue() {
//   const [residues, setResidues] = useState([]);
//   const [filteredResidues, setFilteredResidues] = useState([]);

//   const [cropName, setCropName] = useState("");
//   // the residue tType, setResidueType] = useState("");
//   const [residueType, setResidueType] = useState("");

//   const [location, setLocation] = useState("");
//   const [minQuantity, setMinQuantity] = useState("");

//   // Fetch all residues from backend
//   useEffect(() => {
//     fetch("http://localhost:5000/api/residue/all")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("All residues:", data);   // ← Debug
//         setResidues(data);
//         setFilteredResidues(data);
//       })
//       .catch((err) => console.log("Fetch error:", err));
//   }, []);

//   const handleSearch = () => {
//     const url = new URL("http://localhost:5000/api/residue/search");

//     if (cropName) url.searchParams.append("cropName", cropName);
//     if (residueType) url.searchParams.append("residueType", residueType);
//     if (location) url.searchParams.append("location", location);
//     if (minQuantity) url.searchParams.append("minQuantity", minQuantity);

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Search results:", data);
//         setFilteredResidues(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Search Crop Residues</h2>

//       {/* Filters */}
//       <div className="filters" style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Crop Name"
//           value={cropName}
//           onChange={(e) => setCropName(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Residue Type"
//           value={residueType}
//           onChange={(e) => setResidueType(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />

//         <input
//           type="number"
//           placeholder="Minimum Quantity"
//           value={minQuantity}
//           onChange={(e) => setMinQuantity(e.target.value)}
//         />

//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Results */}
//       <div className="residues-list">
//         {filteredResidues.length === 0 ? (
//           <p>No residues found.</p>
//         ) : (
//           filteredResidues.map((r) => (
//             <div
//               key={r._id}
//               className="residue-card"
//               style={{
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 padding: "15px",
//                 marginBottom: "15px",
//               }}
//             >
//               <h3>{r.cropName}</h3>
//               <p>Residue Type: {r.residueType}</p>
//               <p>Quantity: {r.quantity} kg</p>
//               <p>Location: {r.location}</p>
//               <p>Uploaded By: {r.uploaderName || "Anonymous"}</p>
//               <p>Contact: {r.uploaderContact || "Not Provided"}</p>

//               {/* Images */}
//               <div className="images-row" style={{ marginTop: "10px" }}>
//                 {(r.images && r.images.length > 0) ? (
//                   r.images.map((img, index) => (
//                     <img
//                       key={index}
//                       src={img}
//                       alt="residue"
//                       width="120"
//                       style={{ marginRight: "10px", borderRadius: "6px" }}
//                     />
//                   ))
//                 ) : (
//                   <p style={{ color: "gray" }}>No images available</p>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import "../styles/SearchResidue.css";

export default function SearchResidue() {
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
            </div>
          ))
        )}
      </div>
    </div>
  );
}
