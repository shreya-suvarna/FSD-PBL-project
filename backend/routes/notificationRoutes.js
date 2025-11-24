// const express = require("express");
// const router = express.Router();
// const Notification = require("../models/Notification");

// router.get("/:farmerId", async (req, res) => {
//   const notifications = await Notification.find({ userId: req.params.farmerId });
//   res.json(notifications);
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");

// Get notifications for a farmer
router.get("/:farmerId", async (req, res) => {
  try {
    const data = await Notification.find({ farmerId: req.params.farmerId });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
});

module.exports = router;
