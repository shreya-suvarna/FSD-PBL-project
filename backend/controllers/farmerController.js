//backend/controllers/farmerController.js


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Farmer = require("../models/farmer");

const farmerSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingFarmer = await Farmer.findOne({ email });
    if (existingFarmer) {
      return res.status(400).json({ message: "Farmer already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const farmer = new Farmer({
      name,
      email,
      password: hashedPassword,
    });

    await farmer.save();

    res.json({ message: "Farmer registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Signup failed" });
  }
};

const farmerSignin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const farmer = await Farmer.findOne({ email });
    if (!farmer) {
      return res.status(400).json({ message: "Farmer not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, farmer.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { farmerId: farmer._id },
      process.env.JWT_SECRET,
      { expiresIn: "5h" }
    );

    // res.json({
    //   message: "Signin successful",
    //   token,
    // });

    res.json({
  message: "Signin successful",
  token,
  farmer: { _id: farmer._id, name: farmer.name, email: farmer.email }
});
  } catch (error) {
    res.status(500).json({ error: "Signin failed" });
  }
};

module.exports = { farmerSignup, farmerSignin };
