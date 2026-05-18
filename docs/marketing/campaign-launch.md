# Launch Validation Campaign — SAR-10

## Status: Blocked on deployment — SAR-11 (CTO)

Depends on **SAR-11** (CTO: deploy landing page to `https://sar.sh`). The landing page must be live before posting.

**Two-way door decision made by CMO (2026-05-18):** Campaign copy is finalized. Launch immediately when deployed — no further CEO approval needed.

---

## UTM Tracking Plan

| Channel | utm_source | utm_medium | utm_campaign | utm_content |
|---------|-----------|-----------|-------------|-------------|
| Hacker News | `hackernews` | `social` | `launch-validation` | `show-hn` |
| Twitter/X | `twitter` | `social` | `launch-validation` | `thread` |
| Discord (Next.js) | `discord` | `social` | `launch-validation` | `nextjs` |
| Discord (React) | `discord` | `social` | `launch-validation` | `react` |
| Discord (Indie) | `discord` | `social` | `launch-validation` | `indie-hacking` |

**Measurement targets:** 5% landing → waitlist conversion, <60% bounce rate

**Implemented:** Client-side tracking via `src/lib/track.ts` captures `page_view`, `cta_click`, and `waitlist_signup` events with UTM params. Events POST to `/api/analytics` and persist to `data/events.jsonl`.

---

## 1. Hacker News — Show HN

**Title:** Show HN: SAR – Zero-config deployments for Next.js and Node.js teams

**Body:**

> We built SAR because setting up CI/CD for a small team shouldn't take longer than building the feature.
>
> SAR turns every commit into a live URL. No YAML, no DevOps engineer, no waiting.
>
> **What it does:**
> - Push code → get a production URL in minutes
> - Instant preview URLs for every pull request
> - Zero config — no Dockerfiles, no Terraform, no bash scripts
>
> We're in early access. Would love your feedback:
> https://sar.sh?utm_source=hackernews&utm_medium=social&utm_campaign=launch-validation&utm_content=show-hn
>
> What's your biggest pain point with deployment today?

---

## 2. Twitter/X Thread

**Tweet 1:**
> We spent 2 years watching small engineering teams spend more time on deployment than on product.
>
> So we built SAR — the shipping platform that turns commits into live URLs in minutes.
>
> No config. No ops. Just push and go.
>
> 👇

**Tweet 2:**
> Zero-config deploys for Next.js, React, and Node.js.
>
> Push code → get a URL. Preview every PR before merge. Ship to production with confidence.
>
> No Dockerfiles. No YAML ceremonies. No platform engineer required.

**Tweet 3:**
> We're in early access. Join the waitlist → https://sar.sh?utm_source=twitter&utm_medium=social&utm_campaign=launch-validation&utm_content=thread
>
> Ship fast. Iterate faster.

---

## 3. Discord Messages

### Next.js Discord (#showcase or #deploy)

> Hey folks — I built a zero-config deployment platform for Next.js teams. Push code, get a URL. No YAML, no Docker, no ops.
>
> We're validating the idea and would love feedback from real Next.js devs.
> https://sar.sh?utm_source=discord&utm_medium=social&utm_campaign=launch-validation&utm_content=nextjs
>
> What's your current deploy setup? What's the most painful part?

### React Discord (#tools or #deployment)

> Working on a deployment tool for React/Node.js teams. The pitch: push code → live URL, zero config.
>
> Looking for early feedback from folks who ship React apps.
> https://sar.sh?utm_source=discord&utm_medium=social&utm_campaign=launch-validation&utm_content=react
>
> Would love to hear what your deploy pipeline looks like today.

### Indie Hacking Discord (#builders or #shameless-plug)

> Building SAR — a deploy platform that makes shipping as fast as possible for small teams.
>
> The idea: you push code, we give you a URL. No setup, no config files.
>
> Early access is open: https://sar.sh?utm_source=discord&utm_medium=social&utm_campaign=launch-validation&utm_content=indie-hacking
>
> Would love feedback from other indie hackers. What's your deploy stack and what sucks about it?

---

## 4. Launch Checklist

Copy-paste these from this doc when deploying. All UTM links are pre-configured.

### Pre-launch (CTO)
- [ ] Deploy `main` to production at `https://sar.sh` — see `tasks/SAR-7b-cto-landing-impl.md` for deployment spec
- [ ] Run: `Invoke-WebRequest -Method POST -Body '{"email":"test@example.com"}' https://sar.sh/api/waitlist` → expect 201
- [ ] Run: `Invoke-WebRequest -Method POST -Body '{"event":"test"}' https://sar.sh/api/analytics` → expect 200
- [ ] Confirm `https://sar.sh` resolves and renders correctly on mobile + desktop
- [ ] Notify CMO that URL is live

### Launch sequence (CMO)

**T+0h — Hacker News:**
- [ ] Open https://news.ycombinator.com/submit
- [ ] Title: `Show HN: SAR – Zero-config deployments for Next.js and Node.js teams`
- [ ] Paste body from Section 1 above
- [ ] Monitor comments for 30min, reply to every question

**T+1h — Twitter/X:**
- [ ] Post Tweet 1 from Section 2 above
- [ ] Reply to own thread with Tweet 2
- [ ] Reply to own thread with Tweet 3
- [ ] Pin the thread

**T+2h — Discord:**
- [ ] Post in Next.js Discord (#showcase or #deploy) — Section 3
- [ ] Post in React Discord (#tools or #deployment) — Section 3
- [ ] Post in Indie Hacking Discord (#builders or #shameless-plug) — Section 3

### Post-launch (CMO)
- [ ] Set 48h timer
- [ ] Check `data/events.jsonl` for signups per UTM source
- [ ] Check `data/waitlist.json` for total emails collected
- [ ] Write 48h results report
- [ ] Decide: double down on best channel or try another channel
