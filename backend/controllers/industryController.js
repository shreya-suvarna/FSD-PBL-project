//backend/controllers/industryController.js


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Industry = require("../models/industry");

const industrySignup = async (req, res) => {
  try {
    const { companyName, email, phone, address, password } = req.body;

    const existingUser = await Industry.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Industry already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newIndustry = new Industry({
      companyName,
      email,
      phone,
      address,
      password: hashedPassword,
    });

    await newIndustry.save();

    res.json({ message: "Industry registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Signup failed" });
  }
};

const industrySignin = async (req, res) => {
  try {
    const { login, password } = req.body;

    const user = await Industry.findOne({
      $or: [{ email: login }, { phone: login }],
    });

    if (!user) {
      return res.status(400).json({ message: "Industry not found" });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { industryId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "5h" }
    );

    // res.json({ message: "Login successful!", token });
     res.json({
  message: "Login successful!",
  token,
  industry: { _id: user._id, companyName: user.companyName, email: user.email }
});

  } catch (error) {
    res.status(500).json({ error: "Signin failed" });
  }
};

module.exports = { industrySignup, industrySignin };
