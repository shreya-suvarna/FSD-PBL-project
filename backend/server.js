// // // // backend/server.js
// // // const express = require("express");
// // // const cors = require("cors");
// // // const connectDB = require("./config/db");

// // // const industryRoutes = require("./routes/industryRoutes");

// // // const app = express();
// // // app.use(express.json());
// // // app.use(cors());

// // // // db connection
// // // connectDB();

// // // // Routes
// // // app.use("/api/industry", industryRoutes);

// // // app.get("/", (req, res) => {
// // //   res.send("Backend running...");
// // // });

// // // app.listen(5000, () => console.log("Server running on port 5000"));



// // // const express = require("express");
// // // const cors = require("cors");
// // // const connectDB = require("./config/db");
// // // require("dotenv").config();

// // // const app = express();
// // // app.use(express.json());
// // // app.use(cors());

// // // // Connect to DB (before routes so models can be used)
// // // connectDB();

// // // // ... your routes
// // // app.use("/api/industry", require("./routes/industryRoutes"));

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // const express = require("express");
// // const cors = require("cors");
// // const connectDB = require("./config/db");
// // const industryRoutes = require("./routes/industryRoutes");
// // require("dotenv").config();

// // const app = express();

// // // Middleware
// // app.use(express.json());
// // app.use(cors());

// // // DB connect
// // connectDB();

// // // Routes
// // app.use("/api/industry", industryRoutes);

// // app.get("/", (req, res) => {
// //   res.send("Green Kisan Backend Running...");
// // });

// // // Start Server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// //backend/server.js
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const industryRoutes = require("./routes/industryRoutes");
// const farmerRoutes = require("./routes/farmerRoutes");
// const cropResidueRoutes = require("./routes/cropResidueRoutes");

// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // DB connect
// connectDB();

// // Routes
// app.use("/api/industry", industryRoutes);
// app.use("/api/farmer", farmerRoutes);
// app.use("/api/residue", cropResidueRoutes);
// app.use("/uploads", express.static("uploads"));


// // app.use(express.json({ limit: "10mb" }));

// app.get("/", (req, res) => {
//   res.send("Green Kisan Backend Running...");
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // const cors = require("cors");
// // app.use(cors());


const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const industryRoutes = require("./routes/industryRoutes");
const farmerRoutes = require("./routes/farmerRoutes");
const cropResidueRoutes = require("./routes/cropResidueRoutes");

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

app.get("/", (req, res) => {
  res.send("Green Kisan Backend Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
