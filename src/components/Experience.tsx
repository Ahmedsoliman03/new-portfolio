import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: "work",
      title: t("experience.vconnct.title"),
      company: t("experience.vconnct.company"),
      location: t("experience.vconnct.location"),
      period: t("experience.vconnct.period"),
      description: t("experience.vconnct.bullets", { returnObjects: true }) as string[] || []
    },
    {
      type: "work",
      title: t("experience.nauta.title"),
      company: t("experience.nauta.company"),
      location: t("experience.nauta.location"),
      period: t("experience.nauta.period"),
      description: t("experience.nauta.bullets", { returnObjects: true }) as string[] || []
    }
  ];

  const education = {
    degree: t("experience.education.degree"),
    institution: t("experience.education.institution"),
    location: t("experience.education.location"),
    period: t("experience.education.period")
  };

  const certifications = [
    {
      title: t("experience.certs.designPatterns.title"),
      subtitle: t("experience.certs.designPatterns.subtitle"),
      description: t("experience.certs.designPatterns.description")
    },
    {
      title: t("experience.certs.fcc.title"),
      subtitle: t("experience.certs.fcc.subtitle"),
      description: t("experience.certs.fcc.description")
    },
    {
      title: t("experience.certs.route.title"),
      subtitle: t("experience.certs.route.subtitle"),
      description: t("experience.certs.route.description")
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative" ref={ref}>
      <div className="md:container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-primary bg-clip-text text-transparent">
            {t("experience.title")}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {/* Work Experience */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-lg text-accent">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                    <ul className="space-y-2">
                      {Array.isArray(exp.description) && exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 shadow-card hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{education.degree}</h3>
                      <p className="text-lg text-accent">{education.institution}</p>
                    </div>
                    <Badge variant="outline" className="border-accent/50 text-accent">
                      <Calendar className="h-3 w-3 mr-1" />
                      {education.period}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{education.location}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{t("experience.certificationsTitle")}</h3>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{cert.title}</p>
                          <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
                          <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;