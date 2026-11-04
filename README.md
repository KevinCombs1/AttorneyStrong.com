# AttorneyStrong.com — InjuryProof Network

Next.js app hosted free on Vercel.

## What's included

- **Landing page** with medical white/black buttons (1.5x taller, bigger text)
- **Lead forms** (hero + bottom) that store all submissions and email kevinjcombs1@gmail.com instantly via Resend
- **Daily 8:00am PST digest email** with all leads from the past 24 hours (Vercel Cron)
- **Doctor Login** button (top-right) → `/dashboard`
- **Dashboard** at `/dashboard` showing all leads with CSV download
  - Login: `kevin@travelmana.com` / `FranklinFocus1000`

## Deployment to Vercel (free)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
```
Push to a new GitHub repo.

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up / log in
2. Click "New Project" → import your GitHub repo
3. No build config needed — Vercel auto-detects Next.js
4. Click "Deploy"

### 3. Add environment variable
In your Vercel project settings → Environment Variables:
- `RESEND_API_KEY` = your Resend API key (get one at [resend.com/api-keys](https://resend.com/api-keys))

### 4. Verify Resend sender domain
The default sender is `onboarding@resend.dev` (Resend's testing domain).
For production, add and verify your own domain in Resend, then update the `from` address in `lib/leads.js`.

### 5. Vercel Cron
The `vercel.json` file includes a cron that hits `/api/daily-digest` at 16:00 UTC (8:00am PST) every day. This is supported on Vercel's free tier.

## Local development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`

## Important note on lead storage
Leads are stored in the Vercel serverless `/tmp` directory. This works for the free tier but is ephemeral — if you need persistent storage, connect a free Supabase database and swap the storage logic in `lib/leads.js`.
