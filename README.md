# Coach Ash — Muscle Mommy Method

Sales landing page for **Ashley Brown, RN** — postpartum fat-loss and core coach.  
Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Resend.

---

## Running Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | From [resend.com](https://resend.com) → API Keys |
| `APPLICATIONS_TO_EMAIL` | Email address that receives coaching applications |
| `NEXT_PUBLIC_STAN_STORE_URL` | Full Stan Store URL for the 6 Week RRR Challenge |
| `NEXT_PUBLIC_SITE_URL` | Your local or deployed URL (e.g. `http://localhost:3000`) |
| `NEXT_PUBLIC_ALLOW_INDEXING` | `false` locally; set `true` only for the public launch |

> `.env.local` is git-ignored — never commit it.

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Editing Copy

**All site copy lives in one file: [`src/content/site.ts`](src/content/site.ts).**

- Edit headlines, body text, button labels, FAQ answers, etc. there.
- Never hardcode copy directly in components.
- Lines marked `// REVIEW` are claims awaiting client approval — do not remove them.
- Use `[PLACEHOLDER: ...]` for missing content (placeholders are hidden in production).

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages and API routes
│   ├── page.tsx          # Home page
│   ├── challenge/        # /challenge page
│   ├── api/apply/        # Coaching application email endpoint
│   ├── layout.tsx        # Root layout (fonts, metadata, header)
│   ├── robots.ts         # robots.txt generation (gated by env var)
│   └── sitemap.ts        # sitemap.xml generation
├── components/           # All React components
├── content/
│   └── site.ts           # ← EDIT COPY HERE
└── lib/                  # Utilities (schema, theme tokens)
```

---

## Production Build

```bash
npm run build
npm start
```

The build must pass with zero errors before deploying.

---

## Deployment

See [DEPLOY.md](DEPLOY.md) for step-by-step Vercel deployment instructions.
