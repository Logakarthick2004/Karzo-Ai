import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-24">
      <div className="absolute inset-x-0 bottom-0 h-[70vh] funnel-bg" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 pl-1 pr-4 py-1 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-9 shadow-sm"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full gradient-bg text-primary-foreground">New</span>
            <span className="text-xs font-medium text-foreground/80">Now with AI-powered automation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-heading font-bold leading-[1.02] mb-7 text-foreground"
          >
            Transforming ideas into <br className="hidden md:block" />
            intelligent digital <span className="gradient-text">solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10"
          >
            We help businesses scale with AI, websites, mobile apps, and custom software — engineered for growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button size="lg" onClick={() => navigate("/contact")} className="h-12 px-7 rounded-full bg-foreground text-background hover:bg-foreground/90">
              Get started <ArrowRight className="ml-1" size={16} />
            </Button>
            <Button size="lg" variant="ghost" onClick={() => navigate("/portfolio")} className="h-12 px-7 rounded-full text-foreground hover:bg-foreground/5">
              View portfolio
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
