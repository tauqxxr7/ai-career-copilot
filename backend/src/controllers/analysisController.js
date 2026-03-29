const geminiService = require("../services/geminiService");

const analyzeResume = async (req, res, next) => {
  console.log("🤖 Multi-Agent Analysis Started");
  console.log("📝 Request body:", req.body);

  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({
        error: "resumeText is required in request body"
      });
    }

    const analysisText = await geminiService.generateAnalysis(resumeText);
    
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
