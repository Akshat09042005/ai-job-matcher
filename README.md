
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

---

## ⚙️ Project Setup

### 📦 Backend (Express + MongoDB)

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ai_job
JWT_SECRET=your_jwt_secret
COHERE_API_KEY=your_cohere_api_key
FRONTEND_URL=http://localhost:5173
```

Run the backend server:

```bash
npm run dev
```

### 💻 Frontend (React + Tailwind + Vite)

```bash
cd client
npm install
npm run dev
```

Tailwind is configured via `postcss.config.cjs` and `tailwind.config.js`.

---

## 🧠 AI Usage & Prompt Logic

We use **Cohere’s `embed-english-v3.0` model** to semantically match users to job descriptions.

### Prompt Design

A user's profile is converted into a plain-text prompt such as:

```text
Skills: React, Node.js, AWS. Experience: 3 years. Preferences: Remote only.
```

This text is embedded and compared with each job’s embedding using **cosine similarity**. The top 3 matches are returned.

---

## 📡 API Documentation

### 🌐 Base URL

```
https://ai-powered-job-match.onrender.com/api
```

### 👤 User Routes

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| POST   | `/users/register`     | Register a new user      |
| POST   | `/users/login`        | Login and receive JWT    |
| POST   | `/users/logout`       | Logout & clear cookie    |
| GET    | `/users/validateToken`| Validate active session  |
| GET    | `/users/profile`      | Fetch user profile (auth)|
| PUT    | `/users/profile`      | Update user profile (auth)|

### 💼 Job Routes

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | `/jobs`              | Fetch all jobs               |
| POST   | `/jobs`              | Create a job (admin use)     |
| DELETE | `/jobs/:id`          | Delete a job by ID           |
| POST   | `/jobs/recommend`    | Get top 3 AI-based job matches |

**Request Body for `/jobs/recommend`:**

```json
{
  "name": "Rahul",
  "experience": 3,
  "skills": ["React", "Node.js", "MongoDB"],
  "preferences": "remote backend"
}
```

---

## 🧱 Code Architecture

### 📁 Folder Overview

```
ai-job-match/
│
├── client/
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Icons, images
│   │   ├── components/         # Navbar, JobCard
│   │   ├── context/            # AuthContext
│   │   ├── pages/              # Home, Jobs, Login, Register
│   │   ├── App.jsx             # Routes & Layout
│   │   └── index.css           # Tailwind base
│
├── server/
│   ├── controllers/            # jobController.js, userController.js
│   ├── middleware/             # auth, error handling, validators
│   ├── models/                 # Mongoose schemas (User, Job)
│   ├── routes/                 # API routes
│   ├── utils/                  # DB connection
│   ├── seed/                   # Job seeder script
│   └── server.js               # App entry point
```

---

## ⚖️ Assumptions & Trade-Offs

- ⏱️ AI matching is synchronous for MVP simplicity
- 🔐 Authentication is cookie-based for cross-origin support
- 🚫 No file uploads or resumes — matching is profile-based
- 📄 Job creation is manual or seeded (no admin dashboard)
- ⚙️ Job search is not paginated; assumes small dataset
- 🌐 Render backend may have cold start latency (~50s)

---

## ✅ Submission Checklist

- ✅ Public GitHub repository with all code
- ✅ Frontend deployed on Firebase
- ✅ Backend deployed on Render
- ✅ README with:
  - Setup instructions
  - AI logic and prompt design
  - Full API documentation
  - Architecture overview
  - Assumptions/trade-offs

---


