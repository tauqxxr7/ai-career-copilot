const geminiService = require("../services/geminiService");
const axios = require("axios");
async function fetchJobs() {
  try {
    const response = await axios.get("https://remotive.com/api/remote-jobs");

    const jobs = response.data.jobs.slice(0, 5).map(job => ({
      title: job.title,
      company: job.company_name,
      category: job.category
    }));

    return jobs;
  } catch (error) {
    console.log("Job API error:", error.message);
    return [];
  }
}
const analyzeResume = async (req, res, next) => {
  console.log("🤖 Multi-Agent Analysis Started");
  console.log("📝 Request body:", req.body);

  try {
    const { resumeText } = req.body;
const jobs = await fetchJobs();
    if (!resumeText) {
      return res.status(400).json({
        error: "resumeText is required in request body"
      });
    }

   const analysisText = await geminiService.generateAnalysis(resumeText, jobs);
    
    console.log("✅ Multi-Agent Analysis Complete");

    res.json({
      result: analysisText,
      timestamp: new Date().toISOString(),
      agents: ["Resume Analyzer", "Interview Generator", "Roadmap Planner"]
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  analyzeResume
};
