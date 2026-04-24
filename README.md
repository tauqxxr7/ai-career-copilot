# AI Career Copilot

> GenAI career assistant for resume analysis, interview prep, roadmap generation, and skill growth.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-111827?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Gemini](https://img.shields.io/badge/Gemini_API-1A73E8?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Render](https://img.shields.io/badge/Render-111827?style=for-the-badge&logo=render&logoColor=46E3B7)](https://render.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![Source Code](https://img.shields.io/badge/Source_Code-111827?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tauqxxr7/ai-career-copilot)
[![Backend API](https://img.shields.io/badge/Backend_API-Live-46E3B7?style=for-the-badge)](https://ai-career-copilot-45sc.onrender.com)

## Overview

AI Career Copilot is a full-stack AI application that acts like a practical career co-pilot for students, freshers, and early professionals. Instead of only critiquing a resume, it turns a profile summary into structured guidance users can act on immediately.

The app analyzes resume content, identifies strengths and skill gaps, suggests interview questions, generates a short learning roadmap, and recommends project directions. It is designed as a product-focused AI workflow, not just a single prompt wrapped in a UI.

## What It Does

- Resume and profile analysis
- Strength and weakness identification
- Skill-gap detection
- Technical and behavioral interview prep
- 3-month roadmap generation
- Project recommendations based on current profile
- External job-data enrichment using Remotive Jobs API

## Why It Stands Out

- Product-oriented AI workflow instead of a one-off chatbot response
- Full-stack architecture with frontend, backend, API integration, and AI orchestration
- Useful for real users preparing for placements, internships, and early-career roles
- Strong portfolio signal for AI application engineering and GenAI product thinking

## Architecture

```text
User Resume Input
  -> Next.js frontend
  -> Express API
  -> Gemini analysis pipeline
  -> Optional external jobs data via Remotive
  -> Structured career guidance output
```

## Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS
- TypeScript-ready project structure

### Backend

- Node.js
- Express.js

### AI and Integrations

- Gemini API
- Remotive Jobs API

### Deployment

- Render for backend
- Vercel for frontend

## Project Structure

```text
ai-career-copilot/
  backend/
    src/
      config/
      controllers/
      middlewares/
      routes/
      services/
    server.js
  frontend/
    app/
  google-adk-agent/
  README.md
```

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/tauqxxr7/ai-career-copilot.git
cd ai-career-copilot
```

### 2. Start the backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### 3. Start the frontend

Open a new terminal:

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

### 4. Open the app

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## Environment Variables

### `backend/.env`

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
REMOTIVE_API_BASE_URL=https://remotive.com/api/remote-jobs
```

### `frontend/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## API

### `POST /analyze`

Request body:

```json
{
  "resumeText": "Computer engineering student with Python, JavaScript, and DSA experience"
}
```

## Screenshots

### Landing Page

`Add screenshot: docs/screenshots/home.png`

### Resume Analysis Output

`Add screenshot: docs/screenshots/analysis.png`

### Roadmap / Recommendation State

`Add screenshot: docs/screenshots/roadmap.png`

## Demo Notes

- Live frontend link: `Add Vercel URL here`
- Backend API is live on Render: `https://ai-career-copilot-45sc.onrender.com`

## Future Improvements

- Resume upload with PDF parsing
- ATS scoring and resume rewrite suggestions
- Role-specific guidance flows
- Better state persistence and user sessions
- Richer job-market alignment signals

## License

Built for learning, experimentation, portfolio growth, and hackathon-style product development.
