// // // //backend/routes/cropResidueRoutes.js



// // // const express = require("express");
// // // const router = express.Router();
// // // const multer = require("multer");
// // // const path = require("path");

// // // const {
// // //   uploadResidue,
// // //   getResidues,
// // //   searchResidues,
// // // } = require("../controllers/cropResidueController");

// // // const storage = multer.diskStorage({
// // //   destination: "./uploads/",
// // //   filename: (req, file, cb) => {
// // //     cb(null, Date.now() + path.extname(file.originalname));
// // //   }
// // // });

// // // const upload = multer({ storage });

// // // router.post("/upload", upload.array("images", 5), uploadResidue);
// // // router.get("/all", getResidues);
// // // router.get("/search", searchResidues);
// // // router.get("/farmer/:farmerId", getResiduesByFarmer);
// // // router.delete("/:id", deleteResidue);


// // // module.exports = router;

// // // backend/routes/cropResidueRoutes.js

// // const express = require("express");
// // const router = express.Router();
// // const multer = require("multer");
// // const path = require("path");

// // const {
// //   uploadResidue,
// //   getResidues,
// //   searchResidues,
// //   getResiduesByFarmer,
// //   deleteResidue
// // } = require("../controllers/cropResidueController");

// // const storage = multer.diskStorage({
// //   destination: "./uploads/",
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + path.extname(file.originalname));
// //   },
// // });

// // const upload = multer({ storage });

// // // Upload residue
// // router.post("/upload", upload.array("images", 5), uploadResidue);

// // // All residues
// // router.get("/all", getResidues);

// // // Search residues
// // router.get("/search", searchResidues);

// // // Get residues for one farmer
// // router.get("/farmer/:farmerId", getResiduesByFarmer);

// // // Delete crop residue
// // router.delete("/:id", deleteResidue);

// // module.exports = router;

// /* backend/routes/cropResidueRoutes.js */
// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const path = require("path");

// const {
// uploadResidue,
// getResidues,
// searchResidues,
// getResiduesByFarmer,
// deleteResidue,
// } = require("../controllers/cropResidueController");

// const { verifyToken } = require("../middleware/auth"); // your auth middleware

// const storage = multer.diskStorage({
// destination: "./uploads/",
// filename: (req, file, cb) => {
// cb(null, Date.now() + path.extname(file.originalname));
// },
// });

// const upload = multer({ storage });

// // Routes
// router.post("/upload", verifyToken, upload.array("images", 5), uploadResidue);
// router.get("/all", verifyToken, getResidues);
// router.get("/search", verifyToken, searchResidues);
// router.get("/farmer/:farmerId", verifyToken, getResiduesByFarmer);
// router.delete("/:id", verifyToken, deleteResidue);

// module.exports = router;

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  uploadResidue,
  getResiduesByFarmer,
  searchResidues,
  deleteResidue,
} = require("../controllers/cropResidueController");

const { verifyToken } = require("../middleware/auth"); // authentication middleware

// Multer for file uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// ----------------- ROUTES -------------------

router.post("/upload", verifyToken, upload.array("images", 5), uploadResidue);

// Get residues of logged-in farmer
router.get("/all", verifyToken, getResiduesByFarmer);

// Search residues of logged-in farmer
router.get("/search", verifyToken, searchResidues);

// Delete residue
router.delete("/:id", verifyToken, deleteResidue);

module.exports = router;
