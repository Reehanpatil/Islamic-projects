🌙 Islamic Platform — Full Stack Project

A modern Islamic community platform built with React (Vite) and Node.js/Express, created to serve the Ummah with learning, jobs, donations, and Islamic tools.

🚀 Tech Stack
Layer Technology
Frontend React + Vite + React Router
Backend Node.js + Express
Database PostgreSQL (future ready)
Auth JWT + Secure Cookies
Infra Monorepo Structure
Deployment Docker / Cloud (future)
✅ Core Features (Project Goals)
📘 Islamic Learning

Quran, Hadith, Islamic articles

Audio/video Islamic content

💳 Donation / Zakat System

Zakat / Sadaqah donation

Transparent donation logs

💼 Job Portal

Muslim-friendly job listings

Employer & job seeker roles

💍 Matrimony (future)

Halal matchmaking profiles

🕌 Mosque & Community (future)

Mosque events & announcements

🕋 Daily Tools (future)

Prayer times

Qibla direction

Tasbeeh counter

📁 Folder Structure
islamic-platform/
├─ apps/
│ ├─ frontend/ # React Vite App
│ └─ backend/ # Node Express API
├─ docs/
├─ infra/
└─ scripts/

🛠 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/islamic-platform.git
cd islamic-platform

2️⃣ Install Frontend
cd apps/frontend
npm install

3️⃣ Install Backend
cd ../backend
npm install

4️⃣ Environment Variables

Create .env file in apps/backend:

PORT=4000
DATABASE_URL=postgres://user:pass@localhost:5432/islamicdb
JWT_SECRET=your_secret_key

Create .env in apps/frontend:

VITE_API_BASE_URL=http://localhost:4000/api

▶️ Run Project
Start Backend
cd apps/backend
npm run dev

Start Frontend
cd apps/frontend
npm run dev

📡 API Test

Visit:

http://localhost:4000/api/health

Should return:

{ "ok": true }

🧠 Roadmap (MVP → Future)

✅ User auth

✅ Learning content

🚧 Job portal

🚧 Donation system

⏳ Prayer tools & Qibla

⏳ Matrimony module

⏳ Mobile Apps

🤝 Contribution

Pull requests welcome!

Branch strategy:

main → stable
feature/\* → development

🙏 Purpose

This project is built Fee Sabeelillah with the intention to benefit the Ummah.
May Allah grant barakah and accept our efforts — Ameen 🤲

📜 License

MIT — free to use, modify & share.

✨ Dua

“Whoever guides someone to goodness will get a reward like the one who did it.”
— Prophet Muhammad ﷺ
