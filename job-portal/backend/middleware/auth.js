const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1]; // Expect: "Bearer <token>"

  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user info to request
    next(); // allow next middleware/route
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
}

module.exports = auth;