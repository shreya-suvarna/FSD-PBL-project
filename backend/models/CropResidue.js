// //backend/models/CropResidue.js
// const mongoose = require("mongoose");

// const CropResidueSchema = new mongoose.Schema({
//   cropName: { type: String, required: true },
//   residueType: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   location: { type: String, required: true },

//   uploaderName: { type: String, default: "Anonymous" },
//   uploaderContact: { type: String, default: "Not Provided" },

//   images: { type: [String], required: true }, // Base64 images or URLs

//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("CropResidue", CropResidueSchema);

//backend/models/CropResidue.js
const mongoose = require("mongoose");

const CropResidueSchema = new mongoose.Schema({
  cropName: { type: String, required: true },
  residueType: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
  uploaderName: { type: String, default: "Anonymous" },
  uploaderContact: { type: String, default: "Not Provided" },
  images: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CropResidue", CropResidueSchema);
