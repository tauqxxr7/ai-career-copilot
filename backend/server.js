require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Validate API key exists
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY missing from .env file");
  process.exit(1);
}

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Health check route
app.get("/", (req, res) => {
  res.send("AI Career Copilot Backend 🚀");
});

// Multi-agent analysis route
app.post("/full-analysis", async (req, res) => {
  console.log("🤖 Multi-Agent Analysis Started");
  console.log("📝 Request body:", req.body);

  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({ 
        error: "resumeText is required in request body" 
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

    console.log("🔄 Calling Google Gemini...");

    // Use Gemini 1.5 Flash - fastest and most supported
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      }
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("✅ Multi-Agent Analysis Complete");

    res.json({ 
      result: text,
      timestamp: new Date().toISOString(),
      agents: ["Resume Analyzer", "Interview Generator", "Roadmap Planner"]
    });

  } catch (error) {
    console.error("❌ Analysis Error:", error.message);

    res.status(500).json({
      error: error.message,
      suggestion: "Check API key configuration and Google AI Studio setup"
    });
  }
});

// Start server
app.listen(5000, () => {
  console.log("🚀 AI Career Copilot Server running on port 5000");
  console.log("🤖 Multi-Agent Architecture: Ready");
  console.log("🔑 Google Gemini Integration: Configured");
});
