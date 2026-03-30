const express = require("express");
const axios = require("axios");
const geminiService = require("../services/geminiService");

const router = express.Router();

async function fetchJobs() {
  try {
    const response = await axios.get("https://remotive.com/api/remote-jobs");

    const jobs = response.data.jobs.slice(0, 5).map((job) => ({
      title: job.title,
      company: job.company_name,
      category: job.category,
    }));

    return jobs;
  } catch (error) {
    console.error("Job API error:", error.message);
    return [];
  }
}

router.post("/analyze", async (req, res) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({ error: "Resume text is required" });
    }

    const jobs = await fetchJobs();

    const analysisText = await geminiService.generateAnalysis(resumeText, jobs);

    return res.json({
      result: analysisText,
      liveJobs: jobs,
      timestamp: new Date().toISOString(),
      agents: ["Resume Analyzer", "Interview Generator", "Roadmap Planner", "Job Match Assistant"],
    });
  } catch (error) {
    console.error("Analyze route error:", error);
    return res.status(500).json({
      error: "Something went wrong in backend analyze route.",
    });
  }
});

module.exports = router;