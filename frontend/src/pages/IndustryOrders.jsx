// frontend/src/pages/IndustryOrders.jsx
import React, { useEffect, useState } from "react";

export default function IndustryOrders() {
  const industryId = localStorage.getItem("industryId");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!industryId) return;
    fetch(`http://localhost:5000/api/bookings/industry/${industryId}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [industryId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Bookings</h2>
      {orders.length === 0 ? <p>No orders</p> : orders.map(o => (
        <div key={o._id} style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}>
          <p><strong>Residue:</strong> {o.residueId?.cropName}</p>
          <p><strong>Quantity:</strong> {o.quantityBooked} kg</p>
          <p><strong>Total:</strong> ₹{o.totalPrice}</p>
          <p><strong>Payment:</strong> {o.paymentMethod} — {o.paymentStatus}</p>
          <p><strong>Status:</strong> {o.status}</p>
        </div>
      ))}
    </div>
  );
}
