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
      title: "Vconnct Website",
      description: "Developed a high-performance website with scalable architecture. Integrated multi-payment gateways for seamless transactions and connected with Cal.com for meeting bookings.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Cal.com"],
      category: "Web Application"
    },
    {
      title: "Vconnct Dashboard",
      description: "Interactive dashboard for tracking meeting statuses, scheduling, analytics, and subscriptions. Implemented intuitive UI components with optimized real-time data performance.",
      tech: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      category: "Dashboard"
    },
    {
      title: "Inmate Communication System",
      description: "Dual-dashboard system for Dubai Correctional Project enabling secure inmate-visitor communication with real-time updates via Supabase.",
      tech: ["Next.js", "Material UI", "Tailwind CSS", "Supabase"],
      category: "Enterprise System"
    },
    {
      title: "Admin Dashboard for Companies",
      description: "Modern admin panel with scalable architecture featuring data visualization, table filtering, and role-based UI features for enhanced usability.",
      tech: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
      category: "Dashboard"
    },
    {
      title: "KAROOT Dashboard",
      description: "Interactive dashboard for managing orders, customers, and worker performance with real-time data visualization and earnings tracking.",
      tech: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      category: "Dashboard"
    },
    {
      title: "Tawteen Website",
      description: "Responsive investment platform utilizing Next.js for SSR and optimized SEO, integrated with Strapi CMS for scalable content management.",
      tech: ["Next.js", "Redux Toolkit", "React Query", "Strapi CMS"],
      category: "Web Platform"
    }
  ];

  return (
    <section className="py-20 px-4 relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
