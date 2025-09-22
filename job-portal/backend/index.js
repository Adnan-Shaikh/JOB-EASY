const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());


app.use(cors({
  origin: ["http://localhost:3000","https://job-easy-one.vercel.app/"], // your React app URL
  methods: ["GET", "POST", "PUT", "DELETE"], // allowed HTTP methods
  credentials: true
}));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Protected routes
const auth = require("./middleware/auth");
app.get("/api/profile", auth, (req, res) => {
  res.json({
    message: "This is a protected route",
    user: req.user, // JWT payload
  });
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    // Start server only after DB connects
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
  });

