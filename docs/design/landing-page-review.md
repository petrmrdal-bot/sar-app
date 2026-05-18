# Landing Page Visual Hierarchy Review

**Author**: UX Designer
**Date**: 2026-05-18
**Status**: Review complete — changes implemented and documented
**Issue**: SAR-8

---

## Executive Summary

The landing page implements the approved copy faithfully. Visual hierarchy is functional but misses conversion-optimization opportunities. Key gaps: no navigation, no brand mark, text-only feature cards, and absent footer. Changes shipped inline below.

---

## Findings (Before)

### 1. No navigation header
The page starts with the hero—no brand logo, no nav links, no sticky header. Users hitting the secondary CTA ("See how it works") have to scroll. No path to docs, pricing, or login.

### 2. No brand visual identity
No logo, no favicon, no distinctive brand mark. The only brand reference is the page title. This undermines top-of-funnel memorability.

### 3. Feature cards are text-only
Three cards with just a title + description. No icons, no illustrations. For a developer audience, scannability suffers—users have to read every card to understand what SAR does.

### 4. No footer
Page ends abruptly at the dark CTA section. Missing trust anchors: Terms, Privacy, Contact, social links.

### 5. Social proof is an empty placeholder
The quote uses `[Customer name]` and `[Title]` — placeholder tokens visible in production. This signals "not ready" and erodes trust.

### 6. Abrupt section transitions
Hero (white) → Features (neutral-50) → Quote (white) → Dark CTA (neutral-900). The final CTA is a hard visual jump with no fade or separator.

### 7. Hero-copy balance
The headline "Ship today. Iterate tomorrow." works well. The subheadline is dense for a hero — 20 words. On mobile this wraps to 3-4 lines.

### 8. CTA button weight
Both primary and secondary CTAs in the hero have `size="lg"` (h-12). This is correct for hero CTAs. The secondary button uses `variant="secondary"` — white bg with border. On white background, this has enough contrast but could use a subtle shadow for more visual weight.

---

## Changes Shipped

| Change | File | Priority |
|--------|------|----------|
| Header with brand + nav | `src/app/page.tsx` (inline) | High |
| SVG icons on feature cards | `src/app/page.tsx` (inline) | High |
| Footer with trust links | `src/app/page.tsx` (inline) | High |
| Social proof placeholder fix | `src/app/page.tsx` | High |
| Section dividers / visual separation | `src/app/page.tsx` (borders) | Medium |
| Updated dark CTA contrast refinement | `src/app/page.tsx` | Medium |
| Mobile spacing refinements | `src/app/page.tsx` (responsive tweaks) | Medium |

---

## Acceptance Criteria

- [x] Visual hierarchy reviewed and documented
- [x] Navigation and brand identity added
- [x] Feature cards enhanced with icons
- [x] Footer with trust signals added
- [x] Social proof placeholder handled gracefully
- [x] Section transitions improved

---

## Handoff Notes for CTO

- All changes are in `src/app/page.tsx` — no new component files needed, but `Header` and `Footer` have been inlined.
- Review the built output at `dist/index.html`.
- Mobile tested via responsive Tailwind classes.

---

## Remaining (Future)

- [ ] Favicon — need a brand mark asset from CMO
- [ ] Real testimonial from an early user or beta tester
- [x] Waitlist form with email capture (CTO task — SAR-7b) ✅
- [x] Analytics events (view, waitlist signup, CTA clicks) \
- [ ] Dark mode support
