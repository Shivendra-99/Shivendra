# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers evaluating Shivendra Kumar Sonkar for fullstack engineer roles, typically arriving via a shared link (LinkedIn, a job application, a résumé) rather than organic search.

## Product Purpose

A personal portfolio and professional profile for Shivendra Kumar Sonkar, a Fullstack Software Engineer. It exists to represent his skills, work history, and shipped projects so a recruiter or hiring manager can quickly evaluate him for a role. Success means a visitor comes away with a clear, credible picture of his fullstack + cloud experience and can act on it (contact him, shortlist him, pass him forward).

## Positioning

Fullstack breadth paired with cloud/DevOps depth: Java/Spring Boot and React on one side, AWS/OpenShift/Terraform-level infrastructure work on the other — backed by a live, independently shipped product (SnapFit, snapfit.in) rather than only employer-attributed work. This combination (enterprise backend + modern frontend + cloud ops + a solo-shipped live product) is the claim a purely backend or purely frontend candidate couldn't truthfully make.

## Operating Context

- Evergreen professional profile, not tied to an active job search — kept current over time rather than built for one campaign or deadline.
- Typically viewed briefly (a recruiter skim), often on mobile, usually reached via a shared link rather than direct navigation or search.
- Deployed as a static site on GitHub Pages (Shivendra-99.github.io) with no backend.

## Capabilities and Constraints

- Single-page React (Vite) site; all content (experience, projects, skills, articles, achievements) is hardcoded in `src/App.jsx` — no CMS, no backend, no database.
- No contact form. Reaching out happens via `mailto:`/`tel:` links and social profiles, not a submission flow.
- A separate one-page PDF résumé is generated from a ReportLab script outside this repo, whose content is manually kept in sync with `src/App.jsx`. When experience, projects, or skills change here, the résumé PDF needs a matching regeneration — it is not auto-derived from this codebase.
- Light/dark theme (dark by default), with a cinematic hero (Three.js/React Three Fiber + GSAP ScrollTrigger) that must degrade gracefully under `prefers-reduced-motion` and on narrow or low-power devices.

## Brand Commitments

- Name: Shivendra Kumar Sonkar. Role: Fullstack Software Engineer.
- Real contact channels: shivendrasonkar001@gmail.com, +91 99361 20982, LinkedIn (shivendra-kumar-sonkar-4349ab17b), Twitter/X (@Shivendra9598).
- Visual language: navy/blue Swiss-minimalist palette with an editorial Bodoni Moda display serif for headings, Poppins/Open Sans for UI and body text.

## Evidence on Hand

- Verifiable work history: Accenture Solutions Pvt. Ltd. (current) and Cognizant Technology Solutions, with specific claimed metrics (e.g. API response time reduced from 10s to 2.5s).
- Real, live independent projects: SnapFit (snapfit.in, github.com/Shivendra-99/snapFit) and News App (newsapp-lac-ten.vercel.app, with GitHub repo). Tweet App and E‑Voting App exist as described but have no live deployment or public repo — do not fabricate a link for them.
- Real published articles with working external links (Hashnode, GeeksforGeeks, Medium).
- Real achievements and contest results (HackerEarth, HackerRank Gold Badge, LeetCode 3‑star, etc.) — treat as fixed facts, not examples to embellish or round.
- B.Tech in Computer Science & Engineering, Ambalika Institute of Management and Technology, Lucknow (2017–2021).

## Product Principles

- Every claim on the site must be independently verifiable (real links, real metrics) — never invent numbers, testimonials, or deployments to fill a gap.
- Optimize for a fast, credible first impression over comprehensiveness — a recruiter skims, not reads.
- Fullstack + cloud breadth is the throughline; new content should reinforce that combination rather than dilute it into a generic "does everything" list.
- Keep the résumé PDF and the portfolio's professional facts (roles, dates, metrics) consistent; treat `src/App.jsx` as the canonical source when they diverge.
- Treat the cinematic/editorial visual layer as enhancement, not requirement — content must remain fully legible and functional with motion and 3D disabled.

## Accessibility & Inclusion

Respects `prefers-reduced-motion` throughout (GSAP/ScrollTrigger sequences and the Three.js hero are skipped or simplified accordingly); keyboard focus-visible styling and a skip-to-content link are in place.
