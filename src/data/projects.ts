// Content source: docs/brief.md. Keep claims to what is stated there.

export type Stage = string | string[]; // string[] = parallel branches

export type Diagram = {
  groups: { title?: string; stages: Stage[] }[];
  footnote?: string;
};

export type Project = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  tech: string[];
  videoSrc?: string;
  photosrc?: string[];
  liveUrl?: string;
  figmaprotoUrl?: string[];
  thumbnail?: string;
  githubfrontendUrl?: string;
  githubbackendUrl?: string;
  diagram?: Diagram;
};

export const projects: Project[] = [
  {
    id: "jobsinc",
    title: "JobsInc",
    tag: "AI / Web / Backend",
    summary:
      "An end-to-end agentic recruitment platform. One recruiter input runs the whole hiring pipeline.",
    problem:
      "Hiring is a chain of manual handoffs. A recruiter writes the post, screens CVs, chases candidates for interview slots, sits every interview, then negotiates the offer. Each step is a place the pipeline stalls.",
    approach:
      "From a single recruiter input, AI agents run the pipeline end to end. Agents post the job, score candidates, handle interview alignment, and run multi-step interview pipelines where an agent conducts the live interview and proctoring. Finalists are shortlisted, then a separate negotiation agent contacts them, discusses company policy, and closes the offer. Built as NestJS microservices with RabbitMQ as the asynchronous backbone between agents, and WhatsApp as the candidate channel.",
    outcome:
      "A working platform that takes a role from posting to closed offer without a recruiter driving each step. Co-founder and engineer.",
    tech: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Microservices",
      "WhatsApp",
      "Agentic AI",
    ],
    videoSrc: "/videos/jobsinc.mp4",
    diagram: {
      groups: [
        {
          title: "Agent pipeline",
          stages: [
            "Recruiter input",
            "Job Posting Agent",
            "Candidate Scoring Agent",
            "Interview Alignment",
            "Interview Agent (live + proctoring)",
            "Shortlist",
            "Negotiation Agent (policy, close)",
          ],
        },
      ],
      footnote:
        "NestJS microservices. RabbitMQ carries every agent handoff asynchronously. WhatsApp is the candidate channel.",
    },
  },
  {
    id: "support-bot",
    title: "WhatsApp Support Bot",
    tag: "AI / RAG",
    summary:
      "Answers technical FAQs for an education app over WhatsApp, and hands off to a human when it should not answer.",
    problem:
      "Routine support questions arrived over WhatsApp and needed a person to answer each one.",
    approach:
      "A Llama model answers from a vector database of support content. When the answer does not satisfy the user, an escalate-to-admin button forwards the live conversation to a human agent through event emitters.",
    outcome:
      "Instant answers on common queries, with a path to a human that keeps the conversation intact.",
    tech: [
      "Llama",
      "RAG",
      "Vector DB",
      "Node.js",
      "MongoDB",
      "Redis",
      "WhatsApp",
    ],
    videoSrc: "/videos/bot.mp4",
  },
  {
    id: "scamshield",
    title: "ScamShield",
    tag: "Mobile Development",
    summary:
      "A Flutter-based mobile application for detecting potential scams across messaging platforms.",
    problem:
      "Users can receive suspicious messages and media through messaging platforms, making it difficult to identify potential scams before interacting with them.",
    approach:
      "Built a Flutter Android application that analyzes captured messaging content using accessibility services, OCR, and AI models. The application also includes scam-related alerts, reporting, chatbot support, educational tips, and deepfake image analysis.",
    outcome:
      "A working mobile scam-detection application combining mobile development, AI/ML, OCR, and accessibility services.",
    photosrc: [
      "/projects/scam shield/login.jpeg",
      "/projects/scam shield/home.jpeg",
      "/projects/scam shield/notifications.jpeg",
      "/projects/scam shield/upload zip file.jpeg",
      "/projects/scam shield/scam results.jpeg",
      "/projects/scam shield/upload image.jpeg",
      "/projects/scam shield/deepfake identified.jpeg",
      "/projects/scam shield/real identified.jpeg",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "Gemini API",
      "OCR",
      "Accessibility Service",
      "DistilBERT",
      "RoBERTa",
      "XceptionNet",
    ],
  },

  {
    id: "invoker",
    title: "Invoker",
    tag: "AI / RAG",
    summary:
      "Exam prep. A student photographs a question and gets the exact marking scheme back.",
    problem:
      "Students revise from past papers but cannot find the marking scheme for a question they are stuck on. Searching by text fails on mathematical notation.",
    approach:
      "Every past paper is chunked at question-part level, embedded, and stored in Qdrant. At query time the student's photo is read with Google Vision, and Mathpix for mathematical notation. The extracted query runs through hybrid search: dense embedding search over Qdrant fused with BM25 lexical search. That resolves the closest source paper.",
    outcome:
      "Returns the exact marking scheme, the exact question number, and an AI explanation grounded in marking schemes and examiner reports.",
    tech: [
      "Qdrant",
      "Hybrid Search",
      "BM25",
      "Embeddings",
      "RAG",
      "Google Vision",
      "Mathpix",
      "NestJS",
    ],
    diagram: {
      groups: [
        {
          title: "Offline indexing",
          stages: [
            "Past papers",
            "Question-part chunking",
            "Embeddings",
            "Qdrant",
          ],
        },
        {
          title: "Query time",
          stages: [
            "Student photo",
            "OCR (Vision + Mathpix)",
            "Query",
            ["Dense search over Qdrant", "BM25 lexical search"],
            "Fuse results",
            "Best-matching paper",
            "Marking scheme + question number + grounded explanation",
          ],
        },
      ],
    },
  },

  {
    id: "bi-agent",
    title: "BI Analysis Agent",
    tag: "AI / Backend",
    summary:
      "A chat agent that answers analysts' questions in plain language against a data warehouse, returning numbers, charts and a written summary.",
    problem:
      "The agent turned questions into SQL over a large warehouse. It was slow and it hallucinated. The prompts reaching the model carried far more than the model needed, and the schema held many near-duplicate business-logic tables, so retrieval often locked onto the wrong one and produced confidently wrong SQL.",
    approach:
      "Consolidated similar business-logic tables into single wider models, so schema retrieval had one clear target instead of several near-identical ones. Cut the prompts down before they reached the query engine, stripping bulky access-control lists and other context that inflated token counts without improving the answer. Moved access control off the LLM onto a deterministic algorithm that resolves entities and checks scope in code before generation. Replaced a 23-second access-hierarchy lookup with a cached hierarchy that database triggers invalidate when the data-load job runs. Merged redundant per-task LLM calls that separately handled entity extraction and context build-up.",
    outcome:
      "Response time down by around 80%, with fewer hallucinations, better accuracy, and lower token usage per question.",
    tech: [
      "WrenAI",
      "Text-to-SQL",
      "RAG",
      "Prompt Engineering",
      "Vector Retrieval",
      "RBAC",
      "Caching",
      "PostgreSQL",
    ],
    diagram: {
      groups: [
        {
          title: "Query path",
          stages: [
            "Question",
            "Identity and role resolution",
            "Deterministic access check",
            "Router",
            [
              "Text-to-SQL, run query, chart and summary",
              "Document retrieval, cited answer",
            ],
            "Answer",
          ],
        },
      ],
      footnote:
        "What changed: near-duplicate business-logic tables consolidated into single wider models, prompts trimmed before they reach the query engine, access control moved from the LLM into deterministic code, and the access hierarchy served from a cache that database triggers invalidate on each data load.",
    },
  },

  {
    id: "chitchatz",
    title: "ChitChatz",
    videoSrc: "/videos/chit_chatz.mp4",
    tag: "Mobile Development",
    summary:
      "A Flutter-based messaging application with authentication, real-time communication, and media handling.",
    problem:
      "Users need a simple mobile experience for communicating and sharing content.",
    approach:
      "Built the mobile application using Flutter with Firebase-based services, FastAPI backend integration, Google authentication, and ImageKit for media handling.",
    outcome:
      "A functional cross-platform messaging application combining Flutter, backend APIs, authentication, and media services.",
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "FastAPI",
      "Google Authentication",
      "ImageKit",
    ],
  },

  {
    id: "forewell",
    title: "ForeWell",
    tag: "Mobile / Firebase",
    videoSrc: "",
    summary:
      "A Flutter and Firebase wellness application combining guided content, music, meditation, and chatbot features.",
    problem:
      "Users need a single mobile experience for accessing wellness content and interactive features.",
    approach:
      "Developed a Flutter application with Firebase integration, chatbot functionality, meditation videos, music playback, quizzes, and related user features.",
    outcome:
      "A complete mobile wellness application built around multimedia content and interactive experiences.",
    tech: ["Flutter", "Dart", "Firebase", "Chatbot", "Media Player"],
  },

  {
    id: "parco-admin-portal",
    title: "PARCO Admin Portal",
    tag: "UI/UX Design",
    summary:
      "Internal application interfaces designed for PARCO business workflows.",
    problem:
      "Internal applications need clear interfaces that make business workflows easier to manage.",
    approach:
      "Designed multiple internal application interfaces in Figma, focusing on structured layouts, forms, navigation, and administrative workflows.",
    outcome:
      "UI designs for three internal applications used for business workflows.",
    tech: ["Figma", "UI/UX", "Admin Dashboard", "Prototyping"],
    thumbnail: "/projects/thumbnails/parco design.jpg",
    figmaprotoUrl: [
      "https://www.figma.com/proto/pkTdtOfrgOWYPkFw18kcd6/Parco-Admin-Portal-Design?node-id=95-377&t=xZrHw7wmNwiAbbM9-1",
      "https://www.figma.com/proto/pkTdtOfrgOWYPkFw18kcd6/Parco-Admin-Portal-Design?node-id=248-821&t=RwOUu1kdfpCVSVJh-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=248%3A821&show-proto-sidebar=1",
      "https://www.figma.com/proto/pkTdtOfrgOWYPkFw18kcd6/Parco-Admin-Portal-Design?node-id=4-96&t=RwOUu1kdfpCVSVJh-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A96&show-proto-sidebar=1",
    ],
  },
  {
    id: "ecommerce-shoes",
    title: "E-Commerce Shoes",
    tag: "UI/UX Design",
    photosrc: [
      "/projects/ecommerce shoes/register_ui.png",
      "/projects/ecommerce shoes/login_ui.png",
      "/projects/ecommerce shoes/home_ui.png",
      "/projects/ecommerce shoes/products_listing_ui.png",
      "/projects/ecommerce shoes/shopping_cart_ui.png",
      "/projects/ecommerce shoes/checkout_ui.png",
    ],
    summary:
      "A modern shoe e-commerce website concept designed around product discovery and online shopping.",
    problem:
      "E-commerce interfaces need clear product presentation, intuitive navigation, and a smooth shopping flow.",
    approach:
      "Designed the complete responsive e-commerce experience in Figma, including product browsing, product details, and shopping-oriented interface layouts.",
    outcome:
      "A complete shoe e-commerce UI concept prepared for responsive web implementation.",
    tech: ["Figma", "UI/UX", "Responsive Design", "E-Commerce"],
  },

  {
    id: "ivy-learning-ui",
    title: "Ivy Learning Platform",
    tag: "UI/UX Design",
    summary:
      "A learning platform interface designed for an education-focused digital product.",
    problem:
      "Learning platforms need to organize courses, educational content, dashboards, and user actions clearly.",
    approach:
      "Designed the platform interface in Figma with structured learning flows, dashboards, course layouts, and responsive screens.",
    outcome: "A complete education-platform UI/UX concept.",
    thumbnail: "/projects/thumbnails/ivy design.png",
    figmaprotoUrl: [
      "https://www.figma.com/proto/s8mOASgEJyZ4iXLWcTBZxK/Ivy-Learning-Platform-Design?node-id=15-2&t=QUVKBz8DpQzJYE6s-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=15%3A2",
      "https://www.figma.com/proto/s8mOASgEJyZ4iXLWcTBZxK/Ivy-Learning-Platform-Design?node-id=56-63&t=rfAi6CPxXNSiWL64-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=15%3A2",
    ],

    tech: [
      "Figma",
      "UI/UX",
      "Education",
      "Dashboard Design",
      "Responsive Design",
    ],
  },

  {
    id: "food-website",
    title: "Food Website",
    tag: "UI/UX Design",
    summary:
      "A modern food website interface designed for browsing and discovering food products.",
    problem:
      "Food websites need strong visual hierarchy and simple navigation to help users discover products quickly.",
    approach:
      "Created a responsive website interface in Figma with structured sections, product presentation, navigation, and clear calls to action.",
    outcome:
      "A polished food website UI concept ready for frontend implementation.",
    thumbnail: "/projects/thumbnails/foodie design.png",
    figmaprotoUrl: [
      "https://www.figma.com/proto/decflFskc5FxFWurDyRZeZ/Untitled?node-id=1-2&node-type=frame&t=U8lfN8MlCkyKjRIE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A30",
      "https://www.figma.com/proto/XFCSwtV9lXNxR96RPiql44/Untitled?node-id=3-302&starting-point-node-id=3%3A302&t=Pr0uW6NEeCQ1Nlnu-1",
    ],
    tech: ["Figma", "UI/UX", "Web Design", "Responsive Design"],
  },

  {
    id: "data-governance",
    title: "Data Governance Tool",
    tag: "Backend / Enterprise",
    summary:
      "An enterprise data governance application built around backend services and structured data management.",
    problem:
      "Enterprise systems need controlled access to structured data and reliable backend services for governance workflows.",
    approach:
      "Developed backend services using Java Spring Boot and PostgreSQL, with APIs supporting the application's data workflows.",
    outcome: "A backend system for enterprise data governance workflows.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
  },

  {
    id: "enterprise-db-migration",
    title: "Enterprise Database Migration",
    tag: "Backend / Data",
    summary:
      "Database migration work involving enterprise systems and large relational datasets.",
    problem:
      "Legacy enterprise applications may require database modernization while preserving existing application workflows.",
    approach:
      "Worked on database migrations involving MSSQL and PostgreSQL, including schema, queries, and application-side compatibility.",
    outcome:
      "Modernized database infrastructure while supporting existing enterprise application requirements.",
    tech: ["MSSQL", "PostgreSQL", "Database Migration", "SQL"],
  },

  {
    id: "pharmapulse",
    title: "PharmaPulse",
    tag: "Backend / Enterprise",
    summary: "Enterprise backend development for a pharmaceutical application.",
    problem:
      "Enterprise pharmaceutical systems require structured backend services and reliable data handling.",
    approach:
      "Developed backend functionality using .NET technologies and database integrations.",
    outcome: "Backend services supporting pharmaceutical business workflows.",
    tech: [".NET", ".NET Core", "REST APIs", "Database"],
  },

  {
    id: "dvago",
    title: "DVAGO",
    tag: "Backend / Database",
    summary:
      "Backend development and database optimization for an enterprise application.",
    problem:
      "Large applications can experience performance issues when database queries and data access are not optimized.",
    approach:
      "Worked with .NET and PostgreSQL, including query optimization and backend development.",
    outcome:
      "Improved backend data-access performance and supported application functionality.",
    tech: [".NET", "PostgreSQL", "REST APIs", "Query Optimization"],
  },

  {
    id: "colgate-psp",
    title: "Colgate PSP",
    tag: "Backend / Enterprise",
    summary:
      "Enterprise backend application built with .NET Core and REST APIs.",
    problem:
      "Enterprise workflows require secure backend services for handling business operations and data.",
    approach:
      "Developed backend functionality using .NET Core, REST APIs, and Microsoft SQL Server.",
    outcome: "Backend services supporting enterprise business workflows.",
    tech: [".NET Core", "REST APIs", "MSSQL"],
  },

  {
    id: "reporting-migration",
    title: "Reporting Platform Migration",
    tag: "Backend / Data",
    summary: "Moved reporting off SQL Server onto Redshift with no downtime.",
    problem:
      "Reporting ran on SQL Server with logic locked inside stored procedures.",
    approach:
      "Redesigned the dimensional schema for Redshift, ported the stored-procedure logic, and ran a zero-downtime cutover.",
    outcome: "Reporting served from Redshift with no interruption to users.",
    tech: ["Redshift", "SQL Server", "Dimensional Modelling", "ETL"],
  },
  {
    id: "videotube",
    title: "Video Sharing Platform",
    tag: "Web Development",

    summary:
      "A full-stack video sharing platform built for uploading, managing, and viewing video content.",

    problem:
      "A video platform needs a reliable way to handle video content while keeping users authenticated and their interactions organized.",

    approach:
      "Built the application using Node.js and Express for the backend, MongoDB for data storage, and JWT for authentication. The frontend and backend were developed as separate applications.",

    outcome:
      "A full-stack video sharing application with a dedicated frontend, backend API, database, and authentication layer.",

    tech: ["Node.js", "Express", "MongoDB", "JWT"],

    videoSrc: "/videos/videotube.mp4",

    githubfrontendUrl: "https://github.com/sahamahmed/video-tube-frontend",

    githubbackendUrl: "https://github.com/sahamahmed/video-tube-backend",
  },

  {
    id: "lms",
    title: "LMS Platform",
    tag: "Web Development",

    summary:
      "A full-stack learning management platform combining course content, real-time communication, and payment functionality.",

    problem:
      "A learning platform needs to bring educational content, user interactions, communication, and payments together in one web application.",

    approach:
      "Built a full-stack LMS using Next.js and Node.js, with MongoDB for data management, Socket.io for real-time communication, and Stripe for payment processing.",

    outcome:
      "A complete learning management platform with a modern web frontend, backend services, database, real-time functionality, and payment integration.",

    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Socket.io"],

    videoSrc: "/videos/lms.mp4",

    githubfrontendUrl: "https://github.com/sahamahmed/lms-frontend",

    githubbackendUrl: "https://github.com/sahamahmed/lms-backend",
  },

  {
    id: "ivy",
    title: "IVY",
    tag: "Mobile / Web / Backend",
    summary:
      "Reliability and backend work on a live iOS, Android and web education product serving over 1,000 active users.",
    problem:
      "The product ran at around 100 users with frequent downtime. There was no way to see where it was failing.",
    approach:
      "Introduced end-to-end observability with Grafana, Loki, Promtail and Pino, then hardened the backend against the failures that surfaced. That included an idempotent purchase-reconciliation flow that validates store purchase tokens against the store as the source of truth.",

    outcome:
      "Stable operation at over 1,000 active users. Work spans AI features, backend, payments and subscriptions, store integrations, dashboards, and deployment.",
    tech: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Grafana",
      "Loki",
      "Promtail",
      "Pino",
      "Payments",
    ],
  },
];

export const earlierProjects = [
  {
    title: "E-Commerce Website",
    tag: "Web Development",
    tech: "HTML, CSS, JavaScript",
  },

  {
    title: "Music Web App",
    tag: "Web Development",
    tech: "HTML, CSS, JavaScript",
  },

  {
    title: "QuizBuzz",
    tag: "Software Development",
    tech: "Python",
  },

  {
    title: "Music App",
    tag: "Web Development",
    tech: "HTML, CSS, JavaScript",
  },
];
