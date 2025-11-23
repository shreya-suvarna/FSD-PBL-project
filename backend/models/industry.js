// // // backend/models/Industry.js
// // const mongoose = require("mongoose");

// // const industrySchema = new mongoose.Schema({
// //   companyName: { type: String, required: true },
// //   email: { type: String, required: true, unique: true },
// //   phone: { type: String, required: true },
// //   address: { type: String, required: true },
// //   password: { type: String, required: true }
// // });

// // module.exports = mongoose.model("Industry", industrySchema);

// const mongoose = require("mongoose");

// const industrySchema = new mongoose.Schema({
//   companyName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   phone: { type: String, required: true },
//   address: { type: String, required: true },
//   password: { type: String, required: true }
// });

// module.exports = mongoose.model("Industry", industrySchema);


//backend/models/industry.js

const mongoose = require("mongoose");

const industrySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("Industry", industrySchema);
