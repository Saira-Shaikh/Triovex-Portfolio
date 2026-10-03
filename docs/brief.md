# Portfolio Update Brief — for Claude Code

This file is the source of truth for updating Saham Ahmed's portfolio site. It carries the context, the accurate project content, the diagrams to build, and the rules. Read it fully before making changes. Ask Saham the questions at the end before writing project copy you are unsure about. Do not invent facts, metrics, or client names.

---

## 1. Objective

Reposition the portfolio from a full-stack-generalist site into one that reads as: a **software engineer with a strong engineering base and real, hands-on modern AI experience**. Lead with AI and backend. Feature real shipped systems with short writeups, architecture diagrams, and demos. Demote the tutorial-style projects.

The portfolio is the hub. The CV and LinkedIn point here for detail.

---

## 2. About Saham (positioning)

- Software engineer, ~2.5 years of production experience, graduated NED University (B.E. Computer Software Engineering, 2026).
- Core stack: NestJS, Node.js, Python on the backend. Applied AI: RAG, agentic systems, vector databases, LLM integration.
- Strengths to convey: solid fundamentals (event-driven systems, observability, reliability) plus genuine AI depth, and the ability to ship and operate real software.
- Goal the site serves: attract remote roles at small distributed teams and startups.

The current site copy (About, Skills, Hero) is older and frames Saham as a general full-stack developer ("crafting digital experiences", "6th semester", "~2 years"). Update it to the positioning above: graduate, ~2.5 years, backend + applied AI first.

---

## 3. Existing site — confirm before editing

Best knowledge of the current repo (verify by reading it):
- React + TypeScript single-page app, components in `src/components/` including `Hero.tsx`, `About.tsx`, `Experience.tsx`, `Projects.tsx`, `Skills.tsx`.
- Deployed on Vercel. Client-side rendered.
- Some project demo videos already exist in the repo (referenced for jobsinc, a bot, lms, videotube).

First step: read the repo, confirm the framework (Vite or Next), the styling approach, and where content and assets live. Keep the existing design system unless Saham asks for a redesign.

---

## 4. What to change

1. **Hero / About:** rewrite to the positioning in section 2. Remove stale lines (semester, "~2 years", generic "full-stack developer crafting experiences").
2. **Projects:** reorder and rewrite around the featured work in section 5. Lead with JobsInc, Invoker, and the BI analysis agent, plus the IVY reliability work. Demote or remove the tutorial builds (LMS, video-sharing app, e-commerce) — at most a small "earlier work" strip, or drop them.
3. **Per featured project:** add a short writeup (problem, approach, stack, outcome), one architecture diagram (section 6), and a demo slot (video or GIF; use a placeholder if Saham has not provided one yet).
4. **Skills:** reorder so AI and backend lead (section 7).
5. **Links / CTA:** GitHub (github.com/sahamahmed), LinkedIn (linkedin.com/in/saham-ahmed-5a5b0428b), email (sahamahmed70@gmail.com), and a resume PDF download if Saham provides one.

---

## 5. Content pack (accurate source material)

Use this as the factual basis. Do not add numbers or claims not present here.

### JobsInc — founder product (fine to show in full on the portfolio)
Saham's own product, investor-backed. An end-to-end agentic recruitment platform. From a single recruiter input, AI agents run the whole pipeline: post the job, score candidates, handle interview alignment, run multi-step interview pipelines where an agent conducts live interviews and proctoring, shortlist finalists, and a separate negotiation agent then contacts finalists, discusses company policy, and closes the offer.
Stack: NestJS microservices, Next.js, PostgreSQL, Redis, RabbitMQ for asynchronous processing, WhatsApp integration. Role: co-founder and engineer.

### Invoker — AI feature at IVY
An exam-preparation feature. All historical past papers are chunked at question-part level, embedded, and stored in Qdrant. A student sends a photo of a question; the system reads it using Google Vision and Mathpix (for mathematical notation), then finds the closest source paper via hybrid search that combines dense embeddings with BM25. It returns the exact marking scheme, the exact question number, and an AI explanation grounded in marking schemes and examiner reports.

### BI Analysis Agent — Virtuosoft, US-based client (keep the client unnamed on a public site)
A real-time natural-language analytics agent that answers analysts' questions against a data warehouse, built on WrenAI and RAG with input sanitisation and role-based access control. Saham's contribution was optimisation: consolidating redundant per-task LLM calls (separate calls for entity extraction and history/context build-up), removing an over-stuffed entity-extraction prompt, and replacing a 23-second access-control hierarchy query with a cached hierarchy that is auto-invalidated by database triggers when the data-load job runs. Result: response time down by around 80%, with reduced hallucination and better accuracy. Frame this as the engineering work; do not name the client.

### IVY — reliability and ownership
Saham owns the full stack of a live iOS and Android education app plus web portal (NestJS, Next.js), serving over 1,000 active users: AI features, backend, payments and subscriptions, store integrations, dashboards, and deployment. He improved reliability from around 100 users with frequent downtime to stable operation at over 1,000, by introducing end-to-end observability (Grafana, Loki, Promtail, Pino) and hardening the backend, including an idempotent purchase-reconciliation flow that validates store purchase tokens against the store as the source of truth. Keep the framing positive.

### AMAX Insurance — data platform migration at Virtuosoft
Migrated reporting from SQL Server to Redshift: dimensional schema redesign, porting stored-procedure logic, zero-downtime cutover. Frame as software and data-platform engineering. Confirm with Saham whether the client can be named publicly.

### Earlier work (optional, minimise)
LMS, a video-sharing app, and an e-commerce build (MERN). Keep only as a small "earlier projects" mention if at all.

---

## 6. Diagrams to generate

Create clean architecture diagrams (Mermaid or SVG, matching the site style). Keep labels short.

**A. JobsInc agentic pipeline (flow):**
Recruiter input → Job Posting Agent → Candidate Scoring Agent → Interview Alignment → Interview Agent (live interview + proctoring) → Shortlist → Negotiation Agent (contact, policy, close). Show RabbitMQ as the asynchronous backbone connecting the agents, WhatsApp as the messaging channel, and NestJS microservices as the platform.

**B. Invoker hybrid-retrieval flow:**
Two paths. Offline indexing: past papers → question-part chunking → embeddings → Qdrant. Query time: student photo → OCR (Google Vision + Mathpix) → query → in parallel, dense embedding search over Qdrant and BM25 lexical search → fuse the results → best-matching paper → return marking scheme + exact question number + grounded AI explanation.

**C. BI agent optimisation (before / after):**
Show the query path: natural-language question → entity extraction → context build → WrenAI query generation → RBAC filter → answer. Highlight the three optimisations: consolidated LLM calls, leaner entity-extraction prompt, and a cached RBAC hierarchy invalidated by data-load triggers. A simple before/after latency note (slow vs around 80% faster) helps.

---

## 7. Skills (real, ordered AI-first)

- AI and LLM: RAG, hybrid retrieval, BM25, embeddings, vector databases, Qdrant, agentic and multi-agent pipelines, LLM integration, Llama, OpenAI, prompt engineering, WrenAI
- Backend: NestJS, Node.js, Python, REST APIs, event-driven architecture, RabbitMQ, microservices, RBAC, caching
- Frontend: React, Next.js, TypeScript, Tailwind
- Data: PostgreSQL, Redis, MongoDB, SQL Server, Redshift, vector databases
- DevOps: Docker, DigitalOcean, Grafana, Loki, Prometheus
- Also experienced with: .NET Core, .NET Framework, Java, Spring Boot

---

## 8. Writing style

- Plain and direct. No em dashes. No filler or hype adjectives.
- Short sentences. State what the thing does and the outcome; skip long explanations.
- Accurate only. No invented metrics, users, or client names.

---

## 9. Confidentiality and accuracy

- JobsInc: fine to show in full on the portfolio.
- BI analysis agent: do not name the US client. Describe the engineering only.
- AMAX: confirm with Saham before naming the client publicly.
- IVY: keep the reliability story positive; it is Saham's own role narrative.
- The site is public. When unsure whether a detail is safe to publish, ask Saham first.

---

## 10. Questions to ask Saham before/while building

1. Demo links or videos for JobsInc, Invoker, and the BI agent — which exist and can be shown? Dioscuss about each projet in detail.
2. Should the WhatsApp AI support bot (Llama + RAG, human escalation) be a separate featured project, or folded into the IVY entry?
3. JobsInc: is there a live URL or status that can be linked, or keep it description-only?
4. Can AMAX Insurance be named publicly, or keep the client generic?
5. Content-only update, or open to a light design refresh?
6. Do you want a resume PDF download button, and if so provide the file?