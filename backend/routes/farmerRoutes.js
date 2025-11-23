// import express from "express";
const express = require("express");
// import { farmerSignup, farmerSignin } from "../controllers/farmerController.js";
const { farmerSignup, farmerSignin } = require("../controllers/farmerController.js");


const router = express.Router();

router.post("/signup", farmerSignup);
router.post("/signin", farmerSignin);

// export default router;

module.exports = router;

