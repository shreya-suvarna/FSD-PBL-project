import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/IndustryPayments.css";

function IndustryPayFarmers() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load all pre-booked crop residues from localStorage
    const storedOrders = JSON.parse(localStorage.getItem("preBookedResidues") || "[]");
    setOrders(storedOrders);
  }, []);

  const handlePayment = (index) => {
    const updated = [...orders];
    updated[index].status = "Paid";
    localStorage.setItem("preBookedResidues", JSON.stringify(updated));
    setOrders(updated);
    alert("✅ Payment marked as completed!");
  };

  return (
    <div className="payfarmers-container">
      <h1 className="payfarmers-title">Payments to Farmers</h1>

      {orders.length === 0 ? (
        <p className="no-orders">No pre-booked residues found.</p>
      ) : (
        <div className="orders-grid">
          {orders.map((order, index) => (
            <div key={index} className="order-card">
              <h2>{order.cropName} - {order.residueType}</h2>
              <p><strong>Quantity:</strong> {order.quantity} kg</p>
              <p><strong>Farmer:</strong> {order.uploaderName || "Anonymous"}</p>
              <p><strong>Contact:</strong> {order.uploaderContact || "Not Provided"}</p>
              <p><strong>Location:</strong> {order.location}</p>
              <p><strong>Status:</strong> {order.status || "Pending"}</p>
              {order.status !== "Paid" && (
                <button className="btn-pay" onClick={() => handlePayment(index)}>Pay Farmer</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IndustryPayFarmers;
