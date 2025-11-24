// frontend/src/pages/FarmerBookings.jsx
import React, { useEffect, useState } from "react";

export default function FarmerBookings() {
  const farmerId = localStorage.getItem("farmerId");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!farmerId) return;
    fetch(`http://localhost:5000/api/bookings/farmer/${farmerId}`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, [farmerId]);

  const handleAction = async (bookingId, action) => {
    const res = await fetch(`http://localhost:5000/api/bookings/confirm/${bookingId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action })
    });
    const data = await res.json();
    alert(data.message || "Updated");
    // refresh
    const refreshed = await fetch(`http://localhost:5000/api/bookings/farmer/${farmerId}`).then(r => r.json());
    setBookings(refreshed);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Booking Requests</h2>
      {bookings.length === 0 ? <p>No bookings</p> : bookings.map(b => (
        <div key={b._id} style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}>
          <p><strong>Residue:</strong> {b.residueId?.cropName}</p>
          <p><strong>Quantity:</strong> {b.quantityBooked} kg</p>
          <p><strong>Industry:</strong> {b.industryId?.companyName}</p>
          <p><strong>Payment:</strong> {b.paymentMethod} — {b.paymentStatus}</p>
          <p><strong>Status:</strong> {b.status}</p>

          {b.status === "Booked" && (
            <>
              <button onClick={() => handleAction(b._id, "confirm")}>Accept</button>
              <button onClick={() => handleAction(b._id, "reject")}>Reject</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
