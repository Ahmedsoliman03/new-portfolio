import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { title } from "process";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Core Frontend Foundations",
      skills: [
        "JavaScript",
        "HTML", "CSS", 
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js"]
    },
    {
      title: " Styling & UI Frameworks",
      skills: ["Tailwind CSS", "Material UI", "Framer Motion", "Bootstrap" , "Shadcn UI", "Radix UI"]
    },
    {
      title: "State Management",
      skills: ["Redux Toolkit", "Zustand", "React Query"]
    },
    {
      title: " Forms & Validation",
      skills: [ "Formik", "Yup" , "Zod"]
    }
    ,
    {
      title:"Data Fetching & Real-Time Communication",
      skills: ["Axios", "React Query", "WebSockets"]
    },
  
    {
      title: " Type Safety & Development Tools"
      , skills: ["TypeScript", "Git", "Gitlab", "GitHub" ]
    },
    {
      title: " Testing"
      , skills: ["Jest", "React Testing Library"]
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-glow h-full">
                <h3 className="text-xl font-bold mb-4 text-accent group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
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

export default Skills;
