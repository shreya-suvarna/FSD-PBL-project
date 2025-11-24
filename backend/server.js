// // // // backend/server.js

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const industryRoutes = require("./routes/industryRoutes");
const farmerRoutes = require("./routes/farmerRoutes");
const cropResidueRoutes = require("./routes/cropResidueRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// DB connect
connectDB();

app.use("/api/industry", industryRoutes);
app.use("/api/farmer", farmerRoutes);
app.use("/api/residue", cropResidueRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/notifications", notificationRoutes);
app

app.get("/", (req, res) => {
  res.send("Green Kisan Backend Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
