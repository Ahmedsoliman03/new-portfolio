import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: t("projects.items.qriibDashboard.title"),
      description: t("projects.items.qriibDashboard.description"),
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Keycloak"],
      category: t("projects.categories.dashboard")
    },
    {
      title: t("projects.items.rtc.title"),
      description: t("projects.items.rtc.description"),
      tech: ["Next.js", "TypeScript", "Socket.IO", "LiveKit", "Redux Toolkit"],
      category: t("projects.categories.realTime")
    },
    {
      title: t("projects.items.unifyStorage.title"),
      description: t("projects.items.unifyStorage.description"),
      tech: ["TypeScript", "NPM", "Browser API", "Open Source"],
      category: t("projects.categories.npm"),
      link: "https://www.npmjs.com/package/unify-storage"
    },
    {
      title: t("projects.items.inmate.title"),
      description: t("projects.items.inmate.description"),
      tech: ["Next.js", "Material UI", "Tailwind CSS", "Supabase"],
      category: t("projects.categories.enterprise")
    },
    {
      title: t("projects.items.devkit.title"),
      description: t("projects.items.devkit.description"),
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      category: t("projects.categories.portal"),
      link: "https://vcloud.vconnct.me"
    },
    {
      title: t("projects.items.karoot.title"),
      description: t("projects.items.karoot.description"),
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      category: t("projects.categories.dashboard")
    },
    {
      title: t("projects.items.guide.title"),
      description: t("projects.items.guide.description"),
      tech: ["Next.js", "Fumadocs", "MDX", "TypeScript"],
      category: t("projects.categories.docs"),
      link: "https://guide.vconnct.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative" ref={ref}>
      <div className="md:container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-primary bg-clip-text text-transparent">
            {t("projects.title")}
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
                      {t("projects.viewProject")}
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
