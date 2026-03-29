const express = require("express");
const analysisRoutes = require("./analysis");

const router = express.Router();

// Health check route
router.get("/", (req, res) => {
  res.send("AI Career Copilot Backend 🚀");
});

// Use specific route modules
router.use("/", analysisRoutes);

module.exports = router;
