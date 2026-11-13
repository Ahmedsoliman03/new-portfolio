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
      bullets: (t("projects.items.qriibDashboard.bullets", { returnObjects: true }) as string[]) || [],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      category: t("projects.categories.dashboard")
    },
    {
      title: t("projects.items.rtc.title"),
      bullets: (t("projects.items.rtc.bullets", { returnObjects: true }) as string[]) || [],
      tech: ["Next.js", "TypeScript", "Socket.IO", "LiveKit", "Redux Toolkit"],
      category: t("projects.categories.realTime")
    },
    {
      title: t("projects.items.devkit.title"),
      bullets: (t("projects.items.devkit.bullets", { returnObjects: true }) as string[]) || [],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      category: t("projects.categories.portal"),
      link: "https://vcloud.vconnct.me"
    },
    {
      title: t("projects.items.daam.title"),
      bullets: (t("projects.items.daam.bullets", { returnObjects: true }) as string[]) || [],
      tech: ["Vue.js", "Vuex", "Pinia", "Tailwind CSS", "Ruby"],
      category: t("projects.categories.support")
    },
    {
      title: t("projects.items.iab.title"),
      subheading: t("projects.items.iab.subheading"),
      bullets: (t("projects.items.iab.bullets", { returnObjects: true }) as string[]) || [],
      tech: ["React", "TanStack Start", "Supabase", "Postgres"],
      category: t("projects.categories.aviation")
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
              className={index === projects.length - 1 && projects.length % 2 !== 0 ? "md:col-span-2 md:max-w-3xl md:mx-auto w-full" : ""}
            >
              <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-glow h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4 gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-accent/50 text-accent text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {project.subheading && (
                    <p className="text-xs font-semibold text-accent mb-3">
                      {project.subheading}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4 mt-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/60 hover:bg-secondary text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground leading-relaxed">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1 text-xs shrink-0">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.link && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-auto group/btn border-primary/30 hover:border-primary"
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
