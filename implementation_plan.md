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
