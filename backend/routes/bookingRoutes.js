// backend/routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const {
  createBooking,
  verifyPayment,
  getBookingsForFarmer,
  getBookingsForIndustry,
  farmerConfirm,
  updateStatus
} = require("../controllers/bookingController");

router.post("/create", createBooking);
// router.post("/verify", verifyPayment);

router.get("/farmer/:farmerId", getBookingsForFarmer);
router.get("/industry/:industryId", getBookingsForIndustry);

router.patch("/confirm/:bookingId", farmerConfirm);
router.patch("/status/:bookingId", updateStatus);

module.exports = router;
