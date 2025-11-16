import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "../styles/PreBook.css";

function PreBook() {
  const navigate = useNavigate();

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

  // Load previous bookings
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
      alert("❌ Please fill all required fields");
      return;
    }

    const bookingData = {
      ...form,
      industryContact: form.industryContact || "Not Provided",
      timestamp: new Date().toISOString(),
    };

    // Save to preBookings
    const existing = JSON.parse(localStorage.getItem("preBookings") || "[]");
    existing.push(bookingData);
    localStorage.setItem("preBookings", JSON.stringify(existing));
    setHistory(existing);

    // Add to farmer Alerts
   const alerts = JSON.parse(localStorage.getItem("alerts") || "[]");

alerts.push({
  title: "New Pre-Booking Request",
  message: `${form.industryName} wants to pre-book ${form.quantity} kg of ${form.cropName} (${form.residueType}) from ${form.location}.`,
  read: false,
  date: new Date().toLocaleString(),
});

    localStorage.setItem("alerts", JSON.stringify(alerts));

    alert("✅ Pre-Booking submitted successfully!");
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
      <h1 className="prebook-title">Pre-Book Crop Residue</h1>

      <div className="prebook-flex">
        {/* Form */}
        <div className="prebook-card">
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
              placeholder="e.g. 100"
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

            <label>Industry Name</label>
            <input
              type="text"
              id="industryName"
              placeholder="Your Industry Name"
              value={form.industryName}
              onChange={handleChange}
              required
            />

            <label>Industry Contact</label>
            <input
              type="text"
              id="industryContact"
              placeholder="Phone / Email"
              value={form.industryContact}
              onChange={handleChange}
            />

            <label>Additional Notes</label>
            <textarea
              id="notes"
              placeholder="Optional notes"
              value={form.notes}
              onChange={handleChange}
              rows="3"
            ></textarea>

            <button type="submit" className="btn-submit">Submit</button>
            <button type="button" className="btn-back" onClick={() => navigate("/industry-dashboard")}>
              Back to Dashboard
            </button>
          </form>
        </div>

        {/* Booking History */}
        <div className="history-panel">
          <h2>Previous Pre-Bookings</h2>
          {history.length === 0 && <p>No pre-bookings yet.</p>}
          {history.map((item, index) => (
            <div key={index} className="history-card">
              <p><strong>Crop:</strong> {item.cropName}</p>
              <p><strong>Residue:</strong> {item.residueType}</p>
              <p><strong>Quantity:</strong> {item.quantity} kg</p>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>Industry:</strong> {item.industryName}</p>
              <p><strong>Contact:</strong> {item.industryContact}</p>
              {item.notes && <p><strong>Notes:</strong> {item.notes}</p>}
              <button className="btn-delete" onClick={() => deleteEntry(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PreBook;