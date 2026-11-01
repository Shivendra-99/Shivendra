# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers evaluating Shivendra Kumar Sonkar for fullstack engineer roles, typically arriving via a shared link (LinkedIn, a job application, a résumé) rather than organic search.

## Product Purpose

A personal portfolio and professional profile for Shivendra Kumar Sonkar, a Fullstack Software Engineer. It exists to represent his skills, work history, and shipped projects so a recruiter or hiring manager can quickly evaluate him for a role. Success means a visitor comes away with a clear, credible picture of his fullstack + cloud + AI-tooling experience and can act on it (contact him, shortlist him, pass him forward).

## Positioning

Fullstack breadth paired with cloud/DevOps depth and hands-on AI/agent tooling: Java/Spring Boot and React on one side, AWS/OpenShift/Terraform-level infrastructure work on the other, plus tooling that lets AI agents act in real software (claude-edge-connector, an MCP server + Edge extension; backed by 4 Anthropic Claude certifications and 3 Google Cloud agent certifications). All of it is backed by independently shipped work, not only employer-attributed work: a live product (SnapFit, snapfit.in) and two open-source npm packages (shiprocket-react, claude-edge-connector). This combination (enterprise backend + modern frontend + cloud ops + AI tooling + solo-shipped products) is the claim a purely backend, purely frontend, or prompt-only "AI" candidate couldn't truthfully make.

## Operating Context

- Active job search (confirmed Nov 2026): the link is going out with applications now, so the site is judged as part of a hiring decision. When the search ends it reverts to an evergreen profile kept current over time.
- Typically viewed briefly (a recruiter skim), often on mobile, usually reached via a shared link rather than direct navigation or search.
- Deployed as a static site on Vercel at shivendradev.com (custom domain; Namecheap DNS → Vercel project "shivendra"), with no backend. GitHub Pages (Shivendra-99.github.io) is no longer the deploy target.

## Capabilities and Constraints

- Single-page React (Vite) site styled with Tailwind v4; all content (experience, projects, skills, articles, achievements) is hardcoded in `src/App.jsx` — no CMS, no backend, no database. The hero, stats bento, experience/project rows and writing cards are adapted from Watermelon UI blocks (hero-15, bento-02, career-1, blog-2) in `src/components/`.
- No contact form. Reaching out happens via `mailto:`/`tel:` links and social profiles, not a submission flow.
- A separate one-page PDF résumé is generated from a ReportLab script outside this repo, whose content is manually kept in sync with `src/App.jsx`. When experience, projects, or skills change here, the résumé PDF needs a matching regeneration — it is not auto-derived from this codebase.
- Light/dark theme (dark by default); the hero stays dark in both. Motion (via the `motion` library): the hero's looping 3D-avatar video with a pause button, a staggered blur-up entrance on the hero copy and section headings, and stat bars that grow once on scroll. Under `prefers-reduced-motion` the video stays on its poster frame and `MotionConfig reducedMotion="user"` drops all movement. No particles or WebGL.

## Brand Commitments

- Name: Shivendra Kumar Sonkar. Role: Fullstack Software Engineer.
- Real contact channels: shivendrasonkar001@gmail.com, +91 99361 20982, LinkedIn (shivendra-kumar-sonkar-4349ab17b), Twitter/X (@Shivendra9598).
- Visual language (chosen Nov 2026, replacing the earlier Apple style): dark editorial. Light-weight Inter headlines paired with Instrument Serif italic asides; near-black (#09090b) or #fafaf9 page; a full-bleed hero frame; Watermelon-style bento cards; one lime accent (#c5f26a dark / #4d7c0f light) reserved for charts and small highlights.

## Evidence on Hand

- Verifiable work history: Accenture Solutions Pvt. Ltd. (current) and Cognizant Technology Solutions, with specific claimed metrics (e.g. API response time reduced from 10s to 2.5s).
- Real, live independent projects: SnapFit (snapfit.in, github.com/Shivendra-99/snapFit) and News App (newsapp-lac-ten.vercel.app, with GitHub repo). Tweet App and E‑Voting App were removed from the site on request — don't re-add them.
- Open-source npm packages, published and linked: shiprocket-react (npmjs.com/package/shiprocket-react, github.com/Shivendra-99/shiprocket-react) and claude-edge-connector (npmjs.com/package/claude-edge-connector, github.com/Shivendra-99/claude-edge-connector). No download counts, stars or user numbers are on hand; don't cite any.
- Portrait assets: a real headshot (`assets/img/shivendra-avatar-sm.jpg`) and an AI-generated 3D avatar loop made from that headshot (`assets/video/hero-loop.mp4`, poster `assets/img/hero-loop-poster.jpg`). The avatar is a stylised likeness, never presented as a photo.
- Real Credly certifications (Anthropic Claude Certified ×4, Google Cloud ×3), each linked to its own credly.com/badges/<id> page.
- Real published articles with working external links (Hashnode, GeeksforGeeks, Medium).
- Real achievements and contest results (HackerEarth, HackerRank Gold Badge, LeetCode 3‑star, etc.) — treat as fixed facts, not examples to embellish or round.
- B.Tech in Computer Science & Engineering, Ambalika Institute of Management and Technology, Lucknow (2017–2021).

## Product Principles

- Every claim on the site must be independently verifiable (real links, real metrics) — never invent numbers, testimonials, or deployments to fill a gap.
- Optimize for a fast, credible first impression over comprehensiveness — a recruiter skims, not reads.
- Fullstack + cloud + AI tooling is the throughline; new content should reinforce that combination rather than dilute it into a generic "does everything" list. AI claims rest on shipped tooling and verifiable certifications, never on buzzwords.
- While the search is active, the path from first impression to contacting him stays short and obvious on every screen size.
- Keep the résumé PDF and the portfolio's professional facts (roles, dates, metrics) consistent; treat `src/App.jsx` as the canonical source when they diverge.
- No decorative gradients, glows or marquees. Real artifacts (the avatar loop, the live SnapFit screenshot, npm install commands, Credly badges, charts drawn from résumé numbers) carry the visuals.

## Accessibility & Inclusion

Smooth scrolling and the hero video's autoplay only run without `prefers-reduced-motion`; keyboard focus-visible styling and a skip-to-content link are in place.
