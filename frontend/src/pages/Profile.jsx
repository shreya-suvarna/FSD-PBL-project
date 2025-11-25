import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";
import defaultImg from "../assets/profile.jpg";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    profileImage: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
    alert("Profile updated!");
  };

  // 📌 Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setUser({ ...user, profileImage: reader.result });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, profileImage: reader.result })
      );
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-container">

      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <h2>👤 My Profile</h2>

      {/* Profile Image Section */}
      <div className="profile-img-wrapper">
  <img
    src={user.profileImage || defaultImg}
    alt="Profile"
  />
  {isEditing && (
    <label className="upload-btn">
      Change photo
      <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
    </label>
  )}
</div>


      <label>Name</label>
      <input type="text" value={user.name} disabled />

      <label>Email / Phone</label>
      <input type="text" value={user.email} disabled />

      <label>Phone</label>
      <input
        type="text"
        name="phone"
        value={user.phone}
        onChange={handleChange}
        disabled={!isEditing}
      />

      <label>Location</label>
      <input
        type="text"
        name="location"
        value={user.location}
        onChange={handleChange}
        disabled={!isEditing}
      />

      {!isEditing ? (
        <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
      ) : (
        <button className="save-btn" onClick={saveChanges}>Save</button>
      )}
    </div>
  );
}

export default Profile;
