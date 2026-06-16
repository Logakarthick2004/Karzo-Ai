import { motion } from "framer-motion";
import { Workflow, Layers, Zap, Wallet, LifeBuoy } from "lucide-react";

const benefits = [
  { icon: Workflow, title: "End-to-End Solutions", description: "From planning and design to deployment and scaling — one accountable team." },
  { icon: Layers, title: "Scalable Technology", description: "Future-ready architecture built on modern frameworks and cloud-native tools." },
  { icon: Zap, title: "Fast Delivery", description: "Agile sprints and rapid prototyping take you from idea to launch in weeks." },
  { icon: Wallet, title: "Affordable Pricing", description: "Startup-friendly packages with transparent pricing — no surprises, ever." },
  { icon: LifeBuoy, title: "Dedicated Support", description: "Long-term maintenance, upgrades, and a partner that grows with your business." },
];

const WhyChoose = () => (
  <section id="about" className="section-padding relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">Why Karzo</p>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-5">
          Why Teams <span className="gradient-text">Choose Us</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card rounded-2xl p-7 hover-lift"
          >
            <div className="w-11 h-11 rounded-xl gradient-bg-subtle border border-primary/30 flex items-center justify-center mb-5">
              <b.icon size={20} className="text-primary" />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
