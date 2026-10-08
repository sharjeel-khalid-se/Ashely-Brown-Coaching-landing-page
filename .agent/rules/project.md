# Project Rules: Coach Ash — Muscle Mommy Method

## 1. Project Overview
- **Client**: "Coach Ash" (Ashley Brown, RN) — Online postpartum fat-loss and core coach.
- **Program**: "Muscle Mommy Method / Muscle Mommy Collective" (*Restore the core, Rehab the abs, Rebuild the body*).
- **Deliverable**: One-page long-form sales landing page.

---

## 2. Core Goals
1. **Coaching Applications**: Collect high-intent coaching applications through an interactive multi-step form.
2. **Digital Product Sales**: Sell a \$97 guide through an external Stan Store link.

---

## 3. Approved Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms & Validation**: `react-hook-form` + `zod`
- **Icons**: `lucide-react`
- **Email Delivery**: `resend`
- **Constraint**: **No other UI libraries** unless explicitly requested by the user.

---

## 4. Engineering & Content Rules

### Mobile-First
- Primary traffic originates from Instagram on mobile devices.
- Design, optimize, and test all layouts for mobile screens first before expanding to desktop breakpoints.

### Single Source of Copy (`src/content/site.ts`)
- **ALL site copy lives in `src/content/site.ts`.**
- Never hardcode copy inside components.
- Never rewrite or paraphrase the client's copy — render it exactly as written.
- Comments marked `REVIEW` in `src/content/site.ts` indicate claims awaiting client approval. **Do not edit them**; the client/user will handle them directly.

### Content Integrity & Placeholders
- **Never invent** testimonials, statistics, credentials, prices, or guarantees.
- For missing or unconfirmed content, use a visible placeholder format: `[PLACEHOLDER: ...]`.
- Placeholders must only be visible in development mode and strictly hidden in production builds.

### Accessibility (a11y)
- Use semantic HTML tags (`<main>`, `<header>`, `<section>`, `<nav>`, `<button>`, etc.).
- Ensure explicit labels on all form inputs.
- Ensure clearly visible `:focus` and `:focus-visible` states.
- Provide descriptive `alt` text for all images.
- Respect `prefers-reduced-motion` for all transitions and animations.

### Media & Assets
- Use `next/image` (`<Image />`) for all images without exception.

### Environment & Secrets
- Private, credentialed, or variable values (e.g., Stan Store URL, Resend API keys) must always be stored in environment variables (`.env.local` / process.env). Never hardcode them.

### Workflow & Task Completion Protocol
- After completing every task:
  1. Provide a comprehensive list of all files created or modified.
  2. Provide clear, step-by-step instructions on how to run and verify/test the changes.
