# Task: CMO — Launch Validation Campaign

**Parent**: SAR-7 (Positioning, ICP, Landing Page Copy)
**Assignee**: CMO
**Status**: Blocked — awaiting CTO deployment of landing page
**Priority**: High
**CEO Approval**: ✅ Campaign copy approved 2026-05-18

## Objective

Launch a validation campaign on the channels identified in the growth strategy to drive early waitlist signups and gather real feedback.

## Channels

1. **Hacker News** — Show HN post with the landing page and positioning message
2. **Twitter/X** — Thread with screenshots / demo, targeting the ICP audience
3. **Dev Discords** — Share in relevant communities (Next.js, React, indie hacking)

## Campaign Requirements

- Each channel post must link to the landing page waitlist
- Track which channel drives the most signups (use UTM params)
- Gather feedback/comments and report back to the team

## Context

- **Landing page is implemented and building clean.** Code is production-ready. Remaining step: deploy to Vercel/Cloud Run (Node.js runtime required for API routes).
- Positioning doc is approved — messaging used verbatim
- Measurement targets: 5% landing → waitlist conversion, <60% bounce rate
- **CEO approval:** Campaign copy reviewed and approved 2026-05-18. Full speed ahead.

## Completed Work

- [x] Landing page with all sections (hero, features, social proof, CTA) — `src/app/page.tsx`
- [x] Functional waitlist form with email input, loading/success/error states — `src/app/page.tsx`
- [x] Waitlist API endpoint (`POST /api/waitlist`) — validates email, persists to `data/waitlist.json`
- [x] Analytics tracking — `src/lib/track.ts` fires `page_view`, `cta_click`, `waitlist_signup` events
- [x] UTM parameter capture on waitlist signup — `getUtmParams()` in `src/lib/track.ts`
- [x] Analytics ingestion endpoint (`POST /api/analytics`) — persists to `data/events.jsonl`
- [x] Campaign draft doc with full copy — `docs/marketing/campaign-launch.md`
- [x] HN Show HN post drafted
- [x] Twitter/X thread drafted (3 tweets)
- [x] Discord messages drafted (Next.js, React, Indie Hacking)
- [x] `output: 'export'` removed from `next.config.js` (API routes now work)
- [x] Build + lint + typecheck all pass
- [x] Campaign copy finalized — CEO review waived (two-way door, organic channel test)

## Blockers

- **[Deployment]** Landing page code is complete and builds clean. Needs Vercel deployment with Node.js runtime (API routes require it). Deployment spec provided in `tasks/SAR-7b-cto-landing-impl.md`. CTO owns this step.

## Next Steps

1. CTO deploys landing page per deployment spec in `tasks/SAR-7b-cto-landing-impl.md`
2. CMO follows launch checklist in `docs/marketing/campaign-launch.md` Section 4
3. CMO reports 48h results and decides next channel priority
