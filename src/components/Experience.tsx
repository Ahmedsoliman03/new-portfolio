import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Briefcase, Calendar, GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: "work",
      title: t("experience.tawteen.title"),
      company: t("experience.tawteen.company"),
      location: t("experience.tawteen.location"),
      period: t("experience.tawteen.period"),
      description: (t("experience.tawteen.bullets", { returnObjects: true }) as string[]) || []
    },
    {
      type: "work",
      title: t("experience.iab.title"),
      company: t("experience.iab.company"),
      subheading: t("experience.iab.subheading"),
      location: t("experience.iab.location"),
      period: t("experience.iab.period"),
      description: (t("experience.iab.bullets", { returnObjects: true }) as string[]) || []
    },
    {
      type: "work",
      title: t("experience.nauta.title"),
      company: t("experience.nauta.company"),
      location: t("experience.nauta.location"),
      period: t("experience.nauta.period"),
      description: (t("experience.nauta.bullets", { returnObjects: true }) as string[]) || []
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
      title: t("experience.certs.route.title"),
      subtitle: t("experience.certs.route.subtitle"),
      description: t("experience.certs.route.description")
    },
    {
      title: t("experience.certs.fcc.title"),
      subtitle: t("experience.certs.fcc.subtitle"),
      description: t("experience.certs.fcc.description")
    },
    {
      title: t("experience.certs.designPatterns.title"),
      subtitle: t("experience.certs.designPatterns.subtitle"),
      description: t("experience.certs.designPatterns.description")
    },
    {
      title: t("experience.certs.claudeCode.title"),
      subtitle: t("experience.certs.claudeCode.subtitle"),
      description: t("experience.certs.claudeCode.description")
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
              transition={{ duration: 0.6, delay: 0.15 * index }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-lg text-accent font-medium">{exp.company}</p>
                        {exp.subheading && (
                          <p className="text-sm font-semibold text-primary/90 mt-1">
                            {exp.subheading}
                          </p>
                        )}
                      </div>
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                    <ul className="space-y-2">
                      {Array.isArray(exp.description) &&
                        exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm md:text-base leading-relaxed">
                            <span className="text-primary mt-1.5 shrink-0">▹</span>
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
                <div className="p-3 bg-accent/10 rounded-lg shrink-0">
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
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-6">{t("experience.certificationsTitle")}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-secondary/30 border border-border/40 hover:border-primary/40 transition-colors"
                      >
                        <p className="font-semibold text-lg mb-1">{cert.title}</p>
                        <p className="text-xs font-medium text-accent mb-2">{cert.subtitle}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
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
