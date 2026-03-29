const express = require("express");
const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({ error: "Resume text is required" });
    }

    // TEMPORARY TEST RESPONSE
    return res.json({
      result: `Analysis Result\n\nYour resume says:\n${resumeText}\n\nThis means your backend route is working correctly.`,
    });
  } catch (error) {
    console.error("Analyze route error:", error);
    return res.status(500).json({
      error: "Something went wrong in backend analyze route",
    });
  }
});

module.exports = router;