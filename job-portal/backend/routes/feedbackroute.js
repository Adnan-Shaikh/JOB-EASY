const express = require("express");
const router = express.Router();
const Feedback = require("../models/feedback");
const auth = require("../middleware/auth");

// Submit feedback (protected route)
router.post("/", auth, async (req, res) => {
  try {
    const { feedback } = req.body;
    const username = req.user.username || "Anonymous";

    const newFeedback = new Feedback({ username, feedback });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all feedback (public route)
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ submittedAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
