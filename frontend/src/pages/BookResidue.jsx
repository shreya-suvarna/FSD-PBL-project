// frontend/src/pages/BookResidue.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addAlert } from "../utils/alertHelper";

export default function BookResidue() {
  const { id } = useParams(); // residueId
  const navigate = useNavigate();

  const [residue, setResidue] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [industryId, setIndustryId] = useState(localStorage.getItem("industryId") || "");

  useEffect(() => {
    fetch(`http://localhost:5000/api/residue/all`)
      .then(res => res.json())
      .then(data => {
        const item = data.find(d => d._id === id);
        setResidue(item || null);
        if (item) setQuantity(Math.min(1, item.quantity));
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!industryId) {
      alert("Please login as Industry to book");
      return;
    }
    if (!quantity || quantity <= 0) {
      alert("Enter a valid quantity");
      return;
    }
    const totalPrice = Number(quantity) * 1; // placeholder price per kg = 1₹ (change as needed)
    const payload = { residueId: id, industryId, quantityBooked: Number(quantity), totalPrice, paymentMethod };

    const res = await fetch("http://localhost:5000/api/bookings/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    // if (paymentMethod === "ONLINE") {
    //   // data.order contains razorpay order
    //   const { order, booking } = data;
    //   const options = {
    //     key: process.env.REACT_APP_RAZORPAY_KEY_ID || "rzp_test_xxx", // put test key or use Vite env VITE_RAZORPAY_KEY_ID
    //     amount: order.amount,
    //     currency: order.currency,
    //     name: "Green Kisan",
    //     description: "Residue purchase",
    //     order_id: order.id,
    //     handler: async function (resp) {
    //       // verify on backend
    //       const verifyRes = await fetch("http://localhost:5000/api/bookings/verify", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //           razorpayOrderId: resp.razorpay_order_id,
    //           razorpayPaymentId: resp.razorpay_payment_id,
    //           razorpaySignature: resp.razorpay_signature,
    //           bookingId: booking._id
    //         })
    //       });
    //       const verifyData = await verifyRes.json();
    //       if (verifyData.success) {
    //         alert("Payment verified! Booking pending farmer confirmation.");
    //         navigate("/industry-orders");
    //       } else {
    //         alert("Payment verification failed");
    //       }
    //     },
    //     prefill: {
    //       email: localStorage.getItem("industryEmail") || "",
    //       contact: ""
    //     }
    //   };
    //   const rzp = new window.Razorpay(options);
    //   rzp.open();
    // } else {
      // COD
      if (data.booking) {
        alert("Booking placed (COD). Waiting for farmer confirmation.");
        navigate("/industry-orders");
      } else {
        alert("Booking failed");
      // }
    }
  };

  if (!residue) return <div>Loading...</div>;

 

const handleBooking = async () => {
  const res = await axios.post("/api/bookings", {
    residueId,
    farmerId,
    industryId,
    quantity,
  });

  // notify farmer
  addAlert(
    "New Booking Request",
    `An industry has requested to book your residue: ${residueId}`
  );

  alert("Booking request sent!");
};


  return (
    <div style={{ padding: 20 }}>
      <h2>Book Residue — {residue.cropName}</h2>
      <p><strong>Available:</strong> {residue.quantity} kg</p>
      <form onSubmit={handleSubmit}>
        <label>Quantity to book (kg)</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" max={residue.quantity} />

        <label>Payment method</label>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="COD">Cash on Delivery</option>
          <option value="ONLINE">Pay Online</option>
        </select>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}
