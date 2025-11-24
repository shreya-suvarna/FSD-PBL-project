// backend/models/Booking.js
const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  residueId: { type: mongoose.Schema.Types.ObjectId, ref: "CropResidue", required: true },
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer", required: true },
  industryId: { type: mongoose.Schema.Types.ObjectId, ref: "Industry", required: true },

  quantityBooked: { type: Number, required: true },
  totalPrice: { type: Number, required: true },

  paymentMethod: { type: String, enum: ["COD", "ONLINE"], required: true },
  paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },

  status: { 
    type: String, 
    enum: ["Booked", "FarmerConfirmed", "Rejected", "OutForDelivery", "Delivered"], 
    default: "Booked" 
  },

  // razorpayOrderId: { type: String },
  // razorpayPaymentId: { type: String },
  // razorpaySignature: { type: String },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", BookingSchema);
