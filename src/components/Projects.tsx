import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Qriib Dashboard",
      description:
        "Interactive dashboard for tracking meeting statuses, scheduling, and unified communications. Integrated Keycloak SSO, real-time data visualization for sessions and earnings, and complex subscription workflows with secure payment systems (Paymob, Stripe, mobile wallets).",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Keycloak"],
      category: "Dashboard"
    },
    {
      title: "Real-Time Communication Platform",
      description:
        "Zoom-like platform built with LiveKit and Socket.IO integrated into the Qriib Dashboard. Features whiteboard, polls, and live streaming with 800+ concurrent users supported and optimized messaging latency.",
      tech: ["Next.js", "TypeScript", "Socket.IO", "LiveKit", "Redux Toolkit"],
      category: "Real-Time App"
    },
    {
      title: "Unify Storage",
      description:
        "Open-source NPM package — a unified storage utility for Next.js that automatically persists data to both localStorage and cookies, with safe server-side handling to prevent 'window is not defined' crashes.",
      tech: ["TypeScript", "NPM", "Browser API", "Open Source"],
      category: "NPM Package",
      link: "https://www.npmjs.com/package/unify-storage"
    },
    {
      title: "Inmate Communication System",
      description:
        "Dual-dashboard system (Admin & Visitor) for Dubai Correctional Project enabling secure inmate-visitor communication. Admin manages users and real-time updates via Supabase; Visitor dashboard handles registration, scheduling, and session tracking.",
      tech: ["Next.js", "Material UI", "Tailwind CSS", "Supabase"],
      category: "Enterprise System"
    },
    {
      title: "Vcloud Dashboard",
      description:
        "Frontend for Vcloud — a cloud communication platform providing scalable APIs and SDKs for real-time video, audio, and streaming services. Manages high-volume data and real-time interactions.",
      tech: ["Next.js", "TypeScript", "Redux Toolkit", "Node.js"],
      category: "Dashboard",
      link: "https://vcloud.vconnct.me"
    },
    {
      title: "KarootT Dashboard",
      description:
        "Interactive dashboard for managing orders, customers, and worker performance. Features real-time data visualization for active, completed, and pending orders with earnings tracking and top-performer insights.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      category: "Dashboard"
    },
    // {
    //   title: "Vconnct Website",
    //   description:
    //     "High-performance marketing website with scalable architecture. Integrated multi-payment gateways for seamless transactions and Cal.com for meeting bookings.",
    //   tech: ["Next.js", "TypeScript", "Tailwind CSS", "Cal.com"],
    //   category: "Web Application",
    //   link: "https://vconnct.me/en/home"
    // },
    {
      title: "Developer Guide",
      description:
        "Modern documentation platform with developer-first experience, built with Fumadocs and MDX for easy navigation, search, and contribution.",
      tech: ["Next.js", "Fumadocs", "MDX", "TypeScript"],
      category: "Documentation",
      link: "https://guide.vconnct.com"
    }
  ];

  return (
    <section className="py-20 px-4 relative" ref={ref}>
      <div className="md:container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-glow h-full flex flex-col">


                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="border-accent/50 text-accent">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.link && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-auto group/btn"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
