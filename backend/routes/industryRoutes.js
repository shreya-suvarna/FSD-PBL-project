//backend/routes/industryRoutes.js

const express = require("express");
const {industrySignup, industrySignin} = require("../controllers/industryController.js");

const router = express.Router();

router.post("/signup", industrySignup);
router.post("/signin", industrySignin);

module.exports = router;
