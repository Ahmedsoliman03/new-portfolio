import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: t("skills.categories.core"),
      skills: (t("skills.items.core", { returnObjects: true }) as string[]) || []
    },
    {
      title: t("skills.categories.realtime"),
      skills: (t("skills.items.realtime", { returnObjects: true }) as string[]) || []
    },
    {
      title: t("skills.categories.authPayments"),
      skills: (t("skills.items.authPayments", { returnObjects: true }) as string[]) || []
    },
    {
      title: t("skills.categories.state"),
      skills: (t("skills.items.state", { returnObjects: true }) as string[]) || []
    },
    {
      title: t("skills.categories.performance"),
      skills: (t("skills.items.performance", { returnObjects: true }) as string[]) || []
    },
    {
      title: t("skills.categories.apisBackend"),
      skills: (t("skills.items.apisBackend", { returnObjects: true }) as string[]) || []
    },
    {
      title: t("skills.categories.ui"),
      skills: (t("skills.items.ui", { returnObjects: true }) as string[]) || []
    },
    {
      title: t("skills.categories.forms"),
      skills: (t("skills.items.forms", { returnObjects: true }) as string[]) || []
    },
    {
      title: t("skills.categories.testing"),
      skills: (t("skills.items.testing", { returnObjects: true }) as string[]) || []
    },
    {
      title: t("skills.categories.devTools"),
      skills: (t("skills.items.devTools", { returnObjects: true }) as string[]) || []
    },
    {
      title: t("skills.categories.languages"),
      skills: (t("skills.items.languages", { returnObjects: true }) as string[]) || []
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative" ref={ref}>
      <div className="md:container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t("skills.title")}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-glow h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-accent group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(category.skills) &&
                      category.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 bg-secondary/60 rounded-lg text-sm text-foreground/90 border border-border/40 hover:text-foreground hover:border-primary/40 hover:bg-secondary transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
