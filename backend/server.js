require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 AI Career Copilot Server running on port ${PORT}`);
  console.log("🤖 Multi-Agent Architecture: Ready");
  console.log("🔑 Google Gemini Integration: Configured");
});
