const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Important: Middleware to parse JSON comes before routes
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "https://job-easy-one.vercel.app/"], // your frontend URLs
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Import routes
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/jobsposting");
const feedbackRoutes = require("./routes/feedbackroute"); // Assuming filename is feedbackroute.js

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/jobsposting", jobRoutes);
app.use("/api/feedback", feedbackRoutes);

// Protected route example
const auth = require("./middleware/auth");
app.get("/api/profile", auth, (req, res) => {
  res.json({
    message: "This is a protected route",
    user: req.user, // JWT payload from middleware
  });
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
