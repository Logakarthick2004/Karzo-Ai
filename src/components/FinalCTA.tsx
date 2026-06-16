import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative surface-dark rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/30 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] bg-primary-glow/20 rounded-full blur-[120px]" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-5 text-background">
              Ready to build something <span className="gradient-text">amazing?</span>
            </h2>
            <p className="text-background/70 max-w-xl mx-auto mb-9">
              Tell us about your project. We'll respond within 24 hours with a roadmap and free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" onClick={() => scrollTo("contact")} className="gradient-bg text-primary-foreground hover:opacity-90 px-7 h-12 rounded-full shadow-lg shadow-primary/30">
                Start your project <ArrowRight className="ml-1" size={16} />
              </Button>
              <Button size="lg" variant="ghost" onClick={() => scrollTo("contact")} className="px-7 h-12 rounded-full text-background hover:bg-background/10">
                <MessageSquare className="mr-1.5" size={16} /> Talk to experts
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
