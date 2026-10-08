# Project Rules: Coach Ash — Muscle Mommy Method

This project follows the rules defined in [`.agent/rules/project.md`](file:///d:/Client%20Work/Ashely%20Brown/website/.agent/rules/project.md).

## 1. Project Overview
- **Client**: "Coach Ash" (Ashley Brown, RN) — Online postpartum fat-loss and core coach.
- **Program**: "Muscle Mommy Method / Muscle Mommy Collective" (*Restore the core, Rehab the abs, Rebuild the body*).
- **Deliverable**: One-page long-form sales landing page.

## 2. Core Goals
1. **Coaching Applications**: Collect high-intent coaching applications through an interactive multi-step form.
2. **Digital Product Sales**: Sell a \$97 guide through an external Stan Store link.

## 3. Approved Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms & Validation**: `react-hook-form` + `zod`
- **Icons**: `lucide-react`
- **Email Delivery**: `resend`
- **Constraint**: **No other UI libraries** unless explicitly requested by the user.

## 4. Engineering & Content Rules
- **Mobile-First**: Primary traffic originates from Instagram on mobile. Prioritize mobile viewports.
- **Copy Management**: ALL site copy lives in `src/content/site.ts`. Never hardcode copy in components. Never rewrite the client's copy; render it as written.
- **Review Comments**: Comments marked `REVIEW` in `src/content/site.ts` are claims awaiting client approval. Do not edit them; the user will handle them.
- **Content Integrity**: Never invent testimonials, statistics, credentials, prices, or guarantees. For missing content, use `[PLACEHOLDER: ...]`, visible in dev only and hidden in prod.
- **Accessibility**: Semantic HTML, labels on inputs, visible focus states, alt text on all images, respect `prefers-reduced-motion`.
- **Images**: Use `next/image` for all images.
- **Environment Variables**: Private or changeable values (Stan Store URL, Resend email keys) go in environment variables.
- **Task Wrap-up**: After each task, list changed files and detail how to run and test.
