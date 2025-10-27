import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 blur-3xl animate-glow-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Ahmed Mohamed
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
              Frontend Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Specializing in responsive web and dashboard design, building high-performance 
            dynamic projects with clean, maintainable code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              variant="outline"
              className="group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href="mailto:ahmedmohamedali20003@gmail.com">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Contact Me
              </a>
            </Button>
            
            <Button
              variant="outline"
              className="group border-accent/50 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              asChild
            >
              <a href="https://linkedin.com/in/ahmed-mohamed-5b319b277" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>

           
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Giza, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-glow-pulse" />
              <span>Available for work</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
