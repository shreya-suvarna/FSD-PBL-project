// backend/controllers/bookingController.js
const Booking = require("../models/Booking");
const CropResidue = require("../models/CropResidue");
// const crypto = require("crypto");
// const Razorpay = require("razorpay");

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID || "",
//   key_secret: process.env.RAZORPAY_KEY_SECRET || ""
// });

const createBooking = async (req, res) => {
  try {
    const { residueId, industryId, quantityBooked, totalPrice, paymentMethod } = req.body;

    const residue = await CropResidue.findById(residueId);
    if (!residue) return res.status(404).json({ message: "Residue not found" });

    if (quantityBooked > residue.quantity) {
      return res.status(400).json({ message: "Requested quantity exceeds available quantity" });
    }

    // if (paymentMethod === "ONLINE") {
    //   // create razorpay order
    //   const options = {
    //     amount: Math.round(totalPrice * 100), // in paise
    //     currency: "INR",
    //     receipt: `rcpt_${Date.now()}`,
    //     payment_capture: 1
    //   };
    //   const order = await razorpay.orders.create(options);

    //   const booking = new Booking({
    //     residueId,
    //     farmerId: residue.farmerId,
    //     industryId,
    //     quantityBooked,
    //     totalPrice,
    //     paymentMethod,
    //     paymentStatus: "pending",
    //     razorpayOrderId: order.id
    //   });

    //   await booking.save();

    //   return res.json({ message: "Booking created", booking, order });
    // } else {
      // COD
      const booking = new Booking({
        residueId,
        farmerId: residue.farmerId,
        industryId,
        quantityBooked,
        totalPrice,
        paymentMethod: "COD",
        paymentStatus: "pending"
      });

      await booking.save();

      const Notification = require("../models/Notification");

// After saving booking
await Notification.create({
  userId: residue.farmerId,
  message: `Your residue "${residue.cropName}" was booked by an industry.`,
});

      return res.json({ message: "Booking created (COD)", booking });
    // }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create booking" });
  }
};

// const verifyPayment = async (req, res) => {
//   try {
//     const { razorpayOrderId, razorpayPaymentId, razorpaySignature, bookingId } = req.body;

//     const generated_signature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(`${razorpayOrderId}|${razorpayPaymentId}`)
//       .digest("hex");

//     if (generated_signature !== razorpaySignature) {
//       await Booking.findByIdAndUpdate(bookingId, { paymentStatus: "failed" });
//       return res.status(400).json({ success: false, message: "Invalid signature" });
//     }

//     const booking = await Booking.findByIdAndUpdate(
//       bookingId,
//       { paymentStatus: "paid", razorpayPaymentId, razorpaySignature },
//       { new: true }
//     );

//     return res.json({ success: true, booking });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Payment verification failed" });
//   }
// };

const getBookingsForFarmer = async (req, res) => {
  try {
    const { farmerId } = req.params;
    const bookings = await Booking.find({ farmerId })
      .populate("residueId")
      .populate("industryId", "companyName email phone");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

const getBookingsForIndustry = async (req, res) => {
  try {
    const { industryId } = req.params;
    const bookings = await Booking.find({ industryId })
      .populate("residueId")
      .populate("farmerId", "name email");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

const farmerConfirm = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { action } = req.body; // "confirm" or "reject"
    if (!["confirm", "reject"].includes(action)) return res.status(400).json({ message: "Invalid action" });

    const update = action === "confirm" ? { status: "FarmerConfirmed" } : { status: "Rejected" };
    const booking = await Booking.findByIdAndUpdate(bookingId, update, { new: true });

    // If confirmed, deduct quantity from residue
    if (action === "confirm") {
      await CropResidue.findByIdAndUpdate(booking.residueId, { $inc: { quantity: -booking.quantityBooked }});
    }

    res.json({ message: `Booking ${action}`, booking });
  } catch (err) {
    res.status(500).json({ error: "Failed to update booking" });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { status } = req.body;
    if (!["OutForDelivery", "Delivered"].includes(status)) return res.status(400).json({ message: "Invalid status" });

    const booking = await Booking.findByIdAndUpdate(bookingId, { status }, { new: true });
    res.json({ message: "Status updated", booking });
  } catch (err) {
    res.status(500).json({ error: "Failed to update status" });
  }
};



module.exports = {
  createBooking,
  // verifyPayment,
  getBookingsForFarmer,
  getBookingsForIndustry,
  farmerConfirm,
  updateStatus
};
