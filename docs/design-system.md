# Design System

> **Owner:** UX Designer  
> **Status:** ✅ Foundation approved — handoff ready  
> **Last updated:** 2026-05-18  
> **Approved by:** CEO (local-board)

---

## Principles

1. **Start with the user.** Every token and component maps to a real user need.
2. **Ship over perfect.** These primitives are production-ready, not final. Iterate in the open.
3. **Design in systems.** Reuse existing patterns; one-off components are a last resort.
4. **Accessibility is not optional.** WCAG 2.1 AA compliance is the floor, not the ceiling.
5. **Document handoffs.** Annotate variants, states, and edge cases so engineering can build without guesswork.

---

## Tokens

Tokens live in `tailwind.config.ts` and `src/app/globals.css`. Prefer Tailwind utilities; use CSS custom properties only when you need runtime theming or values outside Tailwind’s scale.

### Colors

| Token family | Usage |
|--------------|-------|
| `primary`    | Brand actions, links, focus rings |
| `neutral`    | Surfaces, borders, text hierarchy |
| `success`    | Positive feedback, confirmations |
| `warning`    | Cautions, non-blocking issues |
| `error`      | Errors, destructive actions |
| `info`       | Neutral alerts, tips |

Each family has a 50–950 (or 50–700 for semantic) scale. In day-to-day UI, stick to 50/100 for backgrounds, 500/600 for interactive elements, and 700 for hover/active states.

### Typography

| Token | Size | Line height | Usage |
|-------|------|-------------|-------|
| `text-2xs` | 10px | 0.875rem | Micro labels, timestamps |
| `text-xs`  | 12px | 1rem     | Captions, helper text |
| `text-sm`  | 14px | 1.25rem  | Body small, buttons, inputs |
| `text-base`| 16px | 1.5rem   | Body default |
| `text-lg`  | 18px | 1.75rem  | Lead paragraphs |
| `text-xl`  | 20px | 1.75rem  | H6 / card titles |
| `text-2xl` | 24px | 2rem     | H5 |
| `text-3xl` | 30px | 2.25rem  | H4 |
| `text-4xl` | 36px | 2.5rem   | H3 |
| `text-5xl` | 48px | 1        | H2 |
| `text-6xl` | 60px | 1        | H1 |

Font stack: **Inter** (variable) → system-ui → -apple-system → BlinkMacSystemFont → Segoe UI → Roboto → sans-serif.

### Spacing

We extend Tailwind’s default spacing scale with a handful of denser UI values:

- `4.5` (18px), `13` (52px), `15` (60px), `18` (72px), `22` (88px), `30` (120px)

Default to the standard 4px grid (`4 = 1rem`) unless a component spec calls for something tighter.

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm`    | 2px  | Tight UI, tables |
| `rounded` (DEFAULT) | 4px | Inputs, buttons |
| `rounded-md`    | 6px  | Cards, panels |
| `rounded-lg`    | 8px  | Modals, sheets |
| `rounded-xl`    | 12px | Large cards, hero sections |
| `rounded-2xl`   | 16px | Marketing containers |
| `rounded-full`  | 9999px | Pills, avatars |

### Shadows (Elevation)

| Token | Usage |
|-------|-------|
| `shadow-none` | Flat surfaces |
| `shadow-sm`   | Subtle lift — badges, inline buttons |
| `shadow`      | Default elevation — cards, dropdowns |
| `shadow-md`   | Hover lift, popovers |
| `shadow-lg`   | Modals, dialogs |
| `shadow-xl`   | Full-screen overlays |

---

## Primitive Components

All primitives live in `src/components/ui/`. They are unstyled-by-default building blocks with consistent focus, disabled, and error states.

### Button

```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md">Save</Button>
```

**Variants:** `primary` | `secondary` | `ghost` | `danger`  
**Sizes:** `sm` | `md` | `lg`

- Always visible focus ring (`focus-visible:ring-2`).
- Disabled state removes pointer events and drops opacity to 50%.
- Use `asChild` to render as a different element (e.g. `next/link`).

### Input

```tsx
import { Input } from '@/components/ui';

<label htmlFor="email">Email</label>
<Input id="email" type="email" placeholder="you@example.com" />
```

- Border changes to `primary-500` on focus with a subtle ring.
- Set `aria-invalid="true"` to trigger the error border color (`error-500`).
- Disabled background becomes `neutral-50`.

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Context</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter>…</CardFooter>
</Card>
```

### Badge

```tsx
import { Badge } from '@/components/ui';

<Badge variant="success">Live</Badge>
```

**Variants:** `default` | `secondary` | `success` | `warning` | `error` | `outline`

- Badges are read-only. Do not use them for primary actions.

---

## Accessibility

### Focus management

- Every interactive element uses a visible `focus-visible` ring (primary-500, 2px, offset).
- High-contrast mode (`prefers-contrast: more`) falls back to a solid `currentColor` outline.
- Skip link is present in `layout.tsx` — first tab stop jumps to `#main-content`.

### Motion

- `prefers-reduced-motion: reduce` disables animations and transitions globally.
- Use the `animate-*` utilities sparingly; they already respect the media query via Tailwind.

### Color

- All text on colored surfaces meets WCAG 2.1 AA contrast ratios (4.5:1 normal text, 3:1 large text).
- Do not rely on color alone to convey meaning; pair with text, icons, or patterns.

---

## Engineering Handoff

1. Import primitives from `@/components/ui`.
2. Compose with `cn()` from `@/lib/utils` when you need conditional or merged classes.
3. Do not hard-code hex values in component files — always reference tokens.
4. If a new token is needed, propose it to the UX Designer rather than adding a one-off.

---

## 🚀 SAR-5 Complete — Foundation Approved

| Milestone | Status |
|-----------|--------|
| Color palette (primary, neutral, 4 semantic) | ✅ |
| Typography scale (2xs–6xl, Inter) | ✅ |
| Spacing system (4px grid + extended) | ✅ |
| Border radius & shadow elevation | ✅ |
| Button (4 variants, 3 sizes, asChild) | ✅ |
| Input (focus, error, disabled states) | ✅ |
| Card (header, title, desc, content, footer) | ✅ |
| Badge (6 variants) | ✅ |
| Design tokens doc | ✅ |
| WCAG 2.1 AA compliance | ✅ |
| CTO handoff | ✅ |

## Roadmap — Future Issues

- [ ] SAR-Next: Form controls — Checkbox, Radio, Select, Toggle
- [ ] SAR-Next: Dialog / Modal overlay primitive
- [ ] SAR-Next: Toast / Alert notification primitive
- [ ] SAR-Next: Dark mode tokens and toggle
- [ ] SAR-Next: Storybook stories for all primitives
