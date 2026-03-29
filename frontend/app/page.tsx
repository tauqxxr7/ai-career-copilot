"use client";

import { useState } from "react";

export default function Home() {
  const [resumeText, setResumeText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const sampleResume =
    "I am a computer engineering student skilled in Python, JavaScript and DSA.";

  const analyzeResume = async () => {
    if (!resumeText.trim()) {
      alert("Please enter your resume text first.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/analyze`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ resumeText }),
        }
      );

      const data = await response.json();

      if (data.result) {
        setResult(data.result);
      } else if (data.error) {
        setResult("Error: " + data.error);
      } else {
        setResult("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setResult("Failed to connect to backend.");
    }

    setLoading(false);
  };

  const clearAll = () => {
    setResumeText("");
    setResult("");
  };

  const useSample = () => {
    setResumeText(sampleResume);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold mb-4">
            🚀 AI Career Copilot
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Analyze resumes, discover strengths and weaknesses, generate
            interview questions, and get a personalized 3-month roadmap using
            Google Gemini AI.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">📄 Resume Analysis</h2>
            <p className="text-slate-300">
              Get strengths, weaknesses, and skill evaluation instantly.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              🎯 Interview Questions
            </h2>
            <p className="text-slate-300">
              Receive technical and behavioral interview prep questions.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">🛣 Career Roadmap</h2>
            <p className="text-slate-300">
              Get a personalized 3-month roadmap to improve your profile.
            </p>
          </div>
        </div>

        {/* INPUT BOX */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg mb-8">
          <label className="block text-lg font-semibold mb-3">
            Paste Your Resume / Intro
          </label>

          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Paste your resume text here..."
            rows={10}
            className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 text-white outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex flex-wrap gap-4 mt-5">
            <button
              onClick={analyzeResume}
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              {loading ? "Analyzing..." : "Analyze Resume"}
            </button>

            <button
              onClick={clearAll}
              className="bg-slate-700 hover:bg-slate-600 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              Clear
            </button>

            <button
              onClick={useSample}
              className="bg-emerald-600 hover:bg-emerald-700 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              Use Sample Resume
            </button>
          </div>
        </div>

        {/* ATS SCORE BOX */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/20 rounded-2xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-2">📊 ATS Readiness</h2>
          <p className="text-slate-300">
            Current version: <span className="font-bold text-white">Basic AI Analysis Mode</span>
          </p>
          <p className="text-sm text-slate-400 mt-2">
            You can later upgrade this into a real ATS scoring system.
          </p>
        </div>

        {/* RESULT PANEL */}
        {result && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">🧠 Analysis Result</h2>
            <div className="whitespace-pre-wrap text-slate-200 leading-8">
              {result}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}