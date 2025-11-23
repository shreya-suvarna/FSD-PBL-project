// // // backend/config/db.js
// // const mongoose = require("mongoose");

// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect("mongodb+srv://23c66shreya_db_user:pblfsd5102005@cluster0.ct2pxnq.mongodb.net/");
// //     console.log("MongoDB Connected");
// //   } catch (error) {
// //     console.error(error);
// //     process.exit(1);
// //   }
// // };

// // module.exports = connectDB;


// // backend/config/db.js
// // const mongoose = require("mongoose");
// // const dotenv = require("dotenv");

// // dotenv.config(); // loads process.env from .env

// // const MONGO_URI = process.env.MONGO_URI;

// // const connectDB = async () => {
// //   if (!MONGO_URI) {
// //     console.error("MONGO_URI is not defined in environment variables");
// //     process.exit(1);
// //   }

// //   try {
// //     // Recommended options
// //     const options = {
// //       // useNewUrlParser and useUnifiedTopology are defaults in recent mongoose versions,
// //       // but explicit options are harmless and make intent clear.
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //       // Connection pool size (default is fine for dev, tune for prod)
// //       maxPoolSize: 10,
// //       // How long the driver will try to send operations before failing (ms)
// //       serverSelectionTimeoutMS: 5000,
// //       socketTimeoutMS: 45000,
// //     };

// //     await mongoose.connect(MONGO_URI, options);

// //     console.log("MongoDB connected:", mongoose.connection.host);
// //     // Optional: listen for events
// //     mongoose.connection.on("error", (err) => {
// //       console.error("MongoDB connection error:", err);
// //     });
// //     mongoose.connection.on("disconnected", () => {
// //       console.warn("MongoDB disconnected");
// //     });
// //   } catch (err) {
// //     console.error("Failed to connect to MongoDB:", err.message || err);
// //     // exit in development to surface error immediately
// //     process.exit(1);
// //   }
// // };

// // module.exports = connectDB;


// const mongoose = require("mongoose");
// require("dotenv").config();

// const MONGO_URI = process.env.MONGO_URI;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });

//     console.log("MongoDB Connected:", mongoose.connection.host);
//   } catch (error) {
//     console.error("MongoDB Connection Error:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("MongoDB Connected:", mongoose.connection.host);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
