const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// ✅ Gemini init
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ Test route
router.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// ✅ Main AI Route
router.post("/full-analysis", async (req, res, next) => {
  console.log("🤖 Route hit /full-analysis");
  console.log("📝 Body:", req.body);

  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({
        error: "resumeText is required"
      });
    }

    const prompt = `You are a multi-agent career analysis system. Analyze this resume comprehensively:

## RESUME ANALYSIS
**Strengths:**
- List 3-4 key professional strengths

**Weaknesses:**
- List 3-4 areas needing improvement

**Skills Assessment:**
- Technical skills identified
- Experience level evaluation

## INTERVIEW PREPARATION
**Technical Questions (5):**
1. [Question targeting their tech stack]
2. [Question addressing weak areas]
3. [Data structures/algorithms question]
4. [System design question]
5. [Technology-specific question]

**Behavioral Questions (3):**
1. [Project-based scenario]
2. [Problem-solving challenge]
3. [Team collaboration scenario]

## 3-MONTH ROADMAP
**Month 1: Foundation**
- Week 1-2: [Specific learning topics]
- Week 3-4: [Specific learning topics]

**Month 2: Intermediate**
- Week 1-2: [Specific learning topics]
- Week 3-4: [Specific learning topics]

**Month 3: Advanced**
- Week 1-2: [Specific learning topics]
- Week 3-4: [Specific learning topics]

**Recommended Projects:**
1. [Specific project with tech stack]
2. [Specific project with tech stack]
3. [Specific project with tech stack]

Resume to analyze:
${resumeText}`;

    console.log("🔄 Calling Gemini...");

    // ✅ RETURNED TO EARLIER WORKING MODEL
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("✅ Gemini response received");

    res.json({
      result: text,
      timestamp: new Date().toISOString(),
      agents: [
        "Resume Analyzer",
        "Interview Generator",
        "Roadmap Planner"
      ]
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;