// // // // backend/routes/industryRoutes.js
// // // const express = require("express");
// // // const bcrypt = require("bcryptjs");
// // // const jwt = require("jsonwebtoken");
// // // const Industry = require("../models/Industry");

// // // const router = express.Router();

// // // // SIGNUP
// // // router.post("/signup", async (req, res) => {
// // //   try {
// // //     const { companyName, email, phone, address, password } = req.body;

// // //     // check if account exists
// // //     const exists = await Industry.findOne({ email });
// // //     if (exists) return res.status(400).json({ message: "Email already exists" });

// // //     // hash password
// // //     const hashedPassword = await bcrypt.hash(password, 10);

// // //     // create account
// // //     const newIndustry = new Industry({
// // //       companyName,
// // //       email,
// // //       phone,
// // //       address,
// // //       password: hashedPassword
// // //     });

// // //     await newIndustry.save();

// // //     res.status(201).json({ message: "Account created successfully" });

// // //   } catch (error) {
// // //     res.status(500).json({ message: "Server error", error });
// // //   }
// // // });

// // // // SIGNIN
// // // router.post("/signin", async (req, res) => {
// // //   try {
// // //     const { login, password } = req.body;

// // //     const industry = await Industry.findOne({ email: login });
// // //     if (!industry) return res.status(400).json({ message: "Invalid credentials" });

// // //     const isMatch = await bcrypt.compare(password, industry.password);
// // //     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

// // //     // JWT Token
// // //     const token = jwt.sign({ id: industry._id }, "SECRET_KEY", { expiresIn: "7d" });

// // //     res.json({
// // //       message: "Login successful",
// // //       token,
// // //       industry
// // //     });

// // //   } catch (error) {
// // //     res.status(500).json({ message: "Server error", error });
// // //   }
// // // });

// // // module.exports = router;

// // const express = require("express");
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");
// // const Industry = require("../models/industry");
// // const router = express.Router();

// // require("dotenv").config();

// // // --- SIGNUP ---
// // router.post("/signup", async (req, res) => {
// //   try {
// //     const { companyName, email, phone, address, password } = req.body;

// //     const existing = await Industry.findOne({ email });
// //     if (existing) {
// //       return res.status(400).json({ message: "Email already exists" });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const industry = new Industry({
// //       companyName,
// //       email,
// //       phone,
// //       address,
// //       password: hashedPassword
// //     });

// //     await industry.save();

// //     res.status(201).json({ message: "Industry account created" });
// //   } catch (err) {
// //     res.status(500).json({ message: "Server error", error: err });
// //   }
// // });


// // // --- SIGNIN ---
// // router.post("/signin", async (req, res) => {
// //   try {
// //     const { login, password } = req.body;

// //     // Allow login using either email or phone
// //     const industry = await Industry.findOne({
// //       $or: [{ email: login }, { phone: login }]
// //     });

// //     if (!industry) {
// //       return res.status(400).json({ message: "Invalid login or password" });
// //     }

// //     const isMatch = await bcrypt.compare(password, industry.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ message: "Invalid login or password" });
// //     }

// //     const token = jwt.sign(
// //       { id: industry._id },
// //       process.env.JWT_SECRET,
// //       { expiresIn: "7d" }
// //     );

// //     res.json({
// //       message: "Login successful",
// //       token,
// //       industry
// //     });
// //   } catch (err) {
// //     res.status(500).json({ message: "Server error", error: err });
// //   }
// // });

// // module.exports = router;

// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const Industry = require("../models/industry");
// const router = express.Router();

// require("dotenv").config();

// // --- SIGNUP ---
// router.post("/signup", async (req, res) => {
//   try {
//     const { companyName, email, phone, address, password } = req.body;

//     const existing = await Industry.findOne({ email });
//     if (existing) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const industry = new Industry({
//       companyName,
//       email,
//       phone,
//       address,
//       password: hashedPassword
//     });

//     await industry.save();

//     res.status(201).json({ message: "Industry account created" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err });
//   }
// });


// // --- SIGNIN ---
// router.post("/signin", async (req, res) => {
//   try {
//     const { login, password } = req.body;

//     // Allow login using either email or phone
//     const industry = await Industry.findOne({
//       $or: [{ email: login }, { phone: login }]
//     });

//     if (!industry) {
//       return res.status(400).json({ message: "Invalid login or password" });
//     }

//     const isMatch = await bcrypt.compare(password, industry.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid login or password" });
//     }

//     const token = jwt.sign(
//       { id: industry._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.json({
//       message: "Login successful",
//       token,
//       industry
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err });
//   }
// });

// module.exports = router;

// import express from "express";
// import { industrySignup, industrySignin } from "../controllers/industryController.js";

const express = require("express");
const {industrySignup, industrySignin} = require("../controllers/industryController.js");

const router = express.Router();

router.post("/signup", industrySignup);
router.post("/signin", industrySignin);

module.exports = router;
