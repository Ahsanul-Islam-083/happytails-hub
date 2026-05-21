# 🐾 HappyTails — Hub

> A modern, responsive pet adoption platform where every tail deserves a happy ending.

## 🌐 Live URL

[https://happytails-hub.vercel.app](https://happytails-hub.vercel.app)

---

## 📌 Purpose

HappyTails is a full-stack pet adoption platform built with Next.js. It allows users to explore pets available for adoption, view detailed profiles, and submit adoption requests — all through a clean, recruiter-friendly interface. Pet owners and shelters can manage their listings, review incoming adoption requests, and approve or reject them with ease.

---

## ✨ Features

- **Browse & Search Pets** — Explore all available pets with real-time search by name, filter by species, and sorting support powered by MongoDB `$regex` and `$in` operators.
- **Detailed Pet Profiles & Adoption Requests** — Authenticated users can view full pet details and submit adoption requests including pickup date and a personal message, all tracked with a pending/approved/rejected status.
- **User Dashboard** — A private dashboard for managing your own pet listings (add, edit, delete), viewing all incoming adoption requests per listing, and approving or rejecting them via a modal.
- **My Requests Page** — Users can track all their submitted adoption requests, see real-time statuses, and cancel pending requests.
- **Authentication with Google & Email** — Secure sign-up and login via Better Auth, supporting Google OAuth and email/password. JWT tokens are stored in HTTPOnly cookies and verified in protected routes.
- **Dark / Light Theme Toggle** — Seamlessly switch between themes using `next-themes`, with preferences persisted across sessions.
- **Smooth Animations** — Framer Motion powers page transitions and UI animations for a polished, professional feel.
- **Toast Notifications** — All success and error feedback is delivered via `react-hot-toast` — no `alert()` calls anywhere in the codebase.

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `next` | React framework with SSR and routing |
| `react` / `react-dom` | Core UI library |
| `better-auth` | Authentication (email/password + Google OAuth) |
| `@heroui/react` | UI component library |
| `framer-motion` | Animations and page transitions |
| `next-themes` | Dark/light theme management |
| `react-hot-toast` | Toast notifications |
| `swiper` | Pet card carousels and sliders |
| `lucide-react` | Icon library |
| `react-icons` | Extended icon set |
| `mongodb` | MongoDB client for server-side data access |
| `tailwindcss` | Utility-first CSS framework |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/happytails-hub.git
cd happytails-hub

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your MongoDB URI, Better Auth secret, Google OAuth credentials, etc.

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 🗂️ Project Structure

```
happytails-hub/
├── app/                  # Next.js App Router pages & layouts
│   ├── (main)/           # Public routes (Home, All Pets, Pet Details)
│   ├── (dashboard)/      # Private dashboard routes
│   └── auth/             # Login & Register pages
├── components/           # Reusable UI components
├── lib/                  # Auth config, DB connection, utilities
└── public/               # Static assets
```

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** JavaScript (React 19)
- **Styling:** Tailwind CSS v4 + HeroUI
- **Auth:** Better Auth
- **Database:** MongoDB
- **Deployment:** Vercel

---

*© 2025 HappyTails. All rights reserved.*