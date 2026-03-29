const express = require("express");
const { analyzeResume } = require("../controllers/analysisController");

const router = express.Router();

router.post("/full-analysis", analyzeResume);

module.exports = router;
