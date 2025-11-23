// import mongoose from "mongoose";
const mongoose = require("mongoose");


const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

// export default mongoose.model("Farmer", farmerSchema);

module.exports = mongoose.model("Farmer", farmerSchema);

