# ADR 001: Next.js as the Application Framework

## Status

Accepted

## Context

We need a web application foundation that is:
- Fast to develop in (we are pre-PMF and velocity is everything)
- Flexible enough to support static marketing pages, dynamic dashboards, and API routes
- Easy to deploy and host
- Familiar to potential future hires

## Decision

We will use **Next.js 14+ with the App Router** as our primary application framework.

## Consequences

### Positive

- **Velocity**: File-based routing, built-in optimizations, and a vast ecosystem let us ship faster.
- **Flexibility**: Static export, SSR, and API routes are all supported in a single codebase.
- **Hiring**: Next.js is widely adopted; finding engineers who know it is easy.
- **Reversibility**: If we later need to split frontend and backend, Next.js API routes can be extracted into a standalone service without rewriting the UI.

### Negative

- **Lock-in**: Vercel-specific features can create subtle coupling. We will avoid platform-only features until we have a strong reason to use them.
- **Bundle size**: Next.js is larger than a minimal Vite + React setup. The productivity gains outweigh this cost at our stage.

## Alternatives Considered

- **Vite + React**: Simpler, but we would need to add routing, SSR, and API route solutions ourselves. Too much glue code for day one.
- **Remix**: Solid option, but the ecosystem is smaller and hosting patterns are more opinionated.
- **Astro**: Excellent for content sites, but less mature for highly dynamic applications.

## Date

2026-05-18
