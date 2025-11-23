// // const CropResidue = require("../models/CropResidue");

// // // Upload Crop Residue
// // const uploadResidue = async (req, res) => {
// //   try {
// //     const residue = new CropResidue(req.body);
// //     await residue.save();

// //     res.json({ message: "Residue uploaded successfully!", residue });
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to upload residue" });
// //   }
// // };

// // // Get All Residues (for search page)
// // const getResidues = async (req, res) => {
// //   try {
// //     const residues = await CropResidue.find();
// //     res.json(residues);
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to fetch residues" });
// //   }
// // };

// // // Search Residues
// // const searchResidues = async (req, res) => {
// //   try {
// //     const { cropName, residueType, location, minQuantity } = req.query;

// //     let filter = {};

// //     if (cropName) filter.cropName = cropName;
// //     if (residueType) filter.residueType = residueType;
// //     if (location)
// //       filter.location = { $regex: location, $options: "i" };
// //     if (minQuantity)
// //       filter.quantity = { $gte: Number(minQuantity) };

// //     const results = await CropResidue.find(filter);

// //     res.json(results);
// //   } catch (error) {
// //     res.status(500).json({ error: "Search failed" });
// //   }
// // };

// // module.exports = { uploadResidue, getResidues, searchResidues };

// const CropResidue = require("../models/CropResidue");

// const uploadResidue = async (req, res) => {
//   try {
//     const imagePaths = req.files.map(
//       (file) => `http://localhost:5000/uploads/${file.filename}`
//     );

//     const residue = new CropResidue({
//       ...req.body,
//       images: imagePaths,
//     });

//     await residue.save();

//     res.json({
//       message: "Residue uploaded successfully!",
//       residue
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Failed to upload residue" });
//   }
// };

// const getResidues = async (req, res) => {
//   try {
//     const residues = await CropResidue.find();
//     res.json(residues);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch residues" });
//   }
// };

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
//     res.status(500).json({ error: "Search failed" });
//   }
// };

// module.exports = { uploadResidue, getResidues, searchResidues };


const CropResidue = require("../models/CropResidue");

const uploadResidue = async (req, res) => {
  try {
    const imagePaths = req.files.map(
      (file) => `http://localhost:5000/uploads/${file.filename}`
    );

    const residue = new CropResidue({
      ...req.body,
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

module.exports = { uploadResidue, getResidues, searchResidues };
