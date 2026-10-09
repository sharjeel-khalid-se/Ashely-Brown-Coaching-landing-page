# DEPLOY.md — Private Preview Deployment on Vercel

This guide covers deploying the Coach Ash / Muscle Mommy Method site to a **private Vercel preview** before public launch.

---

## Prerequisites

- Node.js ≥ 18 installed locally
- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (free Hobby tier is fine)
- A [Resend](https://resend.com) account and API key
- The `NEXT_PUBLIC_STAN_STORE_URL` for Coach Ash's Stan Store product

---

## Step 1 — Verify the build passes locally

```bash
npm run build
```

The build must complete with **exit code 0** and no TypeScript or lint errors before pushing. Fix any errors locally first.

---

## Step 2 — Push to a private GitHub repository

1. Create a **new private repository** on GitHub (e.g. `coach-ash-website`).
2. In your project folder, run:

```bash
git init                          # if not already a git repo
git remote add origin https://github.com/YOUR_USERNAME/coach-ash-website.git
git add .
git commit -m "Initial deploy"
git push -u origin main
```

> **Important:** `.env.local` is already git-ignored. Never commit it.

---

## Step 3 — Import the project to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and click **Import Git Repository**.
2. Select the `coach-ash-website` private repo.
3. Leave the framework preset as **Next.js** — Vercel auto-detects it.
4. **Do not** set a custom domain at this stage (preview URL only).
5. Click **Deploy** — Vercel will build and fail if env vars are missing. Add them next.

---

## Step 4 — Set environment variables in Vercel

Go to your project → **Settings → Environment Variables** and add all of the following. Set each one for **Production**, **Preview**, and **Development** environments unless noted otherwise.

| Variable | Where to get it | Example value |
|---|---|---|
| `RESEND_API_KEY` | [resend.com](https://resend.com) → API Keys | `re_xxxxxxxxxxxx` |
| `APPLICATIONS_TO_EMAIL` | The inbox that receives new applications | `ashley@example.com` |
| `NEXT_PUBLIC_STAN_STORE_URL` | Stan Store product page URL | `https://stan.store/CoachAshTraining/p/6-week-challenge-to-restore-your-core-after-babies` |
| `NEXT_PUBLIC_SITE_URL` | Your Vercel preview URL (update when domain is added) | `https://coach-ash-website.vercel.app` |
| `NEXT_PUBLIC_ALLOW_INDEXING` | `false` for preview; change to `true` at public launch | `false` |

After saving, go to **Deployments → Redeploy** to pick up the new variables.

---

## Step 5 — Verify the deployment

1. Open the Vercel preview URL (e.g. `https://coach-ash-website.vercel.app`).
2. Hard-reload the page (`Ctrl+Shift+R` / `Cmd+Shift+R`) and confirm it opens at the **very top** — not scrolled to the form.
3. Check `https://coach-ash-website.vercel.app/robots.txt` — it should read `Disallow: /` (because `NEXT_PUBLIC_ALLOW_INDEXING=false`).

---

## Step 6 — Run a test application

1. Click **Apply Now** or scroll to the form.
2. Complete all 8 steps with test data.
3. On Step 8, use a real email address you have access to.
4. Submit the form.
5. Confirm you receive the notification email at `APPLICATIONS_TO_EMAIL`.
6. Confirm the applicant receives a confirmation email at the address you entered.

---

## Going Live (Public Launch)

When ready to launch publicly:

1. Add your custom domain in **Vercel → Settings → Domains**.
2. Update `NEXT_PUBLIC_SITE_URL` to your custom domain (e.g. `https://www.coachashshtraining.com`).
3. Change `NEXT_PUBLIC_ALLOW_INDEXING` to `true`.
4. Redeploy to apply changes.
5. Verify `https://yourdomain.com/robots.txt` now reads `Allow: /`.
6. Submit the sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`.
