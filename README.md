# 🚀 Prept — Peer-to-Peer Mock Interview Platform

Prept is a state-of-the-art, peer-to-peer technical mock interview platform connecting **Interviewees** (candidates) with **Interviewers** (industry experts). It features a premium, interactive UI with seamless HD video calling, live chat, real-time AI assistance, and automatic post-interview feedback reports.

---

## ✨ Key Features

- **🎯 Double-Sided Onboarding**: Users can register either as a Candidate (practicing interviews) or as an Interviewer (conducting sessions and earning credits).
- **🗓️ Slot-Based Scheduling**: Interviewers set their availability once. Candidates can browse, select, and book slots in one click using their subscription credits.
- **📹 HD Video Calls & Chat**: High-quality video rooms and persistent real-time chat powered by **GetStream Video & Chat SDK**.
- **🤖 Live AI Co-Pilot**: Interviewers get a panel to generate custom technical questions (Frontend, Backend, System Design, DSA, etc.) on-demand during a live call.
- **📊 Automatic AI Feedback**: When a recorded call ends, the transcript is downloaded, decompressed, and evaluated by **Gemini 2.5 Flash-Lite** to compile a detailed candidate performance report.
- **💳 Credit & Withdrawal System**: Integrated payment plan tables. Experts earn credits for completed sessions and can submit cash-out requests, which notify the admin via **Resend & React-Email**.
- **🔒 Shield & Security**: Protected using **Arcjet** for bot detection, request shielding, and rate-limiting on booking/withdrawal operations.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router), React 19
- **Styling**: Tailwind CSS, Framer Motion
- **Authentication**: Clerk (Auth & Subscription plans)
- **Database & ORM**: PostgreSQL, Prisma ORM
- **Video & Messaging**: GetStream SDK
- **Artificial Intelligence**: Google Generative AI (`gemini-2.5-flash-lite`)
- **Security**: Arcjet
- **Emails**: Resend & React-Email

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env` file in the root directory and add the following keys:
```env
# Database
DATABASE_URL="postgresql://..."

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# Stream API
NEXT_PUBLIC_STREAM_API_KEY="..."
STREAM_SECRET_KEY="..."

# Google Gemini API
GEMINI_API_KEY="..."

# Arcjet Security Key
ARCJET_KEY="ajkey_..."

# Resend Mail Credentials
RESEND_API_KEY="..."

# App URL Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
ADMIN_PAYOUT_PASSWORD="your-secure-admin-password"
```

### 3. Initialize the Database
```bash
npx prisma generate
npx prisma db push
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚡ Webhooks & Local Testing

### Local Simulation (Recommended for UI Testing)
To instantly complete a booked session and generate an AI review without setting up a real call:
1. Open Prisma Studio (`npx prisma studio`), locate the `Booking` table, and copy the `id` of your booked session.
2. Paste this ID into the `BOOKING_ID` constant in [prisma/seed.js](file:///c:/Users/DELL/OneDrive/Desktop/Prep/prept/prisma/seed.js#L13).
3. Run the seed script:
   ```bash
   node prisma/seed.js
   ```

### Live Recording & Webhooks (production or ngrok)
1. Expose your server using ngrok:
   ```bash
   npx ngrok http 3000
   ```
2. In the **GetStream Dashboard**, set the Webhook URL to:
   `https://<your-ngrok-subdomain>.ngrok-free.app/api/webhooks/stream`
3. Under the **Webhook Event Types**, ensure **`call.transcription_ready`** and **`call.recording_ready`** are checked.
4. Join the call, click **Start Recording**, speak, stop the recording, and leave the call. Stream will send the recording/transcript webhook which triggers the AI generator.

---

## 🚢 Deploying to Vercel

1. Push your project to GitHub.
2. Import the repository into Vercel.
3. Configure all environment variables on Vercel's dashboard. Set `NEXT_PUBLIC_APP_URL` to your Vercel deployment URL (e.g. `https://your-project.vercel.app`).
4. Click **Deploy**.
5. Update your **GetStream Webhook URL** and your **Clerk Allowed Redirect Origins** to point to your live Vercel domain.
