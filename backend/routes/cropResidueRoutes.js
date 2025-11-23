// // const express = require("express");
// // const router = express.Router();

// // const {
// //   uploadResidue,
// //   getResidues,
// //   searchResidues,
// // } = require("../controllers/cropResidueController");

// // // POST: upload residue
// // router.post("/upload", uploadResidue);

// // // GET: all residues
// // router.get("/all", getResidues);

// // // GET: search
// // router.get("/search", searchResidues);

// // module.exports = router;


// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const path = require("path");
// const { uploadResidue, getResidues, searchResidues } = require("../controllers/cropResidueController");

// // Store images in /uploads folder
// const storage = multer.diskStorage({
//   destination: "./uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

// router.post("/upload", upload.array("images", 5), uploadResidue);
// router.get("/all", getResidues);
// router.get("/search", searchResidues);
// module.exports = router;


const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  uploadResidue,
  getResidues,
  searchResidues,
} = require("../controllers/cropResidueController");

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post("/upload", upload.array("images", 5), uploadResidue);
router.get("/all", getResidues);
router.get("/search", searchResidues);

module.exports = router;
