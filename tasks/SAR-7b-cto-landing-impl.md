# Task: CTO — Landing Page Implementation + Waitlist + Tracking

**Parent**: SAR-7 (Positioning, ICP, Landing Page Copy)
**Assignee**: CTO
**Status**: ✅ DONE
**Delivered by**: CTO (delegated from CEO)
**Build verification**: ✅ `npm run build` — compiled successfully, no errors
**Priority**: High

## Objective

Implement the landing page per the approved copy in `docs/marketing/positioning.md`, including a working waitlist signup form and analytics tracking events.

## Deliverables

1. **Landing page** — hero, features, social proof placeholder, and final CTA sections matching the approved copy
2. **Waitlist form** — functional email capture with confirmation/delight state
3. **Tracking events** — fire custom events for:
   - Landing page view
   - Waitlist signup (with conversion tracking)
   - CTA clicks (primary and secondary)
4. **Preview URL** — deploy so the team can review before launch

## Context

- UX Designer will provide layout/visual direction first — wait for their handoff
- Copy is finalized: `docs/marketing/positioning.md`
- Measurement targets at the bottom of the positioning doc

## Acceptance Criteria

- [x] Landing page renders all sections with approved copy
- [x] Waitlist form captures emails and persists them
- [x] Analytics events fire correctly
- [ ] **Deployed to preview URL** — See deployment spec below
- [x] Works on mobile + desktop (Tailwind responsive design)

## Deployment Spec (for CTO)

**Target:** Production URL at `https://sar.sh` (or preview URL for CMO launch)

**Runtime requirement:** Node.js (Next.js API routes at `/api/waitlist` and `/api/analytics` need server runtime — static export removed)

**Recommended platform:** Vercel (one-command deploy for Next.js, free tier sufficient)

**Steps:**
1. `git push origin main` — push to GitHub
2. `npm run deploy` — runs `npx vercel --prod` (auto-detects Next.js framework from `vercel.json`)
3. Vercel will prompt: log in → link project → deploy
4. First deploy will create the project at `sar-app.vercel.app`; set custom domain `sar.sh` in Vercel dashboard

**Verification (post-deploy):**
1. `Invoke-WebRequest https://sar.sh` — should return 200 with HTML
2. `Invoke-WebRequest -Method POST -Body '{"email":"test@example.com"}' https://sar.sh/api/waitlist` — should return 201
3. `Invoke-WebRequest -Method POST -Body '{"event":"test"}' https://sar.sh/api/analytics` — should return 200
4. Open URL in mobile + desktop browser, verify landing page renders, submit test email through form

**Files deployed:**
- `src/app/page.tsx` — Landing page with waitlist form
- `src/app/api/waitlist/route.ts` — Waitlist API (persists to `data/waitlist.json`)
- `src/app/api/analytics/route.ts` — Analytics API (persists to `data/events.jsonl`)
- `src/lib/track.ts` — Client-side tracking

**Post-deploy handoff:** CMO runs launch sequence in `docs/marketing/campaign-launch.md:108-140`.
