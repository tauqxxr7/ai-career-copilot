async function generateAnalysis(resumeText, jobs = []) {
  const prompt = `
Analyze this resume and provide:

1. Strengths
2. Weaknesses
3. 5 Interview Questions
4. 3-month roadmap
5. Suggest best-fit job roles using this live job data

Live Job Data:
${JSON.stringify(jobs)}

Resume:
${resumeText}
`;

  // your existing Gemini call here
}