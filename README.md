# AI Video Generator & Scheduler

A powerful SaaS application to automate content creation and scheduling for YouTube, TikTok, and Instagram using AI.

## Features

### Core Features (Planned/In Progress)
- **AI Video Generation**: Turn text prompts into engaging short-form videos with realistic AI avatars and voiceovers.
- **Auto Scheduler**: Plan your content calendar and auto-post to multiple platforms.
- **Analytics Dashboard**: Track views, engagement, and growth.
- **Multi-Platform Support**: Optimized for YouTube Shorts, TikTok, and Instagram Reels.

### Completed Features
- **Landing Page**: High-converting landing page with:
    - **Responsive Navbar**: Includes theme toggle and mobile menu.
    - **Hero Section**: Dynamic gradient background and clear CTA.
    - **Features Grid**: Showcasing core capabilities.
    - **Footer**: Comprehensive links and branding.
- **Theme Support**: Light, Dark, and System modes.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database/Auth**: [Supabase](https://supabase.com/)

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

### 2. Supabase Setup
This project uses Supabase for the database and authentication.

1.  Copy the example environment file:
    ```bash
    cp .env.local.example .env.local
    ```
2.  Update `.env.local` with your Supabase credentials:
    - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase Project URL.
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Anon Key.


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components.
    - `components/landing/`: Landing page specific components.
    - `components/ui/`: Shadcn UI primitives.
- `lib/`: Utility functions.
