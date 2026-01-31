# Landing Page Implementation Plan

## Goal Description
Create a modern, high-converting landing page for the AI Video Generator & Scheduler SaaS. The page will feature a responsive navbar with a theme toggle, a hero section with dynamic visuals, a features section highlighting core capabilities, and a comprehensive footer. The design will be premium, using "wow" factors like gradients and animations.

## User Review Required
None.

## Proposed Changes

### Configuration & Setup
#### [NEW] [theme-provider.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/components/theme-provider.tsx)
- Create a `ThemeProvider` component using `next-themes` to handle light/dark mode.

#### [MODIFY] [layout.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/app/layout.tsx)
- Wrap the application in `ThemeProvider`.
- Ensure consistent font usage (Geist Sans/Mono).

### Components
I will create a new directory `components/landing` to organize landing page specific components.

#### [NEW] [navbar.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/components/landing/navbar.tsx)
- Logo on the left.
- Navigation links (Features, Pricing, About) in the center (desktop).
- User actions (Login/Get Started) and **Theme Toggle** on the right.
- Mobile menu sheet for smaller screens.

#### [NEW] [mode-toggle.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/components/mode-toggle.tsx)
- A dropdown or button to switch between Light, Dark, and System themes.

#### [NEW] [hero.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/components/landing/hero.tsx)
- Large headline: "Automate Your content creation with AI".
- Subheadline explaining value prop (YouTube, TikTok, Instagram).
- Primary CTA "Start Generating Free".
- Visual element (abstract gradient or placeholder for app interface).

#### [NEW] [features.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/components/landing/features.tsx)
- Grid layout displaying key features:
    1.  **AI Video Generation**: Text to video magic.
    2.  **Auto Scheduler**: Post to all platforms automatically.
    3.  **Analytics**: Track performance.
    4.  **Multi-Platform**: YouTube, Instagram, TikTok.

#### [NEW] [footer.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/components/landing/footer.tsx)
- 4-column layout:
    - Brand info & tagline.
    - Product links (Features, Pricing).
    - Company links (About, Careers).
    - Legal (Privacy, Terms).
- Copyright notice.
- Social media icons.

### Pages
#### [MODIFY] [page.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/app/page.tsx)
- Replace default Next.js content with the assembled landing page:
    - `<Navbar />`
    - `<Hero />`
    - `<Features />`
    - `<Footer />`

### Supabase Integration
#### [NEW] [package.json](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/package.json)
- Install `@supabase/supabase-js` and `@supabase/ssr`.

#### [NEW] [.env.local.example](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/.env.local.example)
- Add templates for `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

#### [NEW] [lib/supabase/client.ts](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/lib/supabase/client.ts)
- Create a typed Supabase client for client-side components using `createBrowserClient`.

#### [NEW] [lib/supabase/server.ts](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/lib/supabase/server.ts)
- Create a typed Supabase client for server-side components (Server Actions, Route Handlers) using `createServerClient` with cookie handling.

### Clerk Authentication
#### [NEW] [package.json](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/package.json)
- Install `@clerk/nextjs`.

#### [NEW] [.env.local.example](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/.env.local.example)
- Add templates for `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_SIGN_IN_URL`, and `NEXT_PUBLIC_CLERK_SIGN_UP_URL`.

#### [NEW] [middleware.ts](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/middleware.ts)
- Create middleware to protect routes using `clerkMiddleware`.

#### [MODIFY] [layout.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/app/layout.tsx)
- Wrap the main application in `ClerkProvider`.

#### [NEW] [app/sign-in/[[...sign-in]]/page.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/app/sign-in/[[...sign-in]]/page.tsx)
- Create a Sign In page with `<SignIn />` component.

#### [NEW] [app/sign-up/[[...sign-up]]/page.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/app/sign-up/[[...sign-up]]/page.tsx)
- Create a Sign Up page with `<SignUp />` component.

### User Synchronization & Dashboard
#### [NEW] [supabase/schema.sql](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/supabase/schema.sql)
- Create SQL file with `users` table definition (`id`, `email`, `first_name`, `last_name`, `image_url`, `created_at`).

#### [NEW] [app/dashboard/page.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/app/dashboard/page.tsx)
- Create a protected dashboard page.
- Implement "Lazy Sync": Check if user exists in Supabase. If not, insert user data from Clerk.

#### [MODIFY] [components/landing/navbar.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/components/landing/navbar.tsx)
- Add "Dashboard" button.
- Logic: If authenticated -> Link to `/dashboard`. If not -> Link to `/sign-up`.

#### [MODIFY] [components/landing/hero.tsx](file:///Users/satishgowda/DEV/AI_Learning/ai_video_generator_schedular/components/landing/hero.tsx)
- Update CTA to point to `/dashboard` (which will redirect to sign-up if needed, or we can handle it in the link logic).



## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no type errors or build failures.

### Manual Verification
- **Theme Toggle**: Click the toggle at top right (and in mobile menu if applicable) to verify light/dark mode switching works and persists.
- **Responsiveness**:
    - Open the page in a browser.
    - Resize window to mobile width (<768px). Verify hamburger menu appears and layout stacks correctly.
    - Resize to desktop. Verify full nav and grid layouts.
- **Visual Check**:
    - Confirm fonts are loaded.
    - Confirm gradients and animations play.
- **Supabase Connection**:
    - verify that the supabase client can connect to the database by checking the network tab or console logs for any connection errors.
- **Clerk Authentication**:
    - Verify navigating to `/sign-in` and `/sign-up` shows the Clerk forms.
    - Test signing up a new user (if keys are valid) or checking the redirect logic.
- **User Sync & Dashboard**:
    - Verify navigating to `/dashboard` redirects efficiently or shows content if logged in.
    - Verify "Dashboard" button appears in Navbar/Hero and links correctly.
    - (Manual DB Check): Verify user record appears in Supabase `users` table after accessing dashboard.
