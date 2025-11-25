// frontend/src/pages/IndustryProfile.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";
import defaultImg from "../assets/profile.jpg";

function IndustryProfile() {
  const navigate = useNavigate();

  const [industry, setIndustry] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    profileImage: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("industryProfile");
    if (stored) setIndustry(JSON.parse(stored));
  }, []);

  const handleChange = (e) => setIndustry({ ...industry, [e.target.name]: e.target.value });

  const saveChanges = () => {
    localStorage.setItem("industryProfile", JSON.stringify(industry));
    setIsEditing(false);
    alert("Profile updated!");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const updated = { ...industry, profileImage: reader.result };
      setIndustry(updated);
      localStorage.setItem("industryProfile", JSON.stringify(updated));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <h2>🏭 My Company Profile</h2>

      <div className="profile-img-wrapper">
        <img src={industry.profileImage || defaultImg} alt="Profile" />
        {isEditing && (
          <label className="upload-btn">
            Change photo
            <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
          </label>
        )}
      </div>

      <label>Company Name</label>
      <input type="text" value={industry.companyName} disabled />

      <label>Email</label>
      <input type="text" value={industry.email} disabled />

      <label>Phone</label>
      <input type="text" name="phone" value={industry.phone} onChange={handleChange} disabled={!isEditing} />

      <label>Company Address</label>
      <input type="text" name="address" value={industry.address} onChange={handleChange} disabled={!isEditing} />

      {!isEditing ? (
        <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
      ) : (
        <button className="save-btn" onClick={saveChanges}>Save</button>
      )}
    </div>
  );
}

export default IndustryProfile;
