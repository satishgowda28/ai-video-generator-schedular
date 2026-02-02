# AI Video Generator & Scheduler

A powerful SaaS application to automate content creation and scheduling for YouTube, TikTok, and Instagram using AI.

## Features

### Core Features (Planned/In Progress)
- **AI Video Generation**: Turn text prompts into engaging short-form videos with realistic AI avatars and voiceovers.
- **Auto Scheduler**: Plan your content calendar and auto-post to multiple platforms.
- **Analytics Dashboard**: Track views, engagement, and growth.
- **Multi-Platform Support**: Optimized for YouTube Shorts, TikTok, and Instagram Reels.

### Completed Features
- **Authentication**: Secure sign-up/login flows via Clerk.
- **User Management**:
    - Automatic user synchronization to Supabase via server actions.
    - Protected Dashboard routes.
- **Landing Page**: High-converting landing page with:
    - **Responsive Navbar**: Includes theme toggle and mobile menu.
    - **Hero Section**: Dynamic gradient background and clear CTA.
    - **Features Grid**: Showcasing core capabilities.
    - **Footer**: Comprehensive links and branding.
- **Dashboard**:
    - **Collapsible Sidebar**: Navigation links (Series, Videos, Guide, Billing, Settings) and Logo.
    - **Header**: User profile and theme toggle.
    - **Layout**: Persistent sidebar and header across dashboard pages.
- **Theme Support**: Light, Dark, and System modes.
- **Video Creation Form**:
    - **Visual Stepper**: 6-step wizard interface.
    - **Step 1: Niche**: Select from presets with icons or custom entry.
    - **Step 2: Topic & Language**: Detailed input, language, and voice selection.
    - **Step 3: Background Music**: Select mood/genre for background audio.
    - **Step 4: Video Style**: Visual style selection (Realist, Cartoon, etc.) with previews.
    - **Step 5: Caption Style**: Animated caption style selection.
    - **Step 6: Review & Generate**: Final review of all settings before generation.


## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database**: [Supabase](https://supabase.com/)
- **Authentication**: [Clerk](https://clerk.com/)

## Getting Started

### 1. Project Setup
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 2. Environment Variables Setup
Copy the example environment file and rename it to `.env.local`:
```bash
cp .env.local.example .env.local
```

### 3. Supabase Setup
This project uses Supabase for the database. Update `.env.local` with your Supabase credentials:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase Project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Anon Key.
- `SUPABASE_SERVICE_ROLE_KEY`: Your **Service Role Key** (Required for user sync to bypass RLS).

**Database Schema:**
Ensure your Supabase project has a `users` table with the following columns:
- `id` (bigint, primary key)
- `user_id` (text, Clerk User ID)
- `email` (text)
- `name` (text, nullable)
- `created_at` (timestamp, default now())

### 4. Clerk Authentication Setup
This project uses Clerk for authentication. Update `.env.local` with your Clerk keys:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router pages and layouts.
    - `dashboard/`: Protected dashboard routes and layout.
    - `(auth)/`: Authentication pages (sign-in, sign-up).
- `components/`: Reusable UI components.
    - `landing/`: Landing page specific components.
    - `dashboard/`: Dashboard specific components (Sidebar, Header).
    - `ui/`: Shadcn UI primitives.
- `actions/`: Server actions (e.g., user synchronization).
- `lib/`: Utility functions and clients (Supabase, etc.).
- `public/`: Static assets (images, logo).
