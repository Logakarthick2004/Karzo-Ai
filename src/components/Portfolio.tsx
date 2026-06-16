import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.svg";
import portfolio2 from "@/assets/portfolio-2.svg";
import portfolio3 from "@/assets/portfolio-3.svg";

const projects = [
  { image: portfolio1, title: "AI Customer Support Bot", category: "AI · E-commerce", description: "AI chat responses, order tracking, and WhatsApp integration for a growing online retailer." },
  { image: portfolio2, title: "Restaurant Ordering App", category: "Mobile App", description: "Food ordering with payment gateway and real-time delivery tracking for a multi-outlet brand." },
  { image: portfolio3, title: "School ERP Platform", category: "Custom Software", description: "Student management, attendance, fees, and live reports — one unified admin platform." },
];

const ProjectCard = ({ p, i }: { p: typeof projects[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group glass-card rounded-2xl overflow-hidden hover-lift"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={p.image}
          alt={p.title}
          style={{ y }}
          className="w-full h-[120%] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={16} className="text-primary" />
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.category}</span>
        <h3 className="text-lg font-heading font-semibold mt-1.5 mb-2">{p.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => (
  <section id="portfolio" className="section-padding relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">Our Work</p>
        <RevealHeading
          text="Featured Projects"
          highlightFrom={1}
          className="text-4xl md:text-6xl font-heading font-bold mb-5"
        />
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real solutions we've shipped for real businesses across industries.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
      </div>
    </div>
  </section>
);

import RevealHeading from "./RevealHeading";

export default Portfolio;
