# Core User Flows — SAR

> Status: v1.0 — Initial mapping for pre-PMF product foundation  
> Owner: UX Designer  
> Last updated: 2026-05-18

---

## 1. Purpose

This document maps the primary user journeys for SAR. It serves as the north star for page design, navigation, and acceptance criteria.

---

## 2. Primary Personas

| ID | Name | Role | Goal | Context |
|----|------|------|------|---------|
| P1 | **Sara** | Engineering Lead | Ship features on time, reduce blockers | Uses SAR daily to track work and unblock her team |
| P2 | **Alex** | Product Manager | Align stakeholders, iterate quickly | Uses SAR to plan sprints, report status, and gather feedback |
| P3 | **Jordan** | Individual Contributor | Know what to work on next | Uses SAR to manage personal tasks and update status |
| P4 | **Morgan** | Executive / CEO | See high-level progress and velocity trends | Checks SAR dashboards weekly for strategic decisions |

---

## 3. Core User Flows

### Flow A: Onboarding & Team Setup

```
Landing Page
    └── Sign Up (email / OAuth)
            └── Create Workspace
                    ├── Invite Team Members
                    └── Configure Project Settings
                            └── Onboarding Complete → Dashboard
```

**Key screens:**
1. **Landing / Marketing** — Value prop, pricing, social proof.
2. **Sign Up** — Minimal friction; SSO preferred.
3. **Workspace Creation** — Name, slug, optional template.
4. **Team Invite** — Email invites or shareable link.
5. **Project Setup** — Pick a template (Kanban, Sprint, Simple List) or start blank.
6. **Dashboard** — First meaningful view of the product.

**Edge cases:**
- User signs up via invite link → skip workspace creation, join existing workspace.
- SSO domain mismatch → show helpful error + contact support CTA.
- Invite link expired → allow request for new invite.

---

### Flow B: Plan & Prioritize Work

```
Dashboard
    └── Create Initiative / Project
            └── Add Tasks / Stories
                    ├── Set Priority & Assignees
                    └── Define Milestones / Deadlines
                            └── View Board / List / Timeline
```

**Key screens:**
1. **Dashboard** — Overview of active projects, recent activity, assigned tasks.
2. **Project / Initiative Detail** — Description, goals, linked docs.
3. **Task Creation** — Quick-add (title only) or full form (description, assignee, labels, due date, priority).
4. **Backlog / Board / List Views** — Sort, filter, drag-and-drop reorder.
5. **Timeline / Roadmap View** — Gantt-style or swimlane view for milestones.

**Edge cases:**
- Bulk create tasks → import CSV or paste list.
- Re-prioritize mid-sprint → drag-and-drop with change log.
- Conflicting deadlines → highlight in timeline view with warning badge.

---

### Flow C: Execute & Track Progress

```
My Tasks / Notifications
    └── Open Task Detail
            ├── Update Status (To Do → In Progress → In Review → Done)
            ├── Add Comments / Attachments
            └── Link Pull Requests / Commits
                    └── Team Board Updates in Real Time
```

**Key screens:**
1. **My Tasks** — Filtered view of everything assigned to me across projects.
2. **Notifications** — Mentions, status changes, deadline warnings.
3. **Task Detail** — Full context: description, subtasks, comments, linked PRs, activity log.
4. **Status Transitions** — Simple state machine; custom workflows for paid tiers.
5. **Integration Links** — GitHub/GitLab PRs, Figma links, Slack threads.

**Edge cases:**
- Task blocked → add blocker reason, auto-notify assignee and watchers.
- Reassign task → handoff comment prompt and notification.
- Merge conflict on linked PR → surface in task as warning.

---

### Flow D: Review, Iterate & Ship

```
Sprint / Cycle Review
    └── Review Completed Work
            ├── Gather Feedback (Comments, Reactions)
            ├── Move Incomplete Items to Next Cycle
            └── Retrospective Notes
                    └── Ship Release Notes / Summary
```

**Key screens:**
1. **Cycle / Sprint Summary** — Velocity, completed vs. planned, burndown chart.
2. **Feedback Collection** — Inline comments, async video/audio (future), reactions.
3. **Rollover** — Bulk select incomplete items, move to next cycle with carry-over reason.
4. **Retrospective** — Simple notes board: what went well, what to improve, action items.
5. **Release Notes Generator** — Auto-compile completed tasks into formatted release notes.

**Edge cases:**
- Sprint ended with 0% completion → prompt for retrospective and root-cause note.
- Scope change mid-sprint → require reason, log change in velocity chart.

---

### Flow E: Report & Analyze Velocity

```
Dashboard
    └── Analytics / Reports
            ├── Velocity Trends
            ├── Cycle Time Distribution
            ├── Team Workload
            └── Custom Reports
                    └── Export / Share with Stakeholders
```

**Key screens:**
1. **Overview Dashboard** — KPI cards: velocity, cycle time, WIP limits, blocker count.
2. **Velocity Trends** — Line chart across sprints/cycles.
3. **Cycle Time** — Histogram showing time from In Progress → Done.
4. **Team Workload** — Heatmap of assignee capacity.
5. **Custom Reports** — Filter by project, label, date range, assignee.
6. **Export / Share** — PDF, CSV, or shareable link (public or private).

**Edge cases:**
- Insufficient data (< 3 sprints) → show "Trends will appear after 3 cycles" empty state.
- All team members over capacity → highlight in red, suggest rebalancing.

---

## 4. Secondary Flows

### Flow F: Account & Billing

```
Settings
    └── Workspace Settings
            ├── Members & Roles (Admin, Editor, Viewer)
            ├── Billing & Plan
            └── Integrations
                    └── API Keys / Webhooks (advanced)
```

### Flow G: Help & Support

```
In-App Help
    └── Search Docs
            ├── Contact Support
            └── Report Bug / Request Feature
```

---

## 5. Cross-Cutting Concerns

| Concern | Where Handled |
|---------|---------------|
| **Authentication** | Sign-up, login, SSO, MFA, password reset, session expiry |
| **Authorization** | Workspace roles, project-level permissions, view-only sharing |
| **Notifications** | In-app bell, email digest, Slack/Teams push (integrations) |
| **Search** | Global command bar (⌘K), project-scoped search, filters |
| **Empty States** | Every list and dashboard has a guided empty state |
| **Error Recovery** | 404, 500, offline, and rate-limit screens with recovery CTAs |

---

## 6. Acceptance Criteria for Flow Completeness

- [x] Every primary flow has a start state, end state, and key decision points.
- [x] Edge cases and error paths are documented.
- [x] Each flow maps to at least one screen or view in the Information Architecture.
- [x] Flows are ordered by frequency of use (primary → secondary).
- [ ] Prototypes validated with 3–5 user interviews *(tracked in child issue)*.

---

## 7. Next Steps

1. Validate flows with persona-based user interviews.
2. Convert Flows A–E into low-fidelity wireframes.
3. Define state machines for task transitions.
4. Hand off to CTO with annotated prototypes for implementation planning.
