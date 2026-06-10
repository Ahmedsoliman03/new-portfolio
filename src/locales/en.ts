const en = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact"
  },
  hero: {
    title: "Ahmed Mohamed",
    subtitle: "Frontend Developer",
    description: "2+ years building scalable web applications, high-performance dashboards, and real-time communication systems — with React, Next.js & TypeScript.",
    contactMe: "Contact Me",
    linkedin: "LinkedIn",
    location: "Giza, Egypt",
    status: "Available for work"
  },
  about: {
    title: "About Me",
    paragraph: "A results-driven Frontend Developer with over 2 years of professional experience in building scalable web applications and high-performance dashboards. Graduated with a Bachelor's Degree in Computer Science (2025). Expert in React.js, Next.js, and TypeScript, with a proven track record in integrating real-time communication features using WebRTC and LiveKit. Proficient in modern state management (Zustand, Redux), API integration (REST, GraphQL), and CMS systems like Strapi. Familiar with backend fundamentals using Node.js and Express.js, including building RESTful APIs and basic database integration. Passionate about writing clean, maintainable code and delivering seamless user experiences.",
    features: {
      cleanCode: {
        title: "Clean Code",
        description: "Writing maintainable and scalable code following best practices"
      },
      responsive: {
        title: "Responsive Design",
        description: "Creating seamless experiences across all devices"
      },
      api: {
        title: "API Integration",
        description: "Expertise in REST APIs, GraphQL, and real-time data"
      },
      performance: {
        title: "Performance",
        description: "Building high-performance, optimized applications"
      }
    }
  },
  experience: {
    title: "Experience & Education",
    workTitle: "Work Experience",
    educationTitle: "Education",
    certificationsTitle: "Certifications",
    vconnct: {
      title: "Frontend Developer",
      company: "Vconnct",
      location: "Giza, Egypt",
      period: "01/2024 – Present",
      bullets: [
        "Engineered scalable web applications and high-performance dashboards using Next.js and TypeScript, serving 1,000+ users while ensuring optimal cross-device compatibility. Worked with Supabase, REST APIs, GraphQL, and Strapi CMS to build dynamic, data-driven applications with efficient content and data management.",
        "Implemented real-time video, audio, and chat features using LiveKit and WebRTC, supporting concurrent sessions with optimized latency and scalable architecture.",
        "Implemented Keycloak SSO in the web application, managing authentication state, token refresh, protected routes, and role-based UI rendering.",
        "Developed secure server-side APIs in Next.js for CRUD operations with robust validation and authorization mechanisms. Built a rich text editor with formatting capabilities (bold, headings, links) while ensuring input sanitization and security best practices to prevent XSS and malicious content injection.",
        "Integrated payment gateways including Stripe, Paymob, and wallet payments, while developing subscription workflows such as renewals, upgrades, downgrades, and plan/add-on management."
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
      degree: "Bachelor's Degree in Computer Science",
      institution: "Akhbar Elyoum Academy",
      location: "Giza, Egypt",
      period: "2021 – 07/2025"
    },
    certs: {
      designPatterns: {
        title: "Design Patterns",
        subtitle: "LinkedIn Learning — Jan 2026",
        description: "Mastered Generic Components for maximum code reusability across large-scale applications."
      },
      fcc: {
        title: "Front-End Development Certification (Bootstrap, React, Redux)",
        subtitle: "freeCodeCamp",
        description: "Practical experience in Bootstrap, jQuery, React, and Redux."
      },
      route: {
        title: "Frontend Development Diploma",
        subtitle: "Route Academy — 04/2021 – 10/2021, Giza, Dokki",
        description: "Built responsive and interactive web applications with a focus on clean and maintainable code."
      }
    }
  },
  projects: {
    title: "Featured Projects",
    viewProject: "View Project",
    categories: {
      dashboard: "Dashboard",
      realTime: "Real-Time App",
      npm: "NPM Package",
      enterprise: "Enterprise System",
      portal: "Developer Portal",
      docs: "Documentation"
    },
    items: {
      qriibDashboard: {
        title: "Qriib Dashboard",
        description: "Developed and maintained an interactive dashboard for tracking meeting statuses, scheduling, and managing unified communications at scale. Integrated secure SSO (Keycloak), real-time data visualization for active sessions, earnings, and analytics, and managed complex Stripe/Paymob payment workflows."
      },
      rtc: {
        title: "Real-Time Communication Platform",
        description: "Built a real-time communication platform integrated into the Qriib Dashboard using Next.js, Socket.IO, and LiveKit, managing the full audio/video connection lifecycle. Implemented whiteboard, polls, and live streaming, optimizing performance for 800+ concurrent users."
      },
      unifyStorage: {
        title: "Unify Storage",
        description: "Open-source NPM package — a unified storage utility for Next.js that automatically persists data to both localStorage and cookies, with safe server-side handling to prevent 'window is not defined' crashes."
      },
      inmate: {
        title: "Inmate Communication System",
        description: "Developed a dual-dashboard system (Admin & Visitor) to enable secure inmate-visitor communication. Built an Admin dashboard via Supabase with robust authentication and a Visitor dashboard for registration, scheduling, and session tracking."
      },
      devkit: {
        title: "Qriib Devkit",
        description: "Developed and maintained a developer portal for a cloud communication platform providing scalable APIs and SDKs. Built API management workflows, meetings/teams/org management with role-based access, and Billing/Webhooks configuration."
      },
      karoot: {
        title: "KarootT Dashboard",
        description: "Interactive dashboard for a car wash platform to manage orders, customers, and worker performance. Implemented real-time data visualization for active/completed/pending orders, earnings tracking, and customer insights."
      },
      guide: {
        title: "Developer Guide",
        description: "Modern documentation platform with developer-first experience, built with Fumadocs and MDX for easy navigation, search, and contribution."
      }
    }
  },
  skills: {
    title: "Skills & Technologies",
    categories: {
      foundations: "Core Frontend Foundations",
      frameworks: "Frontend Frameworks & Libraries",
      styling: "Styling & UI Frameworks",
      state: "State Management",
      data: "Data Fetching & Real-Time Communication",
      forms: "Forms & Validation",
      tools: "Type Safety & Development Tools",
      testing: "Testing",
      backend: "Backend",
      languages: "Languages",
      soft: "Soft Skills"
    },
    items: {
      foundations: ["HTML", "CSS", "JavaScript"],
      frameworks: ["React.js", "Next.js"],
      styling: ["Tailwind CSS", "Bootstrap", "Material UI (MUI)", "Shadcn UI", "Radix UI"],
      state: ["Context API", "Zustand", "Redux Toolkit"],
      data: ["React Query", "Socket.IO", "LiveKit", "WebRTC"],
      forms: ["Formik", "Yup"],
      tools: ["TypeScript", "Git", "Gitlab", "GitHub"],
      testing: ["Jest", "React Testing Library"],
      backend: ["Node.js", "Express", "REST APIs", "Strapi", "Supabase"],
      languages: ["Arabic", "English"],
      soft: ["Continuous Learning & Adaptability", "Agile Methodology", "Problem Solving", "Team Collaboration", "Time Management"]
    }
  },
  contact: {
    title: "Get In Touch",
    subtitle: "I'm currently available for freelance work and full-time opportunities. Let's connect and discuss how we can work together!",
    email: "Email",
    phone: "Phone",
    location: "Location",
    locationValue: "Giza, Egypt",
    linkedin: "LinkedIn",
    linkedinConnect: "Connect on LinkedIn",
    sendEmail: "Send Me an Email"
  }
};

export default en;
