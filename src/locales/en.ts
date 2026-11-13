const en = {
  nav: {
    logo: "Ahmed Mohamed",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact"
  },
  hero: {
    title: "Ahmed Mohamed Ahmed Ali",
    subtitle: "Frontend developer",
    description: "Frontend Engineer with 3+ years building and owning production-grade Next.js/TypeScript platforms for real-time communication (WebRTC/LiveKit), serving 1,000+ users and 800+ concurrent sessions. Experienced in auth architecture (Keycloak SSO), payments/subscription systems, and performance optimization, with end-to-end ownership from design handoff to production.",
    contactMe: "Contact Me",
    linkedin: "LinkedIn",
    location: "Egypt",
    status: "Available for work"
  },
  about: {
    title: "About Me",
    paragraph: "Frontend Engineer with 3+ years building and owning production-grade Next.js/TypeScript platforms for real-time communication (WebRTC/LiveKit), serving 1,000+ users and 800+ concurrent sessions. Experienced in auth architecture (Keycloak SSO), payments/subscription systems (Stripe, Paymob, Wallet Payments), and performance optimization, with end-to-end ownership from design handoff to production. Holds a Bachelor's degree in Computer Science from Akhbar Elyoum Academy (2021 – 07/2025).",
    features: {
      cleanCode: {
        title: "Frontend Architecture",
        description: "Building production-grade, component-driven web applications with Next.js, React, and TypeScript."
      },
      realtime: {
        title: "Real-Time Communication",
        description: "Architecting WebRTC, LiveKit, and Socket.IO platforms supporting 800+ concurrent sessions with low latency."
      },
      authPayments: {
        title: "Auth & Subscriptions",
        description: "Designing Keycloak SSO auth layers and complex subscription & payment workflows with Stripe and Paymob."
      },
      performance: {
        title: "Performance Optimization",
        description: "Boosting web speed with Code Splitting, Lazy Loading, Web Workers, and advanced image optimizations."
      }
    }
  },
  experience: {
    title: "Experience & Education",
    workTitle: "Professional Experience",
    educationTitle: "Education",
    certificationsTitle: "Certifications",
    tawteen: {
      title: "Frontend developer",
      company: "Tawteen Tech",
      location: "Giza, Egypt",
      period: "01/2024 – Present",
      bullets: [
        "Engineered scalable web applications and high-performance dashboards, serving 1,000+ users while ensuring optimal cross-device compatibility. Worked with Supabase, REST APIs, GraphQL, and Strapi CMS to build dynamic, data-driven applications with efficient content and data management.",
        "Built core frontend features for a customer support platform, including a unified agent inbox, ticketing system, Helpdesk referrals, SLA and CSAT dashboards, and an AI-powered reply assistant. Integrated a customer support chat widget into e-commerce stores and websites, enabling businesses to manage customer interactions from a centralized workspace.",
        "Diagnosed and resolved production issues across real-time sessions and payment/subscription flows (e.g., LiveKit connection drops, token refresh failures) using PostHog and logs to trace root causes and ship fixes with minimal user impact.",
        "Designed the authentication layer with Keycloak SSO (token refresh, route guards, role-based rendering), cutting login-related support issues.",
        "Integrated payment gateways including Stripe, Paymob, and wallet payments, while developing subscription workflows such as renewals, upgrades, downgrades, and plan/add-on management."
      ]
    },
    iab: {
      title: "Full Stack",
      company: "International Aviation Business (IAB) - Freelance",
      subheading: "IAB Smart Baggage Ecosystem – Internal Baggage Tracking Platform",
      location: "Giza, Egypt",
      period: "08/2026 – 10/2026",
      bullets: [
        "Rebuilt a modern full-stack baggage tracking platform using React, TanStack Start (SSR, file-based routing, server functions), and Supabase (Postgres, Auth, Realtime, Storage) to manage lost, delayed, and mishandled baggage across Egyptian airport stations.",
        "Implemented role-based access (Admin / Station Agent / Viewer) with Supabase Auth and secured baggage records using Supabase RLS, enforcing station-level data isolation.",
        "Developed real-time baggage status updates, search by Tag / PNR / Flight, and audit logs."
      ]
    },
    nauta: {
      title: "Frontend Developer",
      company: "Nauta L.L.C (Part Time)",
      location: "Germany",
      period: "02/2023 – 01/2024",
      bullets: [
        "Developed responsive web interfaces for international clients using React.js and Tailwind CSS, ensuring cross-browser compatibility and consistent user experience.",
        "Boosted website performance by implementing Lazy Loading, Code Splitting, and advanced image optimization techniques.",
        "Built a reusable UI component library to enhance code maintainability and accelerate the development lifecycle.",
        "Collaborated with backend teams to integrate RESTful APIs, ensuring efficient data flow and robust system architecture."
      ]
    },
    education: {
      degree: "Bachelor’s degree in Computer Science",
      institution: "Akhbar Elyoum Academy",
      location: "Egypt",
      period: "2021 – 07/2025"
    },
    certs: {
      route: {
        title: "Frontend development diploma",
        subtitle: "Route academy — 04/2021 – 10/2021",
        description: "Comprehensive frontend engineering curriculum focusing on responsive web apps, modern JavaScript, and clean architecture."
      },
      fcc: {
        title: "Front-End Development Certification",
        subtitle: "freeCodeCamp — Online Certification",
        description: "Hands-on projects and verification covering responsive frontend design, modern JavaScript, and component-based libraries."
      },
      designPatterns: {
        title: "Design Patterns",
        subtitle: "LinkedIn Learning — Jan 2026 (Online Certification)",
        description: "Mastered design patterns and generic components for maximum code reusability across enterprise applications."
      },
      claudeCode: {
        title: "Claude Code in Action",
        subtitle: "Anthropic — Jun 2026 (Online Certification)",
        description: "Agentic software development workflows, automated testing, and AI-accelerated engineering practices."
      }
    }
  },
  projects: {
    title: "Featured Projects",
    viewProject: "View Project",
    categories: {
      dashboard: "Dashboard / Communications",
      realTime: "Real-Time Communication",
      portal: "Developer Portal",
      support: "Customer Support & AI",
      aviation: "Full Stack Platform"
    },
    items: {
      qriibDashboard: {
        title: "Qriib Dashboard",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
        bullets: [
          "Developed and maintained an interactive dashboard for tracking meeting statuses, scheduling, and managing unified communications at scale.",
          "Integrated secure Single Sign-On (SSO) authentication to manage session tokens, protected routes, and role-based UI rendering, ensuring a seamless and secure login experience.",
          "Optimized real-time performance by applying Optimistic UI patterns and advanced state management to deliver a highly responsive user experience.",
          "Handled complex subscription workflows and integrated secure payment systems including Paymob, Stripe, and mobile wallet payments to support scalable service tiers for international users.",
          "Integrated PostHog analytics to track user interactions and feature usage, providing product-driven insights for continuous improvement."
        ]
      },
      rtc: {
        title: "Real-Time Communication Platform",
        tech: ["Next.js", "TypeScript", "Socket.IO", "LiveKit", "Redux Toolkit"],
        bullets: [
          "Built a real-time communication platform integrated into the Qriib Dashboard using Next.js, Socket.IO, and LiveKit, managing the full audio and video connection lifecycle.",
          "Developed collaborative features including whiteboard, polls, and live streaming using Redux Toolkit for state management.",
          "Optimized performance to support 800+ concurrent users while reducing messaging latency."
        ]
      },
      devkit: {
        title: "Qriib Devkit",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
        bullets: [
          "Developed and maintained the frontend of Qriib Devkit, a developer portal for a cloud communication platform providing scalable APIs and SDKs for real-time video, audio, and streaming services.",
          "Built API Management workflows enabling developers to generate, manage, and secure API keys for platform integration.",
          "Implemented Meetings, Teams, and Organization management modules with role-based access control.",
          "Developed Billing Center and Webhooks configuration interfaces to support scalable enterprise subscription workflows."
        ]
      },
      daam: {
        title: "Daam – Customer Support Platform",
        tech: ["Vue.js", "Vuex", "Pinia", "Tailwind CSS", "Ruby"],
        bullets: [
          "Extended the open-source Chatwoot platform into a commercial customer support product. Designed and built a custom billing module covering plan selection, upgrades, renewals, and payment-state handling across Stripe and Paymob.",
          "Implemented webhook-driven subscription sync with idempotent event handling, keeping billing state consistent across payment gateways and handling retries and failed payments reliably.",
          "Integrated an LLM-based assistant that triages incoming conversations and resolves routine requests automatically, escalating complex or low-confidence cases to human agents."
        ]
      },
      iab: {
        title: "IAB Smart Baggage Ecosystem",
        subheading: "Internal Baggage Tracking Platform",
        tech: ["React", "TanStack Start", "Supabase", "Postgres", "Storage"],
        bullets: [
          "Rebuilt a modern full-stack baggage tracking platform using React, TanStack Start (SSR, file-based routing, server functions), and Supabase (Postgres, Auth, Realtime, Storage) to manage lost, delayed, and mishandled baggage across Egyptian airport stations.",
          "Implemented role-based access (Admin / Station Agent / Viewer) with Supabase Auth and secured baggage records using Supabase RLS, enforcing station-level data isolation.",
          "Developed real-time baggage status updates, search by Tag / PNR / Flight, and audit logs."
        ]
      }
    }
  },
  skills: {
    title: "Skills & Technologies",
    categories: {
      core: "Core Technologies",
      state: "State Management",
      realtime: "Real-time",
      authPayments: "Auth & Payments",
      performance: "Performance Optimization",
      ui: "Styling & UI Systems",
      forms: "Forms & Validation",
      apisBackend: "Tooling & Backend",
      testing: "Quality & Testing",
      devTools: "Dev Tools & Analytics",
      languages: "Languages"
    },
    items: {
      core: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
      state: ["Redux Toolkit", "Zustand", "Context API", "React Query"],
      realtime: ["WebRTC", "LiveKit", "Socket.IO", "Optimistic UI"],
      authPayments: ["Keycloak (SSO)", "Token Refresh", "RBAC", "Protected Routes", "Stripe", "Paymob", "Wallet Payments", "Subscription Billing"],
      performance: ["Lazy Loading", "Code Splitting", "Web Workers", "Image Optimization"],
      ui: ["Tailwind CSS", "Material UI", "Shadcn UI", "Radix UI"],
      forms: ["Formik", "Yup"],
      apisBackend: ["REST APIs", "GraphQL", "Supabase", "Strapi CMS", "Node.js", "Express"],
      testing: ["Jest", "React Testing Library"],
      devTools: ["Git", "GitHub", "GitLab", "PostHog"],
      languages: ["Arabic – Native", "English – Professional"]
    }
  },
  contact: {
    title: "Get In Touch",
    subtitle: "I'm currently available for full-time opportunities and freelance work. Let's connect and discuss how we can work together!",
    email: "Email",
    phone: "Phone",
    location: "Location",
    locationValue: "Egypt",
    linkedin: "LinkedIn",
    linkedinConnect: "Connect on LinkedIn",
    sendEmail: "Send Me an Email"
  }
};

export default en;
