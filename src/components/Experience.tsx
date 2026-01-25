import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: "work",
      title: "Frontend Developer",
      company: "Vconnct",
      location: "Giza, Egypt",
      period: "01/2024 – Present",
      description: [
        "Developed responsive and dynamic web pages and interactive dashboards, ensuring optimal performance, usability, and cross-device compatibility.",
        "Engineered real-time communication features using LiveKit and WebRTC to build real-time communication features similar to Zoom and Google Meet, including chat, raise hand, microphone, and video functionality.",
        "Integrated Supabase for real-time data, authentication, and database management in web apps.",
        "Integrated Strapi APIs with frontend projects for dynamic content rendering and efficient data handling."
      ]
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "Nauta L.L.C (Freelancing)",
      location: "Germany (Remote)",
      period: "02/2023 – 01/2024",
      description: [
        "Developed and maintained responsive web interfaces using React.js, Next.js, and Tailwind CSS to ensure high performance and accessibility across devices.",
        "Collaborated with backend teams to integrate RESTful APIs and optimize data flow between frontend and backend systems.",
        "Implemented reusable UI components and improved code structure for scalability and maintainability.",
        "Focused on UI/UX enhancement, ensuring smooth user interaction and modern design alignment.",
        "Optimized website performance through lazy loading, code splitting, and image optimization."
      ]
    }
  ];

  const education = {
    degree: "Bachelor's degree in Computer Science",
    institution: "Akhbar Elyoum Academy",
    location: "Giza, Egypt",
    period: "2021 – 2025"
  };

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
            Experience & Education
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
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
                      {exp.description.map((item, i) => (
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
                  <h3 className="text-2xl font-bold mb-4">Certifications</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">Design Patterns</p>
                        <p className="text-sm text-muted-foreground">LinkedIn Learning</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">Front-End Development Certification (Bootstrap, React, Redux)</p>
                        <p className="text-sm text-muted-foreground">freeCodeCamp</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">Frontend development diploma</p>
                        <p className="text-sm text-muted-foreground">Route Academy (04/2021 – 10/2021)</p>
                      </div>
                    </div>
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