# SAR Positioning, ICP, and Landing Page Copy

> Status: v1 proposal for CEO review. Ready to ship on the marketing site.

---

## Product Positioning

### Positioning Statement
For early-stage engineering teams who are buried in DevOps instead of building product, SAR is the shipping platform that gets code live in minutes with zero config. Unlike traditional CI/CD tools that demand days of setup and ongoing maintenance, SAR is designed for velocity from the first commit.

### Tagline
Ship fast. Iterate faster.

### Key Messages
1. **Zero-config deployments** — Push code, get a URL. No YAML ceremonies.
2. **Built for small teams** — You don't need a platform engineer to ship like one.
3. **Iterate in public** — Preview every pull request and ship to production with confidence.

### Category
Developer Experience (DevEx) / Deployment Platform

### Competitive Frame
- **Not** an enterprise CI/CD suite (CircleCI, GitHub Actions at scale).
- **Not** a frontend-only host (Vercel, Netlify).
- **Is** the fastest path from commit to live URL for full-stack JavaScript/TypeScript teams.

---

## Ideal Customer Profile (ICP)

### Firmographics
- **Stage**: Pre-seed to Series A startups; indie hacker teams
- **Size**: 1–15 engineers
- **Tech stack**: Next.js, React, Node.js, full-stack JavaScript/TypeScript
- **Region**: North America and Western Europe (initial beachhead)
- **Revenue model**: B2B SaaS or consumer apps with rapid release cycles

### Psychographics
- Believe shipping speed is a competitive advantage
- Frustrated by the complexity of AWS, Kubernetes, or enterprise CI/CD
- Want to spend >80% of time writing product code, not plumbing
- Active on Twitter/X, Hacker News, GitHub, and Discord

### Decision Maker Profile
- **Primary**: CTO / VP of Engineering / Founding Engineer
- **Secondary**: Product-minded CEO or technical co-founder
- **Buying triggers**:
  - New project launch and need to ship an MVP fast
  - Migration from Heroku or a paused free tier
  - Team growth past 2 engineers and manual deploys are breaking

### Pain Points (verbatim we hear)
- "It takes longer to set up CI than to build the feature."
- "We just want to push code and have it live."
- "Our deploy pipeline is a Rube Goldberg machine of bash scripts."

### Jobs-to-be-Done
1. **Main job**: Turn a commit into a live URL as fast as possible.
2. **Related job**: Share preview links with stakeholders before merging.
3. **Emotional job**: Feel like a team that ships, not a team that configs.

---

## Landing Page Copy

### Page Metadata
- **Title**: SAR — Ship fast. Iterate faster.
- **Description**: The zero-config shipping platform for teams that want to push code and get a URL. Built for Next.js, React, and Node.js.

### Hero Section
- **Headline**: Ship today. Iterate tomorrow.
- **Subheadline**: SAR turns your commits into live URLs in minutes—no config, no ops team, no waiting.
- **Primary CTA**: Get early access
- **Secondary CTA**: See how it works (anchor to #features)

### Features Section
1. **Push-to-deploy**  
   Connect your repo. Every commit gets a production-ready URL. No YAML required.

2. **Instant previews**  
   Share live preview links for every pull request. Stakeholders review before you merge.

3. **Zero config**  
   No Dockerfiles, no Terraform, no bash scripts. Just push code and go.

### Social Proof (placeholder)
- "We went from zero to live in 10 minutes."  
  — [Customer name], [Title]

### Final CTA Section
- **Headline**: Stop configuring. Start shipping.
- **Subheadline**: Join the teams who ship daily without a platform engineer.
- **CTA**: Join the waitlist

---

## Measurement Plan

| Metric | Target | Tool |
|--------|--------|------|
| Landing page → waitlist signups | 5% conversion | Custom event (CTO to implement) |
| Time on page | >60 seconds | Plausible / GA4 (CMO to request) |
| Bounce rate | <60% | Plausible / GA4 |

---

## Next Steps
1. CEO approves positioning and ICP.
2. UX Designer reviews landing page layout and visual hierarchy.
3. CTO implements waitlist form and tracking events.
4. CMO launches on Hacker News, Twitter, and relevant Discord communities for validation.
