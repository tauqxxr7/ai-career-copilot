\# 🚀 AI Career Copilot



\*\*AI Career Copilot\*\* is a GenAI-powered career assistant built for students, freshers, and early professionals.



It helps users turn a simple resume or profile summary into:



\- Resume Analysis

\- Strengths \& Weaknesses

\- Skills Assessment

\- Interview Questions

\- 3-Month Learning Roadmap

\- Recommended Projects



\---



\## 🌟 Problem It Solves



Many students know how to code but struggle with:



\- Writing a strong resume

\- Understanding their skill gaps

\- Preparing for interviews

\- Knowing what to learn next



\*\*AI Career Copilot\*\* solves this by acting like a \*\*personal AI career mentor\*\*.



\---



\## 💡 Features



\### ✅ Current MVP

\- Paste resume / profile summary

\- AI-powered resume analysis

\- Strengths identification

\- Weaknesses detection

\- Skills assessment

\- Technical interview questions

\- Behavioral interview questions

\- 3-month roadmap

\- Project recommendations

\- Clean web interface



\### 🔮 Planned Features

\- PDF Resume Upload

\- ATS Score Generator

\- Resume Rewriter

\- Interview Answer Generator

\- Role-Based Career Guidance

\- LinkedIn Profile Review



\---



\## 🧠 How It Works



\### Flow:

User Input → Frontend → Backend API → Google Gemini → Structured Career Output



\### AI Roles Used:

\- \*\*Resume Analyzer\*\*

\- \*\*Interview Coach\*\*

\- \*\*Roadmap Planner\*\*



This creates a \*\*multi-agent inspired GenAI workflow\*\*.



\---



\## 🏗️ Tech Stack



\### Frontend

\- Next.js

\- React

\- CSS



\### Backend

\- Node.js

\- Express.js



\### AI Layer

\- Google Gemini API



\### Tools

\- Git

\- GitHub

\- VS Code

\- Postman



\### Deployment

\- Render (Backend)

\- Vercel (Frontend)



\---



\## 📂 Project Structure



```bash

ai-career-copilot/

│

├── backend/

│   ├── src/

│   ├── server.js

│   ├── package.json

│   └── .env

│

├── frontend/

│   ├── app/

│   ├── public/

│   ├── package.json

│   └── next.config.ts

│

└── README.md

```



\---



\## ⚙️ Local Setup



\### 1️⃣ Clone the Repository



```bash

git clone https://github.com/YOUR-USERNAME/ai-career-copilot.git

cd ai-career-copilot

```



\---



\## 🔧 Backend Setup



```bash

cd backend

npm install

```



Create a `.env` file inside `backend`:



```env

GEMINI\_API\_KEY=your\_google\_gemini\_api\_key

PORT=5000

```



Start backend:



```bash

node server.js

```



Backend runs on:



```bash

http://localhost:5000

```



\---



\## 🎨 Frontend Setup



Open a new terminal:



```bash

cd frontend

npm install

npm run dev

```



Frontend runs on:



```bash

http://localhost:3000

```



\---



\## 📡 API Endpoint



\### Analyze Resume



\*\*POST\*\* `/analyze`



\### Example Request Body



```json

{

&#x20; "resumeText": "I am a computer engineering student skilled in Python, JavaScript and DSA"

}

```



\### Example Response



```json

{

&#x20; "result": "Detailed AI-generated resume analysis..."

}

```



\---



\## 📸 Screenshots



\### Home Page

\_Add screenshot here\_



\### AI Analysis Output

\_Add screenshot here\_



\### Backend Running

\_Add screenshot here\_



\---



\## 🚀 Deployment Links



\### Backend

\[Live Backend API](https://ai-career-copilot-45sc.onrender.com)



\### Frontend

\_Add your Vercel frontend link here\_



\---



\## 🏆 Why This Project Stands Out



Unlike traditional resume checkers, \*\*AI Career Copilot\*\* doesn’t just point out problems.



It also tells users:



\- what they are already good at

\- what they should improve

\- what interview questions to prepare

\- what projects to build

\- what roadmap to follow



\### USP:

> \*\*An AI-powered personal career mentor for students and freshers\*\*



\---



\## 📈 Future Scope



This project can be expanded into:



\- AI Placement Assistant for colleges

\- Full ATS Resume Platform

\- Interview Practice Assistant

\- Career Roadmap Dashboard

\- Student Employability SaaS Tool



\---



\## 👨‍💻 Author



\*\*Tauqeer Bharde\*\*



\---



\## 📜 License



This project is built for learning, innovation, and hackathon submission purposes.

