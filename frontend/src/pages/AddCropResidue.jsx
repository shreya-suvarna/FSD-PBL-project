import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddCropResidue.css";

function AddCropResidue() {
  const navigate = useNavigate();

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
      alert("❌ Max 5 images allowed");
      e.target.value = "";
      setPreviewImages([]);
      return;
    }

    const validFiles = files.filter(
      (file) => file.type.startsWith("image/") && file.size <= 2 * 1024 * 1024
    );

    if (validFiles.length !== files.length) {
      alert("❌ Each image must be <2MB and an image file.");
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

    if (!form.cropName || !form.residueType || !form.quantity || !form.location || form.images.length === 0) {
      alert("❌ Please fill all required fields and upload at least 1 image.");
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
      uploaderName: form.uploaderName || "Anonymous",
      uploaderContact: form.uploaderContact || "Not Provided",
      images: imagesBase64,
    };

    const existing = JSON.parse(localStorage.getItem("cropResidues") || "[]");
    existing.push(residueData);
    localStorage.setItem("cropResidues", JSON.stringify(existing));

    alert("✅ Crop residue uploaded successfully!");
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
      <h1 className="add-title">Add Crop Residue</h1>

      <div className="add-residue-flex">
        {/* Left: Form */}
        <div className="residue-card form-card">
          <form onSubmit={handleSubmit}>
            <label>Crop Name</label>
            <select id="cropName" value={form.cropName} onChange={handleChange} required>
              <option value="">Select Crop</option>
              <option value="Paddy">Paddy</option>
              <option value="Wheat">Wheat</option>
              <option value="Rice">Rice</option>
              <option value="Maize">Maize</option>
              <option value="Coconut">Coconut</option>
              <option value="Arecanut">Arecanut</option>
              <option value="Other">Other</option>
            </select>

            <label>Residue Type</label>
            <select id="residueType" value={form.residueType} onChange={handleChange} required>
              <option value="">Select Type</option>
              <option value="Straw">Straw</option>
              <option value="Husk">Husk</option>
              <option value="Leaf">Leaf</option>
              <option value="Shell">Shell</option>
              <option value="Other">Other</option>
            </select>

            <label>Quantity (kg)</label>
            <input
              type="number"
              id="quantity"
              placeholder="e.g. 50"
              value={form.quantity}
              onChange={handleChange}
              required
            />

            <label>Location</label>
            <input
              type="text"
              id="location"
              placeholder="Village / Town"
              value={form.location}
              onChange={handleChange}
              required
            />

            <label>Uploader Name</label>
            <input
              type="text"
              id="uploaderName"
              placeholder="Your Name"
              value={form.uploaderName}
              onChange={handleChange}
            />

            <label>Uploader Contact</label>
            <input
              type="text"
              id="uploaderContact"
              placeholder="Phone / Email"
              value={form.uploaderContact}
              onChange={handleChange}
            />

            <label>Upload Crop Residue Photos</label>
            <input type="file" id="residueImage" accept="image/*" multiple onChange={handleFileChange} />

            <div id="previewContainer" className="preview-container">
              {previewImages.map((src, i) => (
                <img key={i} src={src} alt={`Preview ${i}`} className="preview-image" />
              ))}
            </div>

            <button type="submit" className="btn-submit">
              Submit
            </button>
            <button type="button" className="btn-back" onClick={() => navigate("/farmer-dashboard")}>
              Back to Dashboard
            </button>
          </form>
        </div>

        {/* Right: History */}
        <div className="history-panel">
          <h2>Upload History</h2>
          <div id="historyContainer">
            {history.length === 0 && <p>No uploads yet.</p>}
            {history.map((item, index) => (
              <div key={index} className="history-card">
                <div className="history-images">
                  {item.images.map((img, i) => (
                    <img key={i} src={img} alt="Crop" />
                  ))}
                </div>
                <div className="history-info">
                  <p>
                    <strong>Crop:</strong> {item.cropName}
                  </p>
                  <p>
                    <strong>Residue:</strong> {item.residueType}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {item.quantity} kg
                  </p>
                  <p>
                    <strong>Location:</strong> {item.location}
                  </p>
                  <p>
                    <strong>Uploader:</strong> {item.uploaderName}
                  </p>
                  <p>
                    <strong>Contact:</strong> {item.uploaderContact}
                  </p>
                  <button className="btn-delete" onClick={() => deleteEntry(index)}>
                    Delete
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
