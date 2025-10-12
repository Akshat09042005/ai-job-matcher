
# 💼 AI-Powered Job Match Platform

An end-to-end job discovery platform that leverages **Cohere embeddings** to match job seekers with suitable roles based on their profile, experience, skills, and preferences.

---

## 🔗 Live Links

- **Frontend (Firebase Hosting):** https://ai-job-matcher-psi.vercel.app/
- **Backend API (Render):** [https://ai-powered-job-match.onrender.com](https://ai-powered-job-match.onrender.com)


---

## 🛠 Tech Stack

| Layer        | Technology             |
|--------------|------------------------|
| Frontend     | React.js + Tailwind CSS + Vite |
| Backend      | Node.js + Express.js   |
| Database     | MongoDB (Mongoose ORM) |
| AI Engine    | Cohere AI (v2 SDK)     |
| Auth         | JWT with HTTP-only cookies |
| Deployment   | Firebase (frontend) + Render (backend) |




## 🧠 AI Usage & Prompt Logic

We use **Cohere’s `embed-english-v3.0` model** to semantically match users to job descriptions.
