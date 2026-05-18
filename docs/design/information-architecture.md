# Information Architecture — SAR

> Status: v1.0 — Initial site and app structure  
> Owner: UX Designer  
> Last updated: 2026-05-18

---

## 1. Purpose

This document defines the structural hierarchy of SAR. It is the source of truth for navigation, URL routes, page dependencies, and content grouping.

---

## 2. Architecture Principles

1. **Progressive Disclosure**: Show less in public/marketing; show more as the user authenticates and deepens engagement.
2. **Flat Over Deep**: Core work surfaces are reachable within 2 clicks from the dashboard.
3. **View-Agnostic Entities**: A Task is a Task whether you see it in a Board, List, or Timeline.
4. **Workspace as the Boundary**: All data lives inside a workspace; switching workspace switches context entirely.

---

## 3. Sitemap

### 3.1 Public Surface (Unauthenticated)

```
sar.app/
├── /                    (Landing Page — value prop, pricing, CTA)
├── /pricing             (Pricing Tiers — feature matrix, FAQ)
├── /about               (Company, mission, team)
├── /blog                (Content marketing, changelog posts)
├── /docs                (Help center, guides, API reference)
├── /login               (Authentication gate)
├── /signup              (Registration gate)
├── /invite/:token       (Accept team invitation)
└── /reset-password      (Password recovery)
```

**Notes:**
- `/login` and `/signup` are separate to support direct linking from marketing.
- `/invite/:token` handles both new-user registration and existing-user login in one flow.
- `/docs` is a static-export section built from Markdown; later split into `/docs` (help) and `/api` (reference).

---

### 3.2 App Surface (Authenticated — Inside a Workspace)

```
sar.app/
└── /w/:workspaceSlug/              (Workspace Root — redirects to Dashboard)
    ├── /dashboard                  (Home: projects, my tasks, recent activity)
    ├── /projects
    │   ├── /                       (Project List — all projects, create new)
    │   └── /:projectId             (Project Detail — overview, settings, views)
    │       ├── /board              (Kanban view)
    │       ├── /list               (Table view)
    │       ├── /timeline           (Roadmap / Gantt view)
    │       ├── /calendar           (Due-date calendar view)
    │       └── /settings           (Project config, labels, statuses)
    ├── /tasks
    │   ├── /                       (Global Task List — cross-project search)
    │   └── /:taskId                (Task Detail — modal or page)
    ├── /cycles
    │   ├── /                       (Cycle / Sprint List)
    │   └── /:cycleId               (Cycle Detail — scope, burndown, retro)
    ├── /analytics
    │   ├── /velocity               (Velocity trends)
    │   ├── /cycle-time             (Cycle time distribution)
    │   ├── /workload               (Team capacity heatmap)
    │   └── /custom                 (User-defined reports)
    ├── /team
    │   ├── /members                (Directory, roles, invite)
    │   └── /settings               (Workspace settings, billing, integrations)
    ├── /notifications              (In-app notification center)
    ├── /search                     (Global search results page)
    └── /settings
        ├── /profile                (User profile, password, theme, locale)
        ├── /notifications          (Notification preferences)
        └── /api                    (API keys, webhooks)
```

**URL conventions:**
- Workspace slug in path (`/w/:workspaceSlug`) enables multi-workspace users and clean routing.
- Resource IDs are opaque UUIDs or short hashes; never sequential integers.
- Views are suffixes on the parent resource (`/projects/:id/board`), not top-level routes, to preserve context.

---

## 4. Navigation Hierarchy

### 4.1 Global Navigation (Persistent App Shell)

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]  [Workspace Switcher ▼]   [Search ⌘K]   [Bell] [Avatar ▼]  │
├─────────────────────────────────────────────────────────────┤
│  [Sidebar]                                                  │
│  ─ Dashboard                                                │
│  ─ Projects      →  [Project A]  [Project B]  [+ New]       │
│  ─ My Tasks                                                 │
│  ─ Cycles                                                   │
│  ─ Analytics     →  Velocity | Cycle Time | Workload         │
│  ─ Team                                                     │
│  ─ Settings                                                 │
└─────────────────────────────────────────────────────────────┘
```

**Rules:**
- **Sidebar**: Persistent on desktop; collapsible on tablet; hidden behind hamburger on mobile.
- **Workspace Switcher**: Dropdown for users with >1 workspace; otherwise shows name only.
- **Search**: Global command palette (⌘K) for jumping to tasks, projects, or settings.
- **Notifications**: Bell icon with unread badge; dropdown panel, link to full history.
- **Avatar Menu**: Profile, theme toggle, keyboard shortcuts, sign out.

---

### 4.2 Project-Level Navigation (Contextual)

When inside a project, a secondary tab bar appears below the header:

```
[Project Name]                    [Settings ⚙]
    Board | List | Timeline | Calendar
```

- Tabs are sticky on scroll.
- Active view is bookmarkable and shareable via URL.
- Settings tab is owner/admin only.

---

### 4.3 Task Detail Navigation

Task detail can open as:
1. **Modal overlay** — when clicked from a board or list (preserves background context).
2. **Full page** — when accessed via direct link or from search results.

**Modal behavior:**
- URL updates to `/w/:slug/tasks/:taskId` via shallow routing so the link is shareable.
- Close via `Esc`, overlay click, or explicit ✕.
- On close, return to previous view; if direct entry, redirect to `/dashboard`.

---

## 5. Content Grouping & Entity Relationships

```
Workspace
├── Members (User + Role)
├── Settings (name, slug, plan, integrations)
└── Projects
    ├── Settings (labels, custom statuses, views)
    ├── Tasks
    │   ├── Subtasks
    │   ├── Comments
    │   ├── Attachments
    │   └── Linked Resources (PRs, commits, designs)
    ├── Views (Board, List, Timeline, Calendar)
    └── Cycles / Milestones
        ├── Scope (linked Tasks)
        ├── Burndown data
        └── Retrospective notes
```

**Normalization rules:**
- A Task belongs to exactly one Project.
- A Task can be linked to zero or one Cycle.
- A User can belong to many Workspaces; role is per-workspace.
- Views are query configurations, not data containers; deleting a view does not delete tasks.

---

## 6. State & Empty States

| Location | Empty State Content | CTA |
|----------|---------------------|-----|
| Dashboard — no projects | "Welcome to SAR. Create your first project to start shipping." | "Create Project" |
| Project — no tasks | "This project is empty. Add your first task or import from CSV." | "Add Task" / "Import" |
| My Tasks — nothing assigned | "You're all caught up! 🎉" | "Browse Projects" |
| Analytics — insufficient data | "Trends appear after you complete a few cycles." | "Start a Cycle" |
| Notifications — empty | "No new notifications." | — |
| Search — no results | "Nothing found for 'query'. Try a different term." | "Create Task" (quick add) |

---

## 7. Accessibility & Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `≥1280px` (Desktop) | Full sidebar + secondary nav visible |
| `≥1024px` (Laptop) | Collapsible sidebar, secondary nav visible |
| `≥768px` (Tablet) | Icon-only sidebar, secondary nav collapses into tabs |
| `<768px` (Mobile) | Hidden sidebar, hamburger menu, single-column views |

**Accessibility requirements:**
- Skip-to-content link on every page.
- Sidebar navigation is a `<nav>` element with `aria-label="Main"`.
- Current page indicated with `aria-current="page"`.
- Focus trap in modals (task detail, command palette).
- All color-coded statuses have text labels or icons (never color-only).

---

## 8. Route-to-File Mapping (Next.js App Router)

| Route | File Path |
|-------|-----------|
| `/` | `src/app/page.tsx` |
| `/login`, `/signup` | `src/app/(auth)/login/page.tsx`, `src/app/(auth)/signup/page.tsx` |
| `/w/[slug]/dashboard` | `src/app/(app)/w/[slug]/dashboard/page.tsx` |
| `/w/[slug]/projects` | `src/app/(app)/w/[slug]/projects/page.tsx` |
| `/w/[slug]/projects/[id]/board` | `src/app/(app)/w/[slug]/projects/[id]/board/page.tsx` |
| `/w/[slug]/tasks/[id]` | `src/app/(app)/w/[slug]/tasks/[id]/page.tsx` |
| `/w/[slug]/settings/profile` | `src/app/(app)/w/[slug]/settings/profile/page.tsx` |

**Notes for engineering handoff:**
- Use route groups `(auth)` and `(app)` to share layouts without affecting the URL.
- The `(app)` layout contains the global shell (sidebar, header, command palette).
- Modals for task detail can be implemented with Next.js parallel routes (`@modal`) or intercepted segments.

---

## 9. Change Log

| Version | Date | Change | Author |
|---------|------|--------|--------|
| 1.0 | 2026-05-18 | Initial IA and sitemap | UX Designer |

---

## 10. Next Steps

1. Review IA with CEO for strategic alignment.
2. Validate navigation hierarchy with 3–5 card-sorting exercises.
3. Generate low-fidelity wireframes for Dashboard, Project Board, and Task Detail.
4. Hand off to CTO with route mapping for implementation planning.
