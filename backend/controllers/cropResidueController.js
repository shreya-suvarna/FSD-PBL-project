//backend/controllers/cropResidueController.js

const CropResidue = require("../models/CropResidue");

const uploadResidue = async (req, res) => {
  try {
    const imagePaths = req.files.map(
      (file) => `http://localhost:5000/uploads/${file.filename}`
    );

        const residue = new CropResidue({
      cropName: req.body.cropName,
      residueType: req.body.residueType,
      quantity: req.body.quantity,
      location: req.body.location,
      uploaderName: req.body.uploaderName,
      uploaderContact: req.body.uploaderContact,
      farmerId: req.body.farmerId,  
      images: imagePaths,
    });

    await residue.save();

    res.json({ message: "Residue uploaded successfully!", residue });
  } catch (error) {
    res.status(500).json({ error: "Failed to upload residue" });
  }
};

const getResidues = async (req, res) => {
  try {
    const residues = await CropResidue.find();
    res.json(residues);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch residues" });
  }
};

const searchResidues = async (req, res) => {
  try {
    const { cropName, residueType, location, minQuantity } = req.query;

    let filter = {};

    if (cropName) filter.cropName = cropName;
    if (residueType) filter.residueType = residueType;
    if (location) filter.location = new RegExp(location, "i");
    if (minQuantity) filter.quantity = { $gte: Number(minQuantity) };

    const results = await CropResidue.find(filter);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
};

const getResiduesByFarmer = async (req, res) => {
  try {
    const { farmerId } = req.params;
    const residues = await CropResidue.find({ farmerId });
    res.json(residues);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch farmer residues" });
  }
};

const deleteResidue = async (req, res) => {
  try {
    await CropResidue.findByIdAndDelete(req.params.id);
    res.json({ message: "Residue deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete residue" });
  }
};


module.exports = { uploadResidue, getResidues, searchResidues ,getResiduesByFarmer,deleteResidue};
// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const multer = require("multer");
// // // // const path = require("path");

// // // // const {
// // // //   uploadResidue,
// // // //   getResidues,
// // // //   searchResidues,
// // // //   getResiduesByFarmer,
// // // //   deleteResidue
// // // // } = require("../controllers/cropResidueController");

// // // // const storage = multer.diskStorage({
// // // //   destination: "./uploads/",
// // // //   filename: (req, file, cb) => {
// // // //     cb(null, Date.now() + path.extname(file.originalname));
// // // //   }
// // // // });

// // // // const upload = multer({ storage });

// // // // // Upload residue
// // // // router.post("/upload", upload.array("images", 5), uploadResidue);

// // // // // All residues
// // // // router.get("/all", getResidues);

// // // // // Search residues
// // // // router.get("/search", searchResidues);

// // // // // Get residues uploaded by a specific farmer
// // // // router.get("/farmer/:farmerId", getResiduesByFarmer);

// // // // // Delete residue
// // // // router.delete("/:id", deleteResidue);

// // // // module.exports = router;
// // // // backend/controllers/cropResidueController.js

// // // const CropResidue = require("../models/CropResidue");

// // // const uploadResidue = async (req, res) => {
// // //   try {
// // //     const imagePaths = req.files.map(
// // //       (file) => `http://localhost:5000/uploads/${file.filename}`
// // //     );

// // //     const residue = new CropResidue({
// // //       cropName: req.body.cropName,
// // //       residueType: req.body.residueType,
// // //       quantity: req.body.quantity,
// // //       location: req.body.location,
// // //       uploaderName: req.body.uploaderName,
// // //       uploaderContact: req.body.uploaderContact,
// // //       farmerId: req.body.farmerId,
// // //       images: imagePaths,
// // //     });

// // //     await residue.save();

// // //     res.json({ message: "Residue uploaded successfully!", residue });
// // //   } catch (error) {
// // //     res.status(500).json({ error: "Failed to upload residue" });
// // //   }
// // // };

// // // const getResidues = async (req, res) => {
// // //   try {
// // //     const residues = await CropResidue.find();
// // //     res.json(residues);
// // //   } catch (error) {
// // //     res.status(500).json({ error: "Failed to fetch residues" });
// // //   }
// // // };

// // // const searchResidues = async (req, res) => {
// // //   try {
// // //     const { cropName, residueType, location, minQuantity } = req.query;

// // //     let filter = {};

// // //     if (cropName) filter.cropName = cropName;
// // //     if (residueType) filter.residueType = residueType;
// // //     if (location) filter.location = new RegExp(location, "i");
// // //     if (minQuantity) filter.quantity = { $gte: Number(minQuantity) };

// // //     const results = await CropResidue.find(filter);
// // //     res.json(results);
// // //   } catch (error) {
// // //     res.status(500).json({ error: "Search failed" });
// // //   }
// // // };

// // // const getResiduesByFarmer = async (req, res) => {
// // //   try {
// // //     const { farmerId } = req.params;
// // //     const residues = await CropResidue.find({ farmerId });
// // //     res.json(residues);
// // //   } catch (error) {
// // //     res.status(500).json({ error: "Failed to fetch farmer residues" });
// // //   }
// // // };

// // // const deleteResidue = async (req, res) => {
// // //   try {
// // //     await CropResidue.findByIdAndDelete(req.params.id);
// // //     res.json({ message: "Residue deleted successfully" });
// // //   } catch (error) {
// // //     res.status(500).json({ error: "Failed to delete residue" });
// // //   }
// // // };

// // // module.exports = {
// // //   uploadResidue,
// // //   getResidues,
// // //   searchResidues,
// // //   getResiduesByFarmer,
// // //   deleteResidue,
// // // };
// // /* backend/controllers/cropResidueController.js */
// // const CropResidue = require("../models/CropResidue");

// // // Upload crop residue (linked to logged-in farmer)
// // const uploadResidue = async (req, res) => {
// // try {
// // const imagePaths = req.files.map(
// // (file) => `http://localhost:5000/uploads/${file.filename}`
// // );

// // ```
// // const residue = new CropResidue({
// //   cropName: req.body.cropName,
// //   residueType: req.body.residueType,
// //   quantity: req.body.quantity,
// //   location: req.body.location,
// //   uploaderName: req.body.uploaderName || "Anonymous",
// //   uploaderContact: req.body.uploaderContact || "Not Provided",
// //   farmerId: req.user.id, // <- logged-in farmer
// //   images: imagePaths,
// // });

// // await residue.save();

// // res.status(201).json({ message: "Residue uploaded successfully!", residue });
// // ```

// // } catch (error) {
// // res.status(500).json({ error: "Failed to upload residue", details: error.message });
// // }
// // };

// // // Get all residues for logged-in farmer
// // const getResidues = async (req, res) => {
// // try {
// // const residues = await CropResidue.find({ farmerId: req.user.id });
// // res.json(residues);
// // } catch (error) {
// // res.status(500).json({ error: "Failed to fetch residues", details: error.message });
// // }
// // };

// // // Search residues (any farmer, optional admin route)
// // const searchResidues = async (req, res) => {
// // try {
// // const { cropName, residueType, location, minQuantity } = req.query;
// // let filter = {};

// // ```
// // if (cropName) filter.cropName = cropName;
// // if (residueType) filter.residueType = residueType;
// // if (location) filter.location = new RegExp(location, "i");
// // if (minQuantity) filter.quantity = { $gte: Number(minQuantity) };

// // const results = await CropResidue.find(filter);
// // res.json(results);
// // ```

// // } catch (error) {
// // res.status(500).json({ error: "Search failed", details: error.message });
// // }
// // };

// // // Get residues by specific farmer (admin)
// // const getResiduesByFarmer = async (req, res) => {
// // try {
// // const { farmerId } = req.params;
// // const residues = await CropResidue.find({ farmerId });
// // res.json(residues);
// // } catch (error) {
// // res.status(500).json({ error: "Failed to fetch farmer residues", details: error.message });
// // }
// // };

// // // Delete residue (only uploader or admin)
// // const deleteResidue = async (req, res) => {
// // try {
// // const residue = await CropResidue.findById(req.params.id);
// // if (!residue) return res.status(404).json({ error: "Residue not found" });

// // ```
// // // Optional: check if logged-in farmer is the owner
// // if (residue.farmerId.toString() !== req.user.id) {
// //   return res.status(403).json({ error: "Not authorized to delete this residue" });
// // }

// // await residue.deleteOne();
// // res.json({ message: "Residue deleted successfully" });
// // ```

// // } catch (error) {
// // res.status(500).json({ error: "Failed to delete residue", details: error.message });
// // }
// // };

// // module.exports = {
// // uploadResidue,
// // getResidues,
// // searchResidues,
// // getResiduesByFarmer,
// // deleteResidue,
// // };


// const CropResidue = require("../models/CropResidue");

// // Upload crop residue (linked to logged-in farmer)
// const uploadResidue = async (req, res) => {
//   try {
//     const imagePaths = req.files.map(
//       (file) => `http://localhost:5000/uploads/${file.filename}`
//     );

//     const residue = new CropResidue({
//       cropName: req.body.cropName,
//       residueType: req.body.residueType,
//       quantity: req.body.quantity,
//       location: req.body.location,
//       uploaderName: req.body.uploaderName || "Anonymous",
//       uploaderContact: req.body.uploaderContact || "Not Provided",
//       farmerId: req.user.id, // logged-in farmer
//       images: imagePaths,
//     });

//     await residue.save();
//     res.status(201).json({ message: "Residue uploaded successfully!", residue });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to upload residue", details: error.message });
//   }
// };

// // Get all residues for logged-in farmer
// const getResidues = async (req, res) => {
//   try {
//     const residues = await CropResidue.find({ farmerId: req.user.id });
//     res.json(residues);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch residues", details: error.message });
//   }
// };

// // Search residues (any farmer, optional admin)
// const searchResidues = async (req, res) => {
//   try {
//     const { cropName, residueType, location, minQuantity } = req.query;
//     let filter = {};

//     if (cropName) filter.cropName = cropName;
//     if (residueType) filter.residueType = residueType;
//     if (location) filter.location = new RegExp(location, "i");
//     if (minQuantity) filter.quantity = { $gte: Number(minQuantity) };

//     const results = await CropResidue.find(filter);
//     res.json(results);
//   } catch (error) {
//     res.status(500).json({ error: "Search failed", details: error.message });
//   }
// };

// // Delete residue (only uploader or admin)
// const deleteResidue = async (req, res) => {
//   try {
//     const residue = await CropResidue.findById(req.params.id);
//     if (!residue) return res.status(404).json({ error: "Residue not found" });

//     if (residue.farmerId.toString() !== req.user.id) {
//       return res.status(403).json({ error: "Not authorized to delete this residue" });
//     }

//     await residue.deleteOne();
//     res.json({ message: "Residue deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete residue", details: error.message });
//   }
// };

// module.exports = {
//   uploadResidue,
//   getResidues,
//   searchResidues,
//   deleteResidue,
// };


// const CropResidue = require("../models/CropResidue");

// // Upload residue
// const uploadResidue = async (req, res) => {
//   try {
//     const imagePaths = req.files.map(
//       (file) => `http://localhost:5000/uploads/${file.filename}`
//     );

//     const residue = new CropResidue({
//       cropName: req.body.cropName,
//       residueType: req.body.residueType,
//       quantity: req.body.quantity,
//       location: req.body.location,
//       uploaderName: req.body.uploaderName || "Anonymous",
//       uploaderContact: req.body.uploaderContact || "Not Provided",
//       farmerId: req.user.id, // logged-in farmer
//       images: imagePaths,
//     });

//     await residue.save();
//     res.status(201).json({ message: "Residue uploaded successfully!", residue });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to upload residue", details: error.message });
//   }
// };

// // Get all residues of the logged-in farmer
// const getResiduesByFarmer = async (req, res) => {
//   try {
//     const residues = await CropResidue.find({ farmerId: req.user.id });
//     res.json(residues);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch residues", details: error.message });
//   }
// };

// // Search residues of the logged-in farmer
// const searchResidues = async (req, res) => {
//   try {
//     const { cropName, residueType, location, minQuantity } = req.query;
//     let filter = { farmerId: req.user.id }; // only logged-in farmer

//     if (cropName) filter.cropName = cropName;
//     if (residueType) filter.residueType = residueType;
//     if (location) filter.location = new RegExp(location, "i");
//     if (minQuantity) filter.quantity = { $gte: Number(minQuantity) };

//     const results = await CropResidue.find(filter);
//     res.json(results);
//   } catch (error) {
//     res.status(500).json({ error: "Search failed", details: error.message });
//   }
// };

// // Delete a residue
// const deleteResidue = async (req, res) => {
//   try {
//     const residue = await CropResidue.findById(req.params.id);
//     if (!residue) return res.status(404).json({ error: "Residue not found" });

//     if (residue.farmerId.toString() !== req.user.id) {
//       return res.status(403).json({ error: "Not authorized to delete this residue" });
//     }

//     await residue.deleteOne();
//     res.json({ message: "Residue deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete residue", details: error.message });
//   }
// };

// module.exports = {
//   uploadResidue,
//   getResiduesByFarmer,
//   searchResidues,
//   deleteResidue,
// };
