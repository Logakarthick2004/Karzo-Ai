import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Requirement Analysis", desc: "Deep-dive into your business, users, and goals to map the right solution." },
  { n: "02", title: "Strategy & Planning", desc: "Architecture, roadmap, and milestones — engineered for clarity and speed." },
  { n: "03", title: "Design & Development", desc: "Beautiful UI/UX paired with clean, scalable code shipped in agile sprints." },
  { n: "04", title: "Testing & Launch", desc: "Rigorous QA, performance tuning, and a confident production deployment." },
  { n: "05", title: "Support & Scaling", desc: "Ongoing maintenance, optimization, and feature evolution as you grow." },
];

const Process = () => (
  <section className="section-padding relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">Our Process</p>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-5">
          How We <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A proven, transparent process that takes you from idea to launch — and beyond.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group glass-card rounded-2xl p-6 md:p-8 flex items-start gap-6 hover-lift"
          >
            <div className="text-3xl md:text-5xl font-heading font-bold gradient-text shrink-0 w-16 md:w-24">{s.n}</div>
            <div className="flex-1 pt-1 md:pt-2">
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-1.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
